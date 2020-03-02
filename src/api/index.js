import axios from 'axios'
import { message } from 'antd'

axios.interceptors.response.use(response=>{
    return response;
},err=>{
    return message.error(`出现错误：${err}`)
})


// 获取作者信息
const reqEditor = () => {
    return axios.get('/getEditor')
}

// 获取文章
const reqArticles = () => {
    return axios.get('/getArticles')
}

// 获取文章详情
const reqArticleDetail = (_id) => {
    return axios.get('/getArticleDetail', {
        params: {
            _id
        }
    })
}


export {
    reqEditor,
    reqArticles,
    reqArticleDetail
}