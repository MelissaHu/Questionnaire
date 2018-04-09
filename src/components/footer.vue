<template>
   <div class="footer">
      <mu-linear-progress mode="determinate" :value="value" />
   </div>
</template>

<script>
export default {
    props:['value']
 
}
</script>


<style  scoped>
 .footer{
     position: fixed;
     bottom:0;
     width:100%;
     height: 20px;
     line-height: 20px;
     background: #ccc;
 }

</style>
