<script>
import introConfig from "../../assets/config/introConfig.json";

import IntroNameChart from "./IntroNameChart.vue";
import BaseIconLink from "../base/BaseIconLink.vue";

export default {
  components: { IntroNameChart, BaseIconLink },
  setup() {
    const { roles, socials } = introConfig;

    return {
      roles,
      socials,
    };
  },
};
</script>

<template>
  <section class="intro-section">
    <div attr="intro-title">
      <h1 class="intro-title-heading">
        <span>Hi there! I am</span>
        <br />
        <IntroNameChart :height="70" />
      </h1>
    </div>
    <div class="intro-roles">
      <h2 class="intro-roles-heading">
        <span class="intro-roles-heading-separator">[</span>
        <span>Software</span>
        <span class="intro-roles-heading-separator">|</span>
        <span>Data</span>
        <span class="intro-roles-heading-separator">|</span>
        <span>Full Stack</span>
        <span class="intro-roles-heading-separator">]</span>
        <span>Engineer</span>
      </h2>
    </div>
    <div class="intro-socials">
      <BaseIconLink
        v-for="(social, i) in socials"
        :key="i"
        class="intro-socials-element"
        :url="social.link"
        :icon="social.icon"
        size="4x"
      />
    </div>
  </section>
</template>

<style scoped>
.intro-section {
  display: flex; /* NEW, Spec - Firefox, Chrome, Opera */

  flex-direction: column;

  justify-content: center;
  align-items: center;
  min-height: 100vh;

  text-align: center;
}

.intro-title-heading {
  font-size: 4rem;
  max-width: 50rem;
}

.intro-title-heading-name {
  color: #42a07e;
  font-weight: 700;
}

.intro-roles {
  padding: 2rem 0;
}

.intro-roles-heading {
  font-size: 3rem;
}

.intro-roles-heading-separator {
  padding: 0 1.5rem;
  color: #42a07e;
}

.intro-socials {
  padding: 1rem 0;
}

.intro-socials-element {
  padding: 0 1rem;
}
</style>
