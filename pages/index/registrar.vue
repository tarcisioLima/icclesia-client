<template></template>
<script>

export default {
  created(){
    if(process.browser){
      $('#modalRegister').modal({ keyboard: false, backdrop: 'static'})
    }
  }
}
</script>

<style>

</style>