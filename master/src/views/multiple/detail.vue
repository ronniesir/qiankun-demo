<template>
  <div>
    <B>触发多个子应用</B>
    <div id="contentView"></div>
    <div id="contentView2"></div>
  </div>
</template>
<script>
import { start } from "qiankun";
export default {
  mounted () {
      start();
  },
  computed:{
   
  }
}
</script>

<style scoped>
.header-row {
  padding: 10px 8px;
  background: #f1f1f1;
  width: 100%;
}
</style>