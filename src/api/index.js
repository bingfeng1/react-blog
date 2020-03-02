import axios from 'axios'
import { message } from 'antd'
import { BASE_URL } from '../config/apiStr';

// 在发送前，增加url前缀
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    config.url = BASE_URL + config.url
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    return response;
}, err => {
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