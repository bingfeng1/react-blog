import React, { useState, useEffect } from 'react';
import { Avatar, Icon, Divider } from 'antd';
import { reqEditor } from '../../api';

/**
 * 右侧个人信息列
 */
const Aside = () => {
    const [editor, setEditor] = useState({})

    useEffect(() => {
        // 异步获取信息
        reqEditor().then(result => {
            const {data} = result
            setEditor(() => {
                return data
            })
        })
    }, [])

    // 生成需要的图标链接
    const createIcon = (list = []) => {
        return list.map((item) => {
            return (
                <a target="_blank" style={{margin:'0 10px'}} key={item.url} rel="noopener noreferrer" href={item.url} >
                    <Icon type={item.icon} style={{ fontSize: '2rem', color: '#888' }} />
                </a>
            )
        })
    }

    return (
        <div className="flex-column-center">
            <Avatar
                size={100}
                src={editor.avatar}>
            </Avatar>
            <div className="name">
                {editor.name}
            </div>
            <div>

            </div>
            <Divider>社交账号</Divider>
            <div className="flex-center">
                {
                    createIcon(editor.socialContact)
                }
            </div>
        </div>
    )
}

export default Aside