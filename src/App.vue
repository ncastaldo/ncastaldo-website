<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
};
</script>

<template>
  <div>
    <AppHeader />
    <AppMain />
    <AppFooter />
  </div>
</template>

<style>
html {
  box-sizing: border-box;
  font-size: 62.5%; /* 1rem value */
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #1e1e1e;

  /* https://developer.mozilla.org/en-US/docs/Web/CSS/font-smooth */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
}

.library {
  padding: 0.2rem 0.8rem;
  font-size: 1.6rem;
  font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono,
    DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
  border: solid 0.1rem #ccc;
  border-radius: 1.6rem;
  background: #f4f4f4;
}
</style>
