import React from 'react'
import { Tag, Icon } from 'antd'
import { dateFormat } from '../../utils'

/**
 * 文章标题
 */
const Title = ({ title, isTop, date, group, customerNum }) => {
    return (
        <div>
            <div className="title">{title}</div>
            <div className="gray">
                {isTop && <Tag className="top" color="#2db7f5"> 置顶</Tag>}
                <span><Icon type="calendar" />{dateFormat(date).getYearMonthDate}</span>
                <span><Icon type="tag" />{group}</span>
                <span><Icon type="read" />{customerNum}</span>
            </div>
        </div>
    )
}

export default Title