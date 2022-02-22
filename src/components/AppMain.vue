<script setup>
import IntroSection from "./intro/IntroSection.vue";
import AboutSection from "./about/AboutSection.vue";
import SkillsSection from "./skills/SkillsSection.vue";
import JourneySection from "./journey/JourneySection.vue";
import ProjectsSection from "./projects/ProjectsSection.vue";
import PublicationsSection from "./publications/PublicationsSection.vue";
import ContactsSection from "./contacts/ContactsSection.vue";
</script>

<template>
  <main class="main">
    <IntroSection />
    <AboutSection />
    <SkillsSection />
    <JourneySection />
    <ProjectsSection />
    <PublicationsSection />
    <ContactsSection />
  </main>
</template>

<style>
.main > :nth-child(0) {
  background-color: #eeeeee;
}
</style>
