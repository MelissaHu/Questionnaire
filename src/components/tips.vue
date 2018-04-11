<template>
   <div class="container">
   <mu-card>
   <h1>温馨提示<i>!</i></h1>
   <p>这是一组欧洲流行的测试题,可口可乐公司、麦当劳公司、诺基亚分司等世界500强众多企业，曾以此为员工EQ测试的模板。
       帮助员工了解自己的EQ状况。共33题，测试时间25分钟，最大EQ为174分。如果你已经准备就绪，请点击下面按钮开始。</p>
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

