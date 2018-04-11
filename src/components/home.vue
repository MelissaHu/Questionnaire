<template>
  <div class="layout">
       <qus-header></qus-header>
       <div class="content">
        <router-view></router-view> 
       </div>
  </div>
</template>

<script>
import QusHeader from './common/header'
export default {
  name: 'home',
  components:{
    QusHeader
  }
}
</script>


<style>

.content{
  margin-top:10%;
}



</style>
