<template></template>
<script>

export default {
  created(){
    if(process.browser){
      $('#modalLogin').modal({ keyboard: false, backdrop: 'static'})
    }
  }
}
</script>

<style>

</style>