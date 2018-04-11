<template>
<div class="layout">
    <qus-header></qus-header>
    <div class="queContainer">
     <div class="queBox">
   
     </div>
     </div>
     </div>
     
</template>

<script>
import QusHeader from './common/header'
import QusFooter from './footer'
export default {
  components:{
    QusFooter,QusHeader
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
  }
};
</script>
<style  scoped>
.queBox{
      margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
}
.itemBox{
  text-align: left;
  padding:15px;
}
.itemBox > label{
  margin-right: 25px;
}
.queContainer{
  height:100px;
  width:100px;
  position: absolute;
  top:80%;
  left:50%;
  margin:-50px 0 0 -50px;
}
</style>


</style>
