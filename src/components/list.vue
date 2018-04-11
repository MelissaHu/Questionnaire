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
          title: "我有能力克服各种困难",
          option: [{ ans: "是的" }, { ans: "不一定" },{ ans: "第三个答案" }, { ans: "第四个答案" }]
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
  },
  watch:{
      picked:{
          handler(value){
              if(value){
                  this.$router.push({path:'./score'})
              }
          }
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
