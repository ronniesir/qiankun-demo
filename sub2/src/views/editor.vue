<template>
  <div class="components-container">
    <editor v-model="content" />
    <router-link to="/editor/other">子页面</router-link>
    <router-view />
  </div>
</template>

<script>
import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/vue-editor";
export default {
  name: "WangEditor",
  components: {
    Editor
  },
  mounted(){
    console.log("微应用内二",window.sub1Title)
    if(window.__POWERED_BY_QIANKUN__){
      window.sub1Title="我在微应用二改了标题"
    }
  },
  data() {
    return {
      content: ""
    };
  }
};
</script>

<style scoped>
.components-container {
  text-align: left;
  width: 50%;
  padding: 20px;
}
</style>
