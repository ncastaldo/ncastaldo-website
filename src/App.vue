<script>
import { provide } from "vue";

import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

import { cssThemes } from "./plugins/themes";

import journey from "./store/journey";

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  setup() {
    provide("journey", journey);

    return {
      cssThemes,
    };
  },
};
</script>

<template>
  <div :style="cssTheme">
    <AppHeader />
    <AppMain />
    <AppFooter />
  </div>
</template>

<style>
/* body */
body {
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #1e1e1e;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* select all the elements */
* {
  margin: 0;
  padding: 0;
}
</style>
