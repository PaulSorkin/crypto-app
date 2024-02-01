import React, {useRef, useState} from 'react';
import {Button, DatePicker, Form, InputNumber, Result, Select, Space} from "antd";
import {useCrypto} from "../../context/crypto-context.jsx";
import CoinHeader from "./CoinHeader.jsx";

const validateMessages = {
    required: "${label} is required!",
    types: {
        number: '${label} is not valid number',
    },
    number: {
        range: "${label} must be between ${min} and ${max}",
    }
};

const AddAssetForm = ({onClose}) => {
    const {crypto, addAsset} = useCrypto()
    const [coin, setCoin] = useState(null)
    const [submitted, setSubmited] = useState(false)
    const [form] = Form.useForm()
    const assetRef = useRef()

    if(submitted) {
        return (
            <Result
                status="success"
                title="New Asset Has Been Added!"
                subTitle={`Added ${assetRef.current.amount} of ${coin.name} by ${assetRef.current.price} price`}
                extra={[
                    <Button type="primary" key="console" onClick={onClose}>
                        Close
                    </Button>,
                ]}
            />
        )
    }

    if (!coin) {
        return (
            <Select
                onSelect={(v) => setCoin((crypto.find((c) => c.id === v)))}
                style={{
                    width: '100%',
                }}
                placeholder="Select coin"
                options={crypto.map(coin => ({
                    label: coin.name,
                    value: coin.id,
                    icon: coin.icon,
                }))}
                optionRender={(option) => (
                    <Space>
                        <img src={option.data.icon}
                             alt={option.data.label}
                             style={{width: 20}}/>
                        {option.data.label}
                    </Space>
                )}
            />
        )
    }

    function onFinish(values) {
        const newAsset = {
            id: coin.id,
            amount: values.amount,
            price: values.price,
            date: values.date?.$d ?? new Date(),
        }
        assetRef.current = newAsset
        setSubmited(true)
        addAsset(newAsset)
    }

    function handleAmountChange(value) {
        const price = form.getFieldValue('price')
        form.setFieldsValue({
            total: +(value * price).toFixed(2)
        })
    }

    function handlePriceChange(value) {
        const amount = form.getFieldValue('amount')
        form.setFieldsValue({
            total: +(amount * value).toFixed(2)
        })
    }

    return (
        <>
            <CoinHeader coin={coin}/>

            <Form
                form={form}
                validateMessages={validateMessages}
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 10,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    price: +coin.price.toFixed(2)
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    label="Amount"
                    name="amount"
                    rules={[
                        {
                            required: true,
                            type: "number",
                            min: 0,
                        },
                    ]}
                >
                    <InputNumber style={{width: '100%'}}
                                 placeholder={"Enter coin amount"}
                                 onChange={handleAmountChange}/>
                </Form.Item>

                <Form.Item label="Price" name="price">
                    <InputNumber onChange={handlePriceChange} style={{width: '100%'}}/>
                </Form.Item>

                <Form.Item label="Date & Time" name="date">
                    <DatePicker showTime style={{width: '100%'}}/>
                </Form.Item>

                <Form.Item label="Total" name="total">
                    <InputNumber disabled style={{width: '100%'}}/>
                </Form.Item>


                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Add Asset
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default AddAssetForm;