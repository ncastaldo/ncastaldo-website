<script>
import IntroSection from "./intro/IntroSection.vue";
import AboutSection from "./about/AboutSection.vue";
import SkillsSection from "./skills/SkillsSection.vue";
import JourneySection from "./journey/JourneySection.vue";
import ProjectsSection from "./projects/ProjectsSection.vue";
import PublicationsSection from "./publications/PublicationsSection.vue";
import ContactsSection from "./contacts/ContactsSection.vue";

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
};
</script>

<template>
  <main class="main">
    <IntroSection id="intro" />
    <AboutSection id="about" />
    <SkillsSection id="skills" />
    <JourneySection id="journey" />
    <ProjectsSection id="projects" />
    <PublicationsSection id="publications" />
    <ContactsSection id="contacts" />
  </main>
</template>

<style>
.main > * {
  scroll-margin-top: 10rem;
}

.main > :nth-child(2n + 1) {
  background-color: #f7f7f7;
}
</style>
