<template>
  <div>
    <B>子应用二富文本编辑器{{tag}}-----{{$route.fullPath}}</B>

    <div id="contentView2"></div>
  </div>
</template>
<script>
import { registerMicroApps, start } from "qiankun";
export default {
  mounted () {
    registerMicroApps([
      {
        name: 'sub-app-2',
        entry: '//localhost:7070',
        container: '#contentView2',
        activeRule: '/sub2',
        props: {}
      }])
    start();   
  },
  computed: {
    tag () {
      return new Date();
    }
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