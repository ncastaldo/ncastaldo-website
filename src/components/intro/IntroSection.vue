<script>
import { ref } from "vue";

import introConfig from "../../assets/config/introConfig.json";
import { useFontSize } from "../../composables/style";

import IntroNameChart from "./IntroNameChart.vue";
import BaseIconLink from "../base/BaseIconLink.vue";

export default {
  components: { IntroNameChart, BaseIconLink },
  setup() {
    const { roles, socials } = introConfig;

    const titleHeading = ref(null);

    const { fontSize: chartHeight } = useFontSize(titleHeading);

    return {
      roles,
      socials,
      titleHeading,
      chartHeight,
    };
  },
};
</script>

<template>
  <section class="intro-section">
    <div v-show="chartHeight > 0" attr="intro-title">
      <h1 ref="titleHeading" class="intro-title-heading">
        Hi there! I'm
        <span class="intro-title-heading-name">Nicola Castaldo</span>
        <br />
        and also
        <IntroNameChart :height="chartHeight" />
      </h1>
    </div>
    <div class="intro-roles">
      <h2 class="intro-roles-heading">
        <span v-for="(role, i) in roles" :key="i">
          <span v-if="i !== 0" class="intro-roles-heading--separator">|</span>
          <span>{{ role }}</span>
        </span>
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

<style>
.intro-section {
  display: flex; /* NEW, Spec - Firefox, Chrome, Opera */

  flex-direction: column;

  justify-content: center;
  align-items: center;
  min-height: 70rem;

  text-align: center;
}

.intro-title-heading {
  font-size: 4rem;
}

.intro-title-heading-name {
  color: #42a07e;
}

.intro-roles {
  padding: 2rem 0;
}

.intro-roles-heading {
  font-size: 3rem;
}

.intro-roles-heading--separator {
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
