<script>
import skillsLibraryConfig from "../../assets/config/skillsLibraryConfig.json";
import BaseSubsection from "../base/BaseSubsection.vue";

export default {
  components: { BaseSubsection },
  setup() {
    return {
      skillsLibraryConfig,
    };
  },
};
</script>

<template>
  <BaseSubsection v-for="partition in skillsLibraryConfig" :key="partition.id">
    <template #title>{{ partition.name }}</template>
    <template #default>
      <div class="skills-library">
        <div
          v-for="library in partition.libraries"
          :key="library.id"
          class="skills-library-item"
        >
          <span class="skills-library-item--content">{{ library.name }}</span>
          <span class="skills-library-item--delimiter"></span>
        </div>
      </div>
    </template>
  </BaseSubsection>
</template>

<style>
.skills-library {
  margin: 0.5rem auto;
  display: flex;
  flex-wrap: wrap;
}

.skills-library-item {
  font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono,
    DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
  margin: 0.5rem 0rem;
}

.skills-library-item--content {
  padding: 0.2rem 0.7rem;
  border: solid 0.1rem #ccc;
  border-radius: 0.9rem;
}

.skills-library-item--delimiter {
  margin-left: 0.4rem;
}
</style>
