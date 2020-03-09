import { SET_ARTICLE_ANCHOR } from "../actionTypes"

// 获取分组
const setArticleAnchorAction = (data) => {
    return ({
        type: SET_ARTICLE_ANCHOR,
        value: data
    })
}

export {
    setArticleAnchorAction
}