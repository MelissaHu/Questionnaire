<template>
   <div class="container">
   <mu-card>
   <h1>温馨提示<i>!</i></h1>
   <p style="text-indent: 2em;text-align:left;">这是一组超级棒棒的题目，由于答题后不能返回修改，所以请再答题时候认真思考!</p>
   <p style="text-indent: 2em;text-align:left;">计算得分的规则是答对一题得1分，打错得0分。</p>
   <p>准备好了，请点击下面按钮开始。</p>
   </mu-card>
   <div class="startBtn">
       <mu-raised-button label="开始答题" class="demo-raised-button" secondary @click="goStart"/>
   </div>
   </div>
</template>

<script>
export default {
   methods:{
   goStart:function(){
       this.$router.push({path:'./list'})
       this.$store.commit('changeTitle')
    }
  }
}
</script>




<style>
.startBtn{
    margin-top:15%;
}
</style>

