<script setup>
import BaseSection from "../base/BaseSection.vue";
import PublicationsItems from "./PublicationsItems.vue";
</script>

<template>
  <BaseSection>
    <template #title>Publications</template>
    <template #default>
      <div class="publications-section-content">
        <PublicationsItems />
      </div>
    </template>
  </BaseSection>
</template>

<style scoped>
.publications-section-content {
  padding: 3rem 3rem;
}
</style>
