<script>
import BaseSection from "../base/BaseSection.vue";
import ProjectsCards from "./ProjectsCards.vue";

export default {
  components: { BaseSection, ProjectsCards },
};
</script>

<template>
  <BaseSection>
    <template #title>Projects</template>
    <template #default>
      <div class="projects-cards-grid">
        <ProjectsCards />
      </div>
    </template>
  </BaseSection>
</template>

<style scoped>
.projects-cards-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  row-gap: 4rem;
  padding: 3rem 3rem;
}

@media (max-width: 720px) {
  .projects-cards-grid {
    grid-template-columns: 1fr;
  }
}
</style>
