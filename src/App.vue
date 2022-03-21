<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
import AppMagic from "./components/AppMagic.vue";

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    AppMagic,
  },
};
</script>

<template>
  <div>
    <AppHeader />
    <AppMain />
    <AppMagic />
    <AppFooter />
  </div>
</template>

<style>
:root {
  --primary-background-color: "#ffffff";
  --secondary-background-color: "#eeeeee";
}

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

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
}

ul {
  list-style: none;
}

hr {
  border-width: 0.05rem;
}
</style>
