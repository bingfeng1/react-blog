import React, { useState, useEffect } from 'react';
import { reqArticles } from '../../api';
import { Card, Icon, Button } from 'antd';
import { Link } from 'react-router-dom'
import Title from '../../components/Home/Title';
import './home.less'

// 首页内容
const Home = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        reqArticles().then(result => {
            setArticles(result.data)
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
                            <div style={{textAlign:'center'}}>
                                <img src={img} alt={img} style={{height:'300px'}}/>
                            </div>
                            <div>
                                {desc}
                            </div>
                            <footer className="right">
                                <Link to={{ pathname: `/detail/${_id}`, state: item }}>
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