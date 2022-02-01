<script>
import publications from "../../assets/config/publicationsConfig.json";
import BaseItem from "../base/BaseItem.vue";
import BaseLogo from "../base/BaseLogo.vue";

export default {
  components: { BaseItem, BaseLogo },
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
    <template #content>
      <h3 class="publication-item-title">{{ publication.title }}</h3>
      <h4 class="publication-item-subtitle">{{ publication.journal }}</h4>
      <h5 class="publication-item-caption">{{ publication.authors }}</h5>
      <div class="publication-item-content"></div>
    </template>
  </BaseItem>
</template>

<style scoped>
.publication-item-title {
  padding-top: 0.1rem;
  padding-bottom: 0.3rem;
  font-size: 1.5rem;
}

.publication-item-subtitle {
  padding-top: 0.1rem;
  padding-bottom: 0.2rem;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 0.1rem;
}

.publication-item-content {
  padding-top: 0.5rem;
}
</style>
