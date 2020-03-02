import React from 'react'
import Home from '../pages/Home/Home'
import Detail from '../pages/Detail/Detail'
import { Route, Switch } from 'react-router-dom'
import NoFound from '../pages/404/404'

const Routes = () => {
    // 配置路由
    const routes = [
        {
            path: '/',
            exact: true,
            component: Home
        },
        {
            path: '/detail/:_id',
            component: Detail
        }
    ]
    return (
        <Switch>
            {
                routes.map(item => {
                    return (
                        <Route
                            exact={item.exact}
                            key={item.path}
                            path={item.path}
                            component={item.component} />
                    )
                })
            }
            <Route component={NoFound}/>
        </Switch>
    )
}

export default Routes;