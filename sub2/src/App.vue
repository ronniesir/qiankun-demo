<template>
  <div id="app">
    <router-link to="/editor">Editor</router-link> |
    <router-link to="/other">Other</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
</style>
