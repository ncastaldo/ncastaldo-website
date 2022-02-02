<script>
import publications from "../../assets/config/publicationsConfig.json";
import BaseItem from "../base/BaseItem.vue";
import BaseItemLogo from "../base/BaseItemLogo.vue";
import BaseItemDescription from "../base/BaseItemDescription.vue";

export default {
  components: { BaseItem, BaseItemLogo, BaseItemDescription },
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
      <BaseItemLogo :src="publication.logo" />
    </template>
    <template #content>
      <BaseItemDescription
        :title="publication.title"
        :subtitle="publication.journal"
        :caption="publication.authors"
        :paragraphs="[]"
      />
    </template>
  </BaseItem>
</template>
