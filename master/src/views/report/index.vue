<template>
  <div v-loading="loading" class="reprot-container">
    <div ref="tmReportContainer1" />
  </div>
</template>
<script>
import { loadMicroApp } from 'qiankun';
export default {
  data () {
    return {
      loading: false
    };
  },
  async mounted () {
    this.loading = true;
    this.microApp = loadMicroApp(
      {
        name: 'za-castle-radar', entry: 'https://radar-test.zhonganonline.com/', container: this.$refs.tmReportContainer1,
        props: {
          data: {
            projectId: this.$route.params.projectId,
            adAccount:'caoqingfang',
            email: 'caoqingfang@zhongan.com',
            departmentId:2312,
            name: 'caoqingfang'
          }
        }
      },
      { sandbox: true }
    );

    await this.microApp.mountPromise;
    this.loading = false;
  },
  beforeDestroy () {
    this.microApp.unmount();
  }
};
</script>
<style  scoped>
.reprot-container {
  overflow: auto;
  width: 100%;
  height: calc(100vh - 0px);
}
</style>
