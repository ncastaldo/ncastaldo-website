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

<style></style>
