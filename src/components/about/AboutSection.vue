<script setup>
import BaseSection from "../base/BaseSection.vue";
import AboutImage from "./AboutImage.vue";
import AboutDescription from "./AboutDescription.vue";
</script>

<template>
  <BaseSection>
    <template #title>About</template>
    <template #default>
      <AboutImage class="about-image" />
      <AboutDescription />
    </template>
  </BaseSection>
</template>

<style scoped>
.about-image {
  padding: 3rem 3rem;
  display: flex;
  align-items: center;
  justify-content: ce;
}
</style>
