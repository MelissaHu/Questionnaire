<template>
  <div class="layout">
       <qus-header></qus-header>
       <div class="content">
            <mu-float-button icon="Go" class="demo-float-button" @click="startDo"/>
       </div>
  </div>
</template>

<script>
import QusHeader from './header'

export default {
  name: 'home',
  components:{
    QusHeader
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
  top:50%;
  left:50%;
  margin:-50px 0 0 -50px;
}
</style>
