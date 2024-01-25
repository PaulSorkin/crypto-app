import React from 'react';
import {Layout} from "antd";

const siderStyle = {
    padding: '1rem',
};

function AppSider(props) {
    return (
        <Layout.Sider width="25%" style={siderStyle}>
            Sider
        </Layout.Sider>
    );
}

export default AppSider;