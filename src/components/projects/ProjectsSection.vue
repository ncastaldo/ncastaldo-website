<script setup>
import BaseSection from "../base/BaseSection.vue";
import ProjectsCards from "./ProjectsCards.vue";
</script>

<template>
  <BaseSection>
    <template #title>Projects</template>
    <template #default>
      <div class="projects-cards-container">
        <ProjectsCards />
      </div>
    </template>
  </BaseSection>
</template>

<style>
.projects-cards-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}
</style>
