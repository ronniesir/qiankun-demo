<template>
  <div>
    <div class="header-row">请在主应用中填写如下表单</div>
    <div id="contentView"></div>
  </div>
</template>
<script>
import {  start } from "qiankun";
export default {
  mounted(){

    start();
  }
}
</script>

<style scoped>
  .header-row{
    padding: 10px 8px;
    background: #f1f1f1;
    width: 100%;
  }
</style>