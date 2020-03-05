import React, { useEffect, useState } from 'react'
import { Card } from 'antd'
import { reqArticleDetail } from '../../api'
import Title from '../../components/Home/Title'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'

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

    // 解析markdown
    const renderer = new marked.Renderer()

    marked.setOptions({
        renderer,
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: false,
        smartLists: true,
        highlight(code) {
            return hljs.highlightAuto(code).value
        }
    })

    // 这里需要后端一个markdown文本编辑器
    return (
        <Card
            title={(
                <Title {...state}></Title>
            )}
            className="detail">
            <div dangerouslySetInnerHTML={{ __html: marked(article) }}>
            </div>
        </Card>
    )
}

export default Detail