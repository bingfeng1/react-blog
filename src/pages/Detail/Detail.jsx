import React, { useEffect, useState } from 'react'
import { Card } from 'antd'
import ReactMarkdown from 'react-markdown'
import { reqArticleDetail } from '../../api'
import Title from '../../components/Home/Title'

/**
 * 文章详情，通过react-router-dom传入id和文章概括（其实也包含了id）
 */
const Detail = (props) => {
    const { _id } = props.match.params
    const { state } = props.location

    const [article, setArticle] = useState("")

    useEffect(() => {
        getArticleDetail(_id).then(context => {
            setArticle(context)
        })
    }, [_id])

    const getArticleDetail = async (_id) => {
        const { data } = await reqArticleDetail(_id)
        if (data._id) {
            return data.context
        } else {
            return "无此文章"
        }
    }

    // 这里需要后端一个markdown文本编辑器
    return (
        <Card
            title={(
                <Title {...state}></Title>
            )}
            className="detail">
                <ReactMarkdown source={article}>

                </ReactMarkdown>
        </Card>
    )
}

export default Detail