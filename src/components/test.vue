<template>
<div id="quesList">
   <div class="container">
 <mu-card>
     <div class="items" style="padding:5% 0;">
         <div class="itemBox"  v-for="(item,index) in items" :key="item.id" >
            <p class="title">{{item.title}}</p>
             <mu-radio v-for="(labels) in item.option" 
                       :key="labels.id" 
                       :label="labels.ans"  
                       v-model="picked[index]"
                       :nativeValue="labels.ans"
                        :name="'goup'+index" class="demo-radio"/>
         </div>
         
     </div>
      </mu-card>
      <div style="margin-top:15%;">
       <mu-raised-button label="下一题" class="demo-raised-button" secondary/>
    </div>
     </div>
      <qus-progress :value="num"></qus-progress>
     </div>
</template>
<script>
import QusHeader from './common/header'
import QusProgress from './progress'
export default {
  components:{
    QusHeader,QusProgress
  },
  data() {
    return {
      picked:[],
      items: [
        {
          title: "这是个大问题，而且是问题一",
          option: [{ ans: "第一个选项" }, { ans: "第二个选项" },{ ans: "第三是答案" }, { ans: "第四个选项" }]
        }
      ]
    };
  },
  computed:{
    num(){
      // const filterFunc = item=>!!item
      const filterFunc = function (item){
        return !!item
      }.bind(this)
      const val =  parseInt(this.picked.filter(filterFunc).length*100 /this.items.length,10)
      return val;
    }
  }
};
</script>




<style scoped>
 .itemBox .title{
     text-align: left;
     font-size: 18px;
     font-weight: 500;
     text-indent: 2em;
     color:#000;
 }
</style>
