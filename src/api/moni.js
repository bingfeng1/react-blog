const editor = {
    name: '冰风',    // 名字
    avatar: 'https://apic.douyucdn.cn/upload/avatar/008/63/23/75_avatar_big.jpg?rltime',    // 头像地址（或者base64）
    socialContact: [
        {
            icon: 'github',    // 图标地址
            iconfont: false,    //是否来自阿里图标库
            url: 'https://github.com/bingfeng1',    //具体地址
        },
        {
            icon: 'github',    // 图标地址
            iconfont: false,    //是否来自阿里图标库
            url: 'https://github.com/bingfeng2',    //具体地址
        }
    ]
}

const articles = [
    {
        id:'1',
        title: '我的博客',    //文章标题
        date: '2020-02-20',    //发布日期
        group: '生活',    //所在小组
        customerNum: 0,    //看过文章数量
        img: '',    //文章图片
        desc: 'abc',    //描述
        isTop: Boolean,    //是否置顶
    },
    {
        id:'2',
        title: '我的博客2',    //文章标题
        date: '2020-02-20',    //发布日期
        group: '生活',    //所在小组
        customerNum: 0,    //看过文章数量
        img: '',    //文章图片
        desc: 'abc',    //描述
        isTop: Boolean,    //是否置顶
    }
]

export {
    editor,
    articles
}