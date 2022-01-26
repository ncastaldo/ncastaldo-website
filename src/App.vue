<script setup>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style>
/* body */
body {
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* select all the elements */
* {
  margin: 0;
  padding: 0;
}
</style>
