<script>
import publications from "../../assets/config/publicationsConfig.json";
import BaseItem from "../base/BaseItem.vue";
import BaseImage from "../base/BaseImage.vue";
import BaseDescription from "../base/BaseDescription.vue";

export default {
  components: { BaseItem, BaseImage, BaseDescription },
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
