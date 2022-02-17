<script>
import projects from "../../assets/config/projectsConfig.json";
import BaseCard from "../base/BaseCard.vue";
import BaseIconLink from "../base/BaseIconLink.vue";

export default {
  components: { BaseCard, BaseIconLink },
  setup() {
    return {
      projects,
    };
  },
};
</script>

<template>
  <BaseCard
    v-for="project in projects"
    :key="project.id"
    :image-src="project.imageSrc"
  >
    <template #content>
      <h4 class="card-content-title">{{ project.name }}</h4>
      <p class="card-content-description">{{ project.description }}</p>
    </template>
    <template #reveal>
      <h4 class="card-reveal-subtitle">Tech stack</h4>
      <div class="card-reveal-libraries">
        <div v-for="(library, i) in project.libraries" :key="i" class="library">
          {{ library.name }}
        </div>
      </div>
      <div class="card-reveal-links">
        <BaseIconLink
          v-if="project.url"
          :url="project.url"
          size="2x"
          :icon="['fas', 'link']"
        />
        <BaseIconLink
          v-if="project.githubUrl"
          :url="project.githubUrl"
          size="2x"
          :icon="['fab', 'github']"
        />
      </div>
    </template>
  </BaseCard>
</template>

<style>
.card-content-title {
  font-size: 1.4rem;
  padding-bottom: 0.2rem;
}

.card-reveal-subtitle {
  font-size: 1.2rem;
  padding-bottom: 0.4rem;
}

.card-reveal-libraries {
  display: flex;
  flex-wrap: wrap;
}

.card-reveal-subtitle {
  font-size: 1.2rem;
  padding-bottom: 0.4rem;
}

.card-reveal-links {
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 1rem;
}

.card-reveal-links > *:not(:last-child) {
  margin-right: 1rem;
}
</style>
