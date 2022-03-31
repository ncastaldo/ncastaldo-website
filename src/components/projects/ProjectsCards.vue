<script>
import projects from "../../assets/config/projectsConfig.json";
import BaseCard from "../base/BaseCard.vue";

export default {
  components: { BaseCard },
  setup() {
    projects.forEach((project) => {
      project.links = [
        {
          url: project.url,
          icon: ["fas", "link"],
        },
        {
          url: project.githubUrl,
          icon: ["fab", "github"],
        },
      ].filter((project) => project.url !== undefined);
    });

    return {
      projects,
    };
  },
};
</script>

<template>
  <BaseCard
    v-for="project in projects"
    v-bind="$attrs"
    :key="project.id"
    :heading="project.name"
    :description="project.description"
    :libraries="project.libraries"
    :links="project.links"
    :image-src="project.imageSrc"
    class="project-card"
  >
  </BaseCard>
</template>

<style scoped>
.project-card {
  margin: 0 auto;
  max-width: 30rem;
}
</style>
