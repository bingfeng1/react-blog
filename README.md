# 现存已知问题/待完成功能
- [x] 博客分类未完成
- [x] 在文章详情页面刷新报错（互联网中）
- [x] 日期格式问题
- [ ] 文章访问人数
- [x] 更多链接数据
- [ ] 个人社交账号添加
- [ ] 文章列表样式问题
- [x] 文章的锚点列表功能
- [x] 一键返回首页功能

# 计划作为个人博客使用
也就随便记录一些东西。
主要用于练习巩固，并增加新的技能。
以后会尝试将本人所会的一点点上传发布

**config/apiStr.js开发环境和正式环境必须分开**

# 使用技术
- react全家桶
- mongo
- express

# 大致功能
- 个人信息
- 文章列表
- 文章详情
- 更多链接

# 使用的表结构
// 个人信息
name:String,    // 名字
avatar:String,    // 头像地址（或者base64）
socialContact:[
    {
        icon:String,    // 图标地址
        iconfont:Boolean,    //是否来自阿里图标库
        url:String,    //具体地址
    }
],
customerNum:Number  // 总访问次数

// 文章信息
title:String,    //文章标题
date:Date,    //发布日期
group:String,    //所在小组
customerNum:Number,    //看过文章数量
img:String,    //文章图片
desc:String,    //描述
isTop:Boolean,    //是否置顶

# 前后端交互api
所有的api都增加一个前缀，用于后端接口通讯
- reqEditor：获取作者信息
- reqArticles：获取文章信息
- reqArticleDetail：获取文章详情
- reqArticleGroup：获取文章分组
- reqExtendLink：获取扩展链接

# 页面介绍
- Home：首页，大致展示博文描述
- Detail：文章详情，markdown使用了 jspang.com 教程中的样式

