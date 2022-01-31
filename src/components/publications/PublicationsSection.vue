<script setup>
import BaseSection from "../base/BaseSection.vue";
import PublicationsItems from "./PublicationsItems.vue";
</script>

<template>
  <BaseSection>
    <template #title>Publications</template>
    <template #default>
      <PublicationsItems />
    </template>
  </BaseSection>
</template>
