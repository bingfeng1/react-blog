import React, { useState, useEffect } from 'react';
import { Avatar, Icon, Divider } from 'antd';
import { reqEditor } from '../../api';

const Aside = () => {
    const [editor, setEditor] = useState({})

    useEffect(() => {
        const result = reqEditor()
        setEditor(() => {
            return result
        })
    }, [editor])

    // 生成需要的图标链接
    const createIcon = (list = []) => {
        return list.map((item) => {
            return (
                <a target="_blank" key={item.url} rel="noopener noreferrer" href={item.url} >
                    <Icon type={item.icon} style={{ fontSize: '2rem', color: '#888'}} />
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