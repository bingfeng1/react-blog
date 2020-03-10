import React, { useState, useEffect } from 'react';
import { reqArticles, reqArticleGroup } from '../../api';
import { Card, Icon, Button } from 'antd';
import { Link } from 'react-router-dom'
import Title from '../../components/Home/Title';
import './home.less'
import { setSession } from '../../utils';
import { ARTICLE_ITEM } from '../../utils/type';

// 首页内容
const Home = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        // 获取所有文章
        reqArticles().then(async ({ data: result1 }) => {
            // 获取所有种类
            const { data: result2 } = await reqArticleGroup()
            result1.map(item => {
                // 找到种类的名称，并替换
                item.group = result2.find(item2 => item2._id === item.group)?.name ?? ""
                return { ...item }
            })
            setArticles(result1)
        })
    }, [])

    return (
        <div className="home">
            {
                articles.map(item => {
                    const { _id, title, img, desc } = item
                    return (
                        <Card title={(
                            <Title {...item}></Title>
                        )} key={title} style={{ marginBottom: '14px' }}>
                            <div style={{ textAlign: 'center' }}>
                                <img src={img} alt={img} style={{ maxHeight: '300px' }} />
                            </div>
                            <div className="desc">
                                {desc}
                            </div>
                            <footer className="right">
                                <Link to={location => {
                                    // 将内容放入session
                                    setSession(ARTICLE_ITEM, item)
                                    return { ...location, pathname: `/detail/${_id}` }
                                }}>
                                    <Button type="link">
                                        <Icon type="file" /> 查看全文 >
                                </Button>
                                </Link>
                            </footer>
                        </Card>
                    )
                })
            }
        </div>
    )
}

export default Home