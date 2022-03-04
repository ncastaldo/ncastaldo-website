<script>
import introConfig from "../assets/config/introConfig.json";
import BaseIconLink from "./base/BaseIconLink.vue";

export default {
  components: { BaseIconLink },
  setup() {
    const { socials } = introConfig;

    return { socials };
  },
};
</script>

<template>
  <footer class="footer">
    <h3 class="footer-heading">Designed by @ncastaldo</h3>
    <div class="footer-socials">
      <BaseIconLink
        v-for="(social, i) in socials"
        :key="i"
        class="footer-socials-element"
        :url="social.link"
        :icon="social.icon"
        color="#fff"
        size="3x"
      />
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 3rem 0;
  margin: 0 auto;
  background-color: #1e1e1e;
  color: #ffffff;
  text-align: center;
}

.footer-heading {
  font-size: 2rem;
  padding-bottom: 2rem;
}
.footer-socials-element {
  padding: 0 0.5rem;
}
</style>
