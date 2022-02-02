<script>
import skillsLibraryConfig from "../../assets/config/skillsLibraryConfig.json";
import BaseSubsection from "../base/BaseSubsection.vue";
import BaseCodeItem from "../base/BaseCodeItem.vue";

export default {
  components: { BaseSubsection, BaseCodeItem },
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
        <BaseCodeItem
          v-for="library in partition.libraries"
          :key="library.id"
          :content="library.name"
        />
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
</style>
