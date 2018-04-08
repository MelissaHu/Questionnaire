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
        }, {
            path: '/ques',
            component: resolve => require(['../components/ques'], resolve)
        }

    ]
})