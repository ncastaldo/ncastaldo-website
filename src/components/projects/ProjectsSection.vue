<script setup>
import BaseSection from "../base/BaseSection.vue";
import ProjectsCards from "./ProjectsCards.vue";
</script>

<template>
  <BaseSection>
    <template #title>Projects</template>
    <template #default>
      <div class="projects-cards-grid">
        <ProjectsCards class="projects-cards-item" />
      </div>
    </template>
  </BaseSection>
</template>

<style>
.projects-cards-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  row-gap: 4rem;
  padding: 3rem 3rem;
}

.projects-cards-item {
  margin: 0 auto;
  max-width: 30rem;
}

@media (max-width: 720px) {
  .projects-cards-grid {
    grid-template-columns: 1fr;
  }
}
</style>
