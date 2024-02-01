import React from 'react';
import {Layout, Typography} from "antd";
import {useCrypto} from "../../context/crypto-context.jsx";
import PortfolioChart from "./PortfolioChart.jsx";
import AssetsTable from "./AssetsTable.jsx";

const contentStyle = {
    textAlign: 'center',
    minHeight: 'calc(100vh - 60px)',
    color: '#fff',
    backgroundColor: '#001529',
    padding: '1rem'
};

function AppContent() {
    const {assets, crypto} = useCrypto()
    const cryptoPriceMap = crypto.reduce((acc, c) => {
        acc[c.id] = c.price
        return acc
    }, {})
    const portfolioValue = assets.map(asset => asset.amount * cryptoPriceMap[asset.id])
        .reduce((acc, v) => (acc += v), 0)
        .toFixed(2)

    return (
        <Layout.Content style={contentStyle}>
            <Typography.Title level={3} style={{textAlign: 'left', color: '#fff'}}>
                Portfolio Total: {portfolioValue} $
            </Typography.Title>
            <div style={{display: 'flex', gap: '10rem', justifyContent: 'center', alignItems: 'center'}}>
                <PortfolioChart />
                <AssetsTable />
            </div>
        </Layout.Content>
    );
}

export default AppContent;