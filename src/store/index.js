import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

export default new vuex.Store({
    state: {
        title: '情商测试',
        btn: '下一题',
        score: 0,
        qtList: [{
            id: 0,
            title: "你平常的作息是否十分不正常？",
            option: [{ ans: "很正常，因为工作或上课的关系" }, { ans: "不是很正常，都需要闹铃叫醒" }, { ans: "非常不正常，常常颠倒黑白" }],
            rightKey: '很正常，因为工作或上课的关系'
        }, {
            id: 1,
            title: "你每做一件事之前都会事先计划好步骤吗？",
            option: [{ ans: "是的" }, { ans: "不是" }, { ans: "不一定" }],
            rightKey: '不是'
        }, {
            id: 2,
            title: "你是否经常在朋友面前吹嘘自己的能力？",
            option: [{ ans: "从来没有" }, { ans: "偶尔" }, { ans: "经常" }, { ans: "这对我是家常便饭" }],
            rightKey: '偶尔'
        }, {
            id: 3,
            title: "这是个大问题，而且是问题四",
            option: [{ ans: "答案1" }, { ans: "答案2" }, { ans: "正确答案在这里" }, { ans: "答案3" }],
            rightKey: '答案1'
        }, {
            id: 4,
            title: "对于不喜欢的人或物，你的态度都是很强硬的？",
            option: [{ ans: "是的，不喜欢就是不喜欢" }, { ans: "不一定，看自身对事务的厌恶度" }, { ans: "不会，会太过于伤人" }, { ans: "这是个假答案" }],
            rightKey: '是的，不喜欢就是不喜欢'
        }, {
            id: 5,
            title: "你最喜欢一年四季中的哪个季节？",
            option: [{ ans: "春天" }, { ans: "夏天" }, { ans: "秋天" }, { ans: "冬天" }],
            rightKey: '冬天'
        }, {
            id: 6,
            title: "工作存在一个对手，你会觉得刺激和有动力？",
            option: [{ ans: "是的" }, { ans: "不是" }],
            rightKey: '是的'
        }, {
            id: 7,
            title: "这是个大问题，而且是问题五",
            option: [{ ans: "test1" }, { ans: "test2" }, { ans: "test3" }, { ans: "正确答案在这里" }],
            rightKey: 'test1'
        }, {
            id: 8,
            title: "你觉得下面哪个对你最重要？",
            option: [{ ans: "爱情" }, { ans: "亲情" }, { ans: "友情" }, { ans: "财富" }],
            rightKey: '亲情'
        }, {
            id: 9,
            title: "这是最后一个问题了，，哈哈哈。。。",
            option: [{ ans: "白痴" }, { ans: "二百五" }, { ans: "狗带吧" }, { ans: "呵呵呵" }],
            rightKey: '狗带吧'
        }]
    },
    mutations: {
        changeTitle: state => state.title = '开始答题',
        finishAll: state => state.btn = '查看得分',
        count: state => state.score++
    }
})