import {Button, Layout, Modal, Select, Space} from "antd";
import {useCrypto} from "../../context/crypto-context.jsx";
import {useEffect, useState} from "react";

const headerStyle = {
    width: '100%',
    textAlign: 'center',
    height: 60,
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
};

export default function AppHeader() {
    const [select, setSelect] = useState(false)
    const [modal, setModal] = useState(false)
    const {crypto} = useCrypto()

    useEffect(() => {
        const keypress = (event) => {
            if (event.key === '/') {
                setSelect((prev) => !prev)
            }
        }
        document.addEventListener('keypress', keypress)
        return () => document.removeEventListener('keypress', keypress)
    }, [])

    function handeSelect(value) {
        console.log(value)
        setModal(true)
    }

    return (
        <Layout.Header style={headerStyle}>
            <Select
                open={select}
                onSelect={handeSelect}
                onClick={() => setSelect((prev) => !prev)}
                style={{
                    width: 250,
                }}
                value="press / to open"
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
            <Button type="primary">Add Asset</Button>
            <Modal open={modal}
                   footer={null}
                   onCancel={() => setModal(false)}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </Layout.Header>
    )
}