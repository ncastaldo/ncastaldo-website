<script>
import publications from "../../assets/config/publicationsConfig.json";
import BaseItem from "../base/BaseItem.vue";
import BaseDescription from "../base/BaseDescription.vue";
import BaseLogo from "../base/BaseLogo.vue";
import BaseHorizonalRow from "../base/BaseHorizonalRow.vue";

export default {
  components: { BaseItem, BaseDescription, BaseLogo, BaseHorizonalRow },
  setup() {
    publications.reverse();

    publications.forEach((publication) => {
      publication.caption = `${publication.journal.trim()} ${publication.page.trim()} (${
        publication.year
      })`;
      publication.icon = ["fas", "newspaper"];
    });

    return {
      publications,
    };
  },
};
</script>

<template>
  <div v-for="(publication, i) in publications" :key="publication.id">
    <BaseItem>
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
          :icon="publication.icon"
        />
      </template>
    </BaseItem>
    <BaseHorizonalRow v-if="i !== publications.length - 1" />
  </div>
</template>

<style scoped></style>
