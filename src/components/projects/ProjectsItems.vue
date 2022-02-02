<script>
import projects from "../../assets/config/projectsConfig.json";
import BaseCardItem from "../base/BaseCardItem.vue";

export default {
  components: { BaseCardItem },
  setup() {
    return {
      projects,
    };
  },
};
</script>

<template>
  <BaseCardItem
    v-for="project in projects"
    :key="project.id"
    :image-src="project.imageSrc"
    :content-title="project.name"
    :content-description="project.description"
  >
  </BaseCardItem>
</template>
