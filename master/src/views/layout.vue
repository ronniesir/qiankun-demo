<template>
  <div class="my-container">
    <el-menu :default-active="activePath" class="el-menu-vertical-demo" :router="true" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="/project/2312/report/projectcount">
        <i class="el-icon-menu"></i>
        <span slot="title">手动加载车险报表</span>
      </el-menu-item>
      <el-menu-item index="/subApp1/form">
        <i class="el-icon-setting"></i>
        <span slot="title">路由加载子应用1</span>
      </el-menu-item>
      <el-menu-item index="/sub2/#/editor">
        <i class="el-icon-collection"></i>
        <span slot="title">Hash加载子应用2Editor</span>
      </el-menu-item>
       <el-menu-item index="/sub2/#/other">
        <i class="el-icon-collection"></i>
        <span slot="title">Hash加载子应用2Ohter</span>
      </el-menu-item>
    </el-menu>
    <router-view style="width:100%"/>
  </div>

</template>
<script>
export default {
  name: 'layout',
  data () {
    return {
      activePath: null
    }
  },
  watch: {
    '$route': {
      handler (to) {
        this.activePath = to.hash ? to.fullPath : to.path
      },
      immediate: true
    }
  },
  mounted () {

  }
}
</script>

<style scoped>
.my-container {
  display: flex;
  height: calc(100vh - 20px);
}
.my-menu {
  width: 200px;
  height: 100%;
}
</style>