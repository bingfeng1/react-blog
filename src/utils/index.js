// 工具类
// 储存session
const setSession = (key, data) => sessionStorage.setItem(key, JSON.stringify(data))

const getSession = key => JSON.parse(sessionStorage.getItem(key))

export {
    setSession,
    getSession
}