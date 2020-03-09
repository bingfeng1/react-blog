import { SET_ARTICLE_ANCHOR } from "../actionTypes";

// 用于处理博客相关的reducer

const initArticleGroup = []

function articleAnchor(state = initArticleGroup, action) {
    switch (action.type) {
        // 设置文章分组
        case SET_ARTICLE_ANCHOR:
            return action.value       
        default:
            return state;
    }
}

export default articleAnchor