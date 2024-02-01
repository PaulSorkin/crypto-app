import {Button, Layout, Select, Space} from "antd";
import {useCrypto} from "../../context/crypto-context.jsx";

const headerStyle = {
    width: '100%',
    textAlign: 'center',
    height: 60,
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
};

// const options = [
//     {
//         label: 'China',
//         value: 'china',
//         emoji: '🇨🇳',
//         desc: 'China (中国)',
//     },
//     {
//         label: 'USA',
//         value: 'usa',
//         emoji: '🇺🇸',
//         desc: 'USA (美国)',
//     },
//     {
//         label: 'Japan',
//         value: 'japan',
//         emoji: '🇯🇵',
//         desc: 'Japan (日本)',
//     },
//     {
//         label: 'Korea',
//         value: 'korea',
//         emoji: '🇰🇷',
//         desc: 'Korea (韩国)',
//     },
// ];


export default function AppHeader() {
    const {crypto} = useCrypto()
    return (
        <Layout.Header style={headerStyle}>
            <Select
                style={{
                    width: 250,
                }}
                value="press / to open"
                optionLabelProp="label"
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
        </Layout.Header>
    )
}