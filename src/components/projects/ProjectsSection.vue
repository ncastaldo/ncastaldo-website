<script setup>
import BaseSection from "../base/BaseSection.vue";
import ProjectsItems from "./ProjectsItems.vue";
</script>

<template>
  <BaseSection>
    <template #title>Projects</template>
    <template #default>
      <div class="projects-items-container">
        <ProjectsItems />
      </div>
    </template>
  </BaseSection>
</template>

<style>
.projects-items-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}
</style>
