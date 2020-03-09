import React, { useState, useEffect } from 'react';
import { Row, Col, Menu, Dropdown, Icon, Button } from 'antd';
import { Link } from 'react-router-dom';
import { reqExtendLink } from '../../api';

/**
 * 博客头部
 */
const Header = () => {
    const [extendLink, setExtendLink] = useState([])
    // 获取额外链接
    useEffect(
        () => {
            if (extendLink.length === 0) {
                (async () => {
                    const { data = [] } = await reqExtendLink()
                    setExtendLink(data)
                })()
            }
        }, [extendLink]
    )

    const menu = () => {
        return (
            <Menu>
                {
                    extendLink.map(item => {
                        if (item.url === document.location.pathname) {
                            return null
                        }
                        return (
                            <Menu.Item key={item.url}>
                                <a target="_blank" rel="noopener noreferrer" href={item.url}>
                                    {item.name}
                                </a>
                            </Menu.Item>
                        )
                    })
                }
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