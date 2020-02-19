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