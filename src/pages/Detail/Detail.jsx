import React from 'react'
import { Card } from 'antd'

const Detail = (props)=>{
    console.log(props.match.params)

    return (
        <Card
            title="标题">
                文章具体内容
        </Card>
    )
}

export default Detail