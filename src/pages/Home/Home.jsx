import React, { useState, useEffect } from 'react';
import { reqArticles } from '../../api';
import { Card, Icon, Button } from 'antd';
import { Link } from 'react-router-dom'
import Title from '../../components/Home/Title';
import './home.less'


const Home = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const result = reqArticles()
        setArticles(() => {
            return result
        })
    }, [articles])

    return (
        <div className="home">
            {
                articles.map(item => {
                    const { id, title, date, group, customerNum, img, desc, isTop } = item
                    return (
                        <Card title={(
                            <Title {...item}></Title>
                        )} key={title} style={{ marginBottom: '14px' }}>
                            <div>
                                {img}
                            </div>
                            <div>
                                {desc}
                            </div>
                            <footer className="right">
                                <Link to={`/detail/${id}`}>
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