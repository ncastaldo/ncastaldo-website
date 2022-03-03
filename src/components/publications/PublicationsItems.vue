<script>
import publications from "../../assets/config/publicationsConfig.json";
import BaseItem from "../base/BaseItem.vue";
import BaseDescription from "../base/BaseDescription.vue";
import BaseLogo from "../base/BaseLogo.vue";

export default {
  components: { BaseItem, BaseDescription, BaseLogo },
  setup() {
    publications.reverse();

    publications.forEach((publication) => {
      publication.caption = `${publication.journal.trim()} ${publication.page.trim()} (${
        publication.year
      })`;
    });

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
        :title="publication.journal"
        :subtitle="publication.title"
        :caption="publication.caption"
        :html-content="publication.authors"
        :url="publication.url"
      />
    </template>
  </BaseItem>
</template>
