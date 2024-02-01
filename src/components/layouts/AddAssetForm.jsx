import React, {useState} from 'react';
import {Select, Space} from "antd";
import {useCrypto} from "../../context/crypto-context.jsx";
import CoinHeader from "./CoinHeader.jsx";

const AddAssetForm = () => {
    const {crypto} = useCrypto()
    const [coin, setCoin] = useState(null)


    if(!coin) {
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

    return (
        <form>
            <CoinHeader coin={coin} />
        </form>
    );
};

export default AddAssetForm;