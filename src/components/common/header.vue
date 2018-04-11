<template>
<div class="header">
    <mu-appbar :title="title"></mu-appbar>
</div>
</template>

<script>
export default {
   computed:{
       title(){
           return this.$store.state.title
       }
   }
}
</script>



