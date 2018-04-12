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
       <mu-raised-button label="下一题" v-if="nextTit" class="demo-raised-button" secondary @click="nextList"/>
       <router-link to="/score" v-if="showScore"><mu-raised-button label="查看结果"  class="demo-raised-button" secondary /></router-link>
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
      items:[],
      num:'',
      nextTit:true,
      showScore:false
    };
  },
  watch:{
   picked:{
     handler(val){
       const itemAll = this.$store.state.qtList.length;
       const activeItem = this.items[0].id 
       const pgval = parseInt((activeItem+1)*100 /itemAll,10)
       this.num = pgval
        if(itemAll == (activeItem+1)){
          this.showScore = true
     }
     }
   }
  },
  mounted(){
    this.label=this.$store.state.btn
    this.$store.commit('changeTitle')
    this.getData()
   },
   methods:{
    getData(){
       const initData=this.$store.state.qtList[0]
       this.items.push(initData)
    },
    nextList(){
      const ans = this.picked[0]
      if(ans == this.items[0].rightKey){
        this.$store.commit('count')
      }
    
      if(this.picked.length !=0){
      const itemAll = this.$store.state.qtList.length;
      const activeItem = this.items[0].id 
      const ifEqual = itemAll -activeItem
     if(ifEqual==2){
        this.nextTit=false
     }
      const val = (this.items[0].id) + 1
      const newData = this.$store.state.qtList[val]
      this.items=[]
      this.items.push(newData)
          }else{
            alert('未选中选项，请仔细检查')
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
