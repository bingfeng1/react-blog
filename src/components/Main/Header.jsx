import React from 'react';
import { Row, Col, Menu, Dropdown, Icon, Button } from 'antd';
import { Link } from 'react-router-dom';

/**
 * 博客头部
 */
const Header = () => {
    const menu = () => {
        return (
            <Menu>
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
                    <Link to="/">
                        冰风的博客
                    </Link>
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