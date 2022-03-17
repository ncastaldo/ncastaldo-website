<script>
import IntroSection from "./intro/IntroSection.vue";
import AboutSection from "./about/AboutSection.vue";
import SkillsSection from "./skills/SkillsSection.vue";
import JourneySection from "./journey/JourneySection.vue";
import ProjectsSection from "./projects/ProjectsSection.vue";
import PublicationsSection from "./publications/PublicationsSection.vue";
import ContactsSection from "./contacts/ContactsSection.vue";

import { useWindowSize } from "@vueuse/core";
import { useClosestRef } from "../composables/view";
import view from "../store/view";
import { computed, ref, watch, watchEffect, watchPostEffect } from "vue";

export default {
  components: {
    IntroSection,
    AboutSection,
    SkillsSection,
    JourneySection,
    ProjectsSection,
    PublicationsSection,
    ContactsSection,
  },
  setup() {
    const sectionRefs = [];
    const setSectionRef = (ref) => {
      sectionRefs.push(ref);
    };

    const targetRouteId = computed(view.getTargetRouteId);
    const routes = view.getRoutes();

    const marginTop = ref(0);

    const closestRef = useClosestRef(sectionRefs);

    watchEffect(() => {
      if (closestRef.value) {
        view.setRouteId(closestRef.value.id);
      }
    });

    watch(targetRouteId, (id) => {
      const rect = sectionRefs
        .find((ref) => ref.id === id.toString())
        .getBoundingClientRect();

      window.scrollTo({
        top: rect.top + window.scrollY - marginTop.value,
        left: 0,
        behavior: "smooth",
      });
    });

    const { height } = useWindowSize();

    watchEffect(() => {
      marginTop.value = height.value > 700 ? 100 : 70;
    });

    return { routes, setSectionRef };
  },
};
</script>

<template>
  <main class="main">
    <div
      v-for="route in routes"
      :id="route.id"
      :key="route.id"
      :ref="setSectionRef"
    >
      <component :is="`${route.id}-section`"></component>
    </div>
  </main>
</template>

<style>
.main > * {
  scroll-margin-top: 10rem;
}

.main > :nth-child(2n + 1) {
  background-color: #f7f7f7;
}

@media (max-height: 700px) {
  .main > * {
    scroll-margin-top: 7rem;
  }
}
</style>
