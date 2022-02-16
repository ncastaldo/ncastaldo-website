<script>
import publications from "../../assets/config/publicationsConfig.json";
import BaseItem from "../base/BaseItem.vue";
import BaseImage from "../base/BaseImage.vue";
import BaseItemDescription from "../base/BaseItemDescription.vue";

export default {
  components: { BaseItem, BaseImage, BaseItemDescription },
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
      <BaseImage :src="publication.logo" />
    </template>
    <template #content>
      <BaseItemDescription
        :title="publication.title"
        :subtitle="publication.journal"
        :caption="publication.year"
        :paragraphs="[publication.authors]"
      />
    </template>
  </BaseItem>
</template>
