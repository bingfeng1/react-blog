import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card, Skeleton } from 'antd'
import { reqArticleDetail } from '../../api'
import Title from '../../components/Home/Title'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import { getSession } from '../../utils'
import { ARTICLE_ITEM } from '../../utils/type'

/**
 * 文章详情，通过react-router-dom传入id和文章概括（其实也包含了id）
 */
const Detail = (props) => {
    const { _id } = useParams()
    const state = getSession(ARTICLE_ITEM)

    // 文章内容
    const [article, setArticle] = useState("")

    // 骨架屏
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getArticleDetail(_id).then(context => {
            setArticle(context)
            setLoading(false)
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
            <Skeleton
                active
                loading={loading} />
            <div className="markdown" dangerouslySetInnerHTML={{ __html: marked(article) }}>
            </div>
        </Card>
    )
}

export default Detail