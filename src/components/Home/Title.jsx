import React from 'react'
import { Tag, Icon } from 'antd'


const Title = ({ title, isTop, date, group, customerNum }) => {
    return (
        <div>
            <div className="title">{title}</div>
            <div className="gray">
                <Tag color="#2db7f5">{isTop && '置顶'}</Tag>
                <span><Icon type="calendar" />{date}</span>
                <span><Icon type="tag" />{group}</span>
                <span><Icon type="read" />{customerNum}</span>
            </div>
        </div>
    )
}

export default Title