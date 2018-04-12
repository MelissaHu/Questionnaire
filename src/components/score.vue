<template>
  <div class="container">
      <h2>最终得分是：{{score}}</h2>
      <router-link to="./list"><mu-raised-button label="再来一次" class="demo-raised-button" secondary/></router-link>
  </div>
</template>

<script>
export default {
  data(){
    return{
      score:this.$store.state.score
    }
  }
}
</script>
