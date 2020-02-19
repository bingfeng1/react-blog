import React from 'react';
import { Row, Col, Menu, Dropdown, Icon, message, Button } from 'antd';

const Header = () => {
    const onClick = ({ key }) => {
        message.info(`Click on item ${key}`);
    };

    const menu = () => {
        return (
            <Menu onClick={onClick}>
                <Menu.Item key="1">
                    <a target="_blank" rel="noopener noreferrer" href="http://www.baidu.com/">
                        1st menu item
                </a>
                </Menu.Item>
            </Menu>
        )
    }

    return (
        <>
            <Row
                className="header"
                type="flex"
                align="middle"
                justify="space-between">
                <Col span={8} className="title">
                    冰风的博客
                </Col>
                <Col span={8} className="right">
                    <Dropdown overlay={menu}>
                        <Button className="ant-dropdown-link"
                            onClick={e => e.preventDefault()}>
                            更多链接 <Icon type="down" />
                        </Button>
                    </Dropdown>
                </Col>
            </Row>
        </>
    )
}

export default Header