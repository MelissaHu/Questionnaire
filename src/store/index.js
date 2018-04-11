import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

export default new vuex.Store({
    state: {
        title: '情商测试'
    },
    mutations: {
        changeTitle: state => state.title = '开始答题'
    }
})