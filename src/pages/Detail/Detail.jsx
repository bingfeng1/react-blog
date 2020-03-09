import React, { useState, useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Card, Skeleton, BackTop } from 'antd'
import { reqArticleDetail } from '../../api'
import Title from '../../components/Home/Title'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import { getSession } from '../../utils'
import { ARTICLE_ITEM } from '../../utils/type'
import { connect } from 'react-redux'
import { setArticleAnchorAction } from '../../store/actionCreator/articleAnchorAction'

/**
 * 文章详情，通过react-router-dom传入id和文章概括（其实也包含了id）
 */
const Detail = ({ setArticleAnchor }) => {
    const { _id } = useParams()
    const state = getSession(ARTICLE_ITEM)
    const hash = document.location.hash

    // 获取文章节点
    const articleAnchor = useRef(null)

    // 文章内容
    const [article, setArticle] = useState("")

    // 骨架屏
    const [loading, setLoading] = useState(true)

    const getArticleDetail = async (_id) => {
        const { data } = await reqArticleDetail(_id)
        if (data._id) {
            return data.context
        } else {
            return "无此文章"
        }
    }

    useEffect(() => {
        getArticleDetail(_id).then(context => {
            let markdown = marked(context)
            setArticle(markdown)
            setArticleAnchor(
                Array.from(
                    articleAnchor.current.querySelectorAll("[id]"))
                    .map(item => ({
                        href: `${hash}#${item.getAttribute('id')}`,
                        name: item.getAttribute('id')
                    }))
            )
            setLoading(false)
        })
        return ()=>{
            setArticleAnchor([])
        }
    }, [_id])


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
            <div
                className="markdown"
                ref={articleAnchor}
                dangerouslySetInnerHTML={{ __html: article }}>
            </div>
            <BackTop />
        </Card>
    )
}
const mapDispatchToDispatch = dispatch => {
    return {
        setArticleAnchor: (data) => {
            const action = setArticleAnchorAction(data)
            dispatch(action)
        }
    }
}

export default connect(null, mapDispatchToDispatch)(Detail)