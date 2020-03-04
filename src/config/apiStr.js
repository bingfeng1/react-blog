// 后端接口字符串
// 正式发布，需要将BASE_URL改为内网具体地址
// const BASE_URL = 'http://192.168.1.50:9000/api/blog'
const hostname = document.location.hostname
let BASE_URL = '/api/blog'
if (!(hostname.startsWith('192.168.1') || hostname === 'localhost')) {
    BASE_URL = 'http://192.168.1.50:9000' + BASE_URL
}

export {
    BASE_URL
}