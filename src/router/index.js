import Vue from 'vue'
import Router from 'vue-router'
import { resolve } from 'path';


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/home'
        }, {
            path: '/home',
            component: resolve => require(['../components/home'], resolve),
            children: [{
                path: '',
                component: resolve => require(['../components/tips'], resolve),
            }, {
                path: '/list',
                component: resolve => require(['../components/list'], resolve)
            }, {
                path: '/score',
                component: resolve => require(['../components/score'], resolve)
            }]
        }

    ]
})