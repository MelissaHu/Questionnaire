<template>
     <div class="items">
         <div class="itemBox"  v-for="(item,index) in items" :key="item.id" >
            <p class="title">{{index+1}},{{item.title}}</p>
             <mu-radio v-for="(labels) in item.option" 
                       :key="labels.id" 
                       :label="labels.ans"  
                       v-model="picked[index]"
                       :nativeValue="labels.ans"
                        :name="'goup'+index" class="demo-radio"/>
         </div>
     </div>
</template>

<script>
export default {
  data() {
    return {
      picked:[],
      items: [
        {
          title: "我有能力克服各种困难",
          option: [{ ans: "是的" }, { ans: "不一定" }]
        },
        {
          title: "如果我能到一个新的环境，我要把生活安排得",
          option: [{ ans: "是的" }, { ans: "不一定" }]
        },
        {
          title: "一生中，我觉得自已能达到我所预想的目标",
          option: [{ ans: "是的" }, { ans: "不一定" }]
        },
        {
          title: "不知为什么，有些人总是回避或冷淡我",
          option: [{ ans: "是的" }, { ans: "不一定" }]
        },
        {
          title: "在大街上，我常常避开我不愿打招呼的人",
          option: [{ ans: "是的" }, { ans: "不一定" }]
        },
        {
          title: "当我集中精力工作时，假使有人在旁边高谈阔论",
          option: [{ ans: "是的" }, { ans: "不一定" }]
        },
        {
          title: "我不论到什么地方，都能清楚地辨别方向",
          option: [{ ans: "是的" }, { ans: "不一定" }]
        },
        {
          title: "我热爱所学的专业和所从事的工作",
          option: [{ ans: "是的" }, { ans: "不一定" }]
        },
        {
          title: "气候的变化不会影响我的情绪",
          option: [{ ans: "是的" }, { ans: "不一定" }]
        },
        {
          title: "我从不因流言蜚语而生气",
          option: [{ ans: "是的" }, { ans: "不一定" }]
        }
      ]
    };
  },watch:{
    picked(val){
      console.log(val);
    }
  }
};
</script>
<style  scoped>
.items{
  padding:15px;
}
.itemBox{
  text-align: left;
}
.itemBox > label{
  margin-right: 25px;
}
</style>


</style>
