<script setup>
import BaseSection from '../base/BaseSection.vue';
import AboutImage from './AboutImage.vue';

</script>

<template>
  <BaseSection>
    <template v-slot:title>About</template>
    <template v-slot>
      <AboutImage />
    </template>
  </BaseSection>
</template>

