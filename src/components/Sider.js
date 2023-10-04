import React from 'react';
import { Layout, Menu, theme } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;

const SiderMenu = () => {

    return (
        <div className = "Sider">
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
            console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
            }}
            >
            <div className="demo-logo-vertical" />
            <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['4']}
            items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
                (icon, index) => ({
                key: String(index + 1),
                icon: React.createElement(icon),
                label: `nav ${index + 1}`,
                }),
            )}
            />
        </Sider>
       </div>
    );
}

export default SiderMenu;
