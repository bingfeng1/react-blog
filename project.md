
# 使用技术
- react全家桶
- mongo
- express

# 数据库设计
**假设基本大部分数据为数据库后端获取**
```
// 个人信息
name:String,    // 名字
avatar:String,    // 头像地址（或者base64）
socialContact:[
    {
        icon:String,    // 图标地址
        iconfont:Boolean,    //是否来自阿里图标库
        url:String,    //具体地址
    }
]

// 文章信息
title:String,    //文章标题
date:Date,    //发布日期
group:String,    //所在小组
customerNum:Number,    //看过文章数量
img:String,    //文章图片
desc:String,    //描述
isTop:Boolean,    //是否置顶
```

# 首先搭建环境
``` shell
//生成create-react-app
npx create-react-app blog-react

// 等待安装完成后
cd blog-react
npm start

// 用到antd，axios,react-router-dom（react-redux以后再说，不一定用得到）
npm i antd axios react-router-dom -S
```

``` shell
// 使用antd高级配置（根据antd官网）
npm i react-app-rewired customize-cra babel-plugin-import -D

```

# 建立文件夹
在src文件夹下新建
- api （存放ajax调用）
- components    （各功能组件）
- config    （配置项）
- pages （具体页面放置）
- routes    （路由配置）

# 配置路由准备
``` javascript
import React from 'react'
import Home from '../pages/Home/Home'
import { Route, Redirect } from 'react-router-dom'

const Routes = () => {
    // 配置路由
    const routes = [
        {
            path: '/',
            exact: true,
            component: Home
        }
    ]
    return (
        <>
            {
                routes.map(item => {
                    return (
                        <Route
                            exact={item.exact}
                            key={item.path}
                            component={item.component} />
                    )
                })
            }
            <Redirect to="/" />
        </>
    )
}

export default Routes;
```

# 在App.js中搭建页面主体
``` javascript
// 引入 react-router-dom
function App() {
  return (
    <Router>
      <article>
        {/* 主体头部 */}
        <header>
          <Header />
        </header>
        {/* 内容区域 */}
        <main>
          {/* 路由切换 */}
          <section>
            <Routes />
          </section>
          {/* 侧边栏 */}
          <aside>
            <Aside />
          </aside>
        </main>
        {/* 主体底部 */}
        <footer>
          <Footer/>
        </footer>
      </article>
    </Router>
  );
}
```
在index.less(因为可能会修改antd主题，所以可以根据文档加载npm install less less-loader。如果不需要改变主体，也可以使用scss)

``` less

body {
    margin: 0;
    padding: 0;
}

#root {
    background: rgb(241, 241, 241);

    // 主体布局
    &>article {
        &>header {
            margin-bottom: 20px;

            // 头部样式
            .header {

                // 标题
                .title {
                    font-size: 1.1rem;
                    color: rgba(0, 108, 255);
                }

                padding: 1rem 2rem;
                background: white;
            }
        }

        // 内容主体
        &>main {
            display: flex;
            align-items: flex-start;
            justify-content: space-around;
            margin: 20px;

            // 路由主体
            &>section {
                background: white;
                margin-right: 20px;
                flex-grow: 1;
            }

            // 布局侧边栏
            &>aside {
                background: white;
                flex-basis: 300px;
            }
        }

        &>footer {
            color: #888;
            padding-bottom: 40px;
        }

    }
}

// 全局常量
// 白色背景
.bg-white {
    background: white;
}

// 文字靠右
.right {
    text-align: right;
}

.center {
    text-align: center;
}

// flex布局

.flex-column-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
```

