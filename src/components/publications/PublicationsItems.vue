<script>
import publications from "../../assets/config/publicationsConfig.json";
import BaseItem from "../base/BaseItem.vue";
import BaseDescription from "../base/BaseDescription.vue";
import BaseLogo from "../base/BaseLogo.vue";

export default {
  components: { BaseItem, BaseDescription, BaseLogo },
  setup() {
    return {
      publications,
    };
  },
};
</script>

<template>
  <BaseItem v-for="publication in publications" :key="publication.id">
    <template #logo>
      <BaseLogo :src="publication.logo" />
    </template>
    <template #default>
      <BaseDescription
        :title="publication.title"
        :subtitle="publication.journal"
        :caption="publication.year"
        :paragraphs="[publication.authors]"
      />
    </template>
  </BaseItem>
</template>
