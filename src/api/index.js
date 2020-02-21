// import axios from 'axios'
import { editor, articles } from './moni'

const reqEditor = () => {
    // return axios.get()
    return editor
}

const reqArticles = () => {
    // return axios.get()
    return articles
}

export {
    reqEditor,
    reqArticles
}