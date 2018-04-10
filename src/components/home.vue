<template>
  <div class="layout">
       <qus-header></qus-header>
       <div class="container">
       <qus-title></qus-title>
       <div class="content">
            <mu-float-button icon="Go" secondary class="demo-float-button" @click="startDo"/>
       </div>
       </div>
  </div>
</template>

<script>
import QusHeader from './header'
import QusTitle from './title'
export default {
  name: 'home',
  components:{
    QusHeader,QusTitle
  },
 methods:{
    startDo:function(){
       this.$router.push({path:'./ques'})
    }
  }

}
</script>


<style scoped>

.content{
  height:100px;
  width:100px;
  position: absolute;
  top:80%;
  left:50%;
  margin:-50px 0 0 -50px;
}

.tips{
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
}


</style>
