<script setup>
import IntroSection from "./intro/IntroSection.vue";
import AboutSection from "./about/AboutSection.vue";
import SkillsSection from "./skills/SkillsSection.vue";
import JourneySection from "./journey/JourneySection.vue";
import ProjectsSection from "./projects/ProjectsSection.vue";
import PublicationsSection from "./publications/PublicationsSection.vue";
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
.main > :nth-child(2n) {
  background-color: #eeeeee;
}
</style>
