<script setup>
import BaseSection from "../base/BaseSection.vue";
import AboutImage from "./AboutImage.vue";
import AboutDescription from "./AboutDescription.vue";
</script>

<template>
  <BaseSection>
    <template #title>About</template>
    <template #default>
      <AboutImage />
      <AboutDescription />
    </template>
  </BaseSection>
</template>
