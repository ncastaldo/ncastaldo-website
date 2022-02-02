<script setup>
import IntroSection from "./intro/IntroSection.vue";
import JourneySection from "./journey/JourneySection.vue";
import AboutSection from "./about/AboutSection.vue";
import SkillsSection from "./skills/SkillsSection.vue";
import PublicationsSection from "./publications/PublicationsSection.vue";
import ProjectsSection from "./projects/ProjectsSection.vue";
</script>

<template>
  <main class="main">
    <IntroSection />
    <AboutSection />
    <SkillsSection />
    <JourneySection />
    <ProjectsSection />
    <PublicationsSection />
  </main>
</template>

<style>
.main {
}
</style>
