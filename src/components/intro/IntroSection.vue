<script>
import IntroNameChart from "./IntroNameChart.vue";

export default {
  components: { IntroNameChart },
  setup() {
    const positions = ["Software", "Data", "Full Stack", "Engineer"];
    const socials = [
      {
        name: "LinkedIn",
        icon: ["fab", "linkedin"],
        link: "https://www.linkedin.com/in/ncastaldo",
      },
      {
        name: "GitHub",
        icon: ["fab", "github"],
        link: "https://github.com/ncastaldo",
      },
      {
        name: "Observable",
        icon: ["fab", "observable"],
        link: "https://observablehq.com/@ncastaldo",
      },
    ];

    return {
      positions,
      socials,
    };
  },
};
</script>

<template>
  <section>
    <div class="intro">
      <div attr="intro-title">
        <h1 class="intro-title-heading">
          Hi there! I'm
          <span class="intro-title-heading-name">Nicola Castaldo</span>
        </h1>
      </div>
      <div class="intro-subtitle">
        <h2 class="intro-subtitle-heading">and also</h2>
        <IntroNameChart />
      </div>
      <div class="intro-positions">
        <h2 class="intro-position-heading">
          <span v-for="(position, i) in positions" :key="i">
            <span v-if="i !== 0" class="intro-position-heading--separator">|</span>
            <span>{{ position }}</span>
          </span>
        </h2>
      </div>
      <div class="intro-socials">
        <span v-for="(social, i) in socials" :key="i" class="intro-socials-element">
          <a class="intro-socials-element-link" :href="social.link">
            <fa :icon="social.icon" size="2x"></fa>
          </a>
        </span>
      </div>
    </div>
  </section>
</template>

<style>
.intro {
  text-align: center;
  padding: 14rem 0;
}

.intro-title-heading {
  font-size: 2.5rem;
}

.intro-title-heading-name {
  color: #42a07e;
}

.intro-subtitle {
  display: flex;
  justify-content: center;
  align-items: bottom;
}

.intro-subtitle-heading {
  font-size: 2.5rem;
}

.intro-positions {
  padding: 1.8rem 0;
}

.intro-positions {
  font-size: 1rem;
}

.intro-position-heading--separator {
  padding: 0 0.8rem;
  color: #42a07e;
}

.intro-socials-element {
  padding: 0 0.7rem;
}

.intro-socials-element-link {
  color: #1e1e1e;
}

.intro-socials-element-link:hover {
  color: #42a07e;
}
</style>
