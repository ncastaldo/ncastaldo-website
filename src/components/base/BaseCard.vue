<script>
import { ref } from "vue";
import BaseIconLink from "./BaseIconLink.vue";
import BaseLibrary from "./BaseLibrary.vue";

export default {
  components: { BaseIconLink, BaseLibrary },
  props: {
    imageSrc: String,
    heading: String,
    description: String,
    libraries: Array,
    links: Array,
  },
  setup() {
    const reveal = ref(false);
    const toggleReveal = () => {
      reveal.value = !reveal.value;
    };
    return {
      toggleReveal,
      reveal,
    };
  },
};
</script>

<template>
  <div class="base-card">
    <div class="base-card-front" @click="toggleReveal">
      <div class="base-card-image-container">
        <img class="base-card-image" :src="imageSrc" />
      </div>
      <div class="base-card-content">
        <h3 class="base-card-content-heading">
          {{ heading }}
        </h3>
        <div class="base-card-content-description">
          {{ description }}
        </div>

        <div class="base-card-content-libraries">
          <BaseLibrary
            v-for="(library, i) in libraries"
            :key="i"
            :label="library"
          >
          </BaseLibrary>
        </div>
        <div class="base-card-content-links">
          <BaseIconLink
            v-for="(link, i) in links"
            :key="i"
            :url="link.url"
            :icon="link.icon"
            size="3x"
          >
            {{ library.name }}
          </BaseIconLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.base-card {
  position: relative;
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
}

.base-card-image-container {
  height: 14rem;
}

.base-card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
}

.base-card-content {
  min-height: 15rem;
  padding: 2rem;
}

.base-card-content-heading {
  font-size: 2rem;
  padding-bottom: 1rem;
}

.base-card-content-description {
  font-size: 1.6rem;
  padding-bottom: 2rem;
}

.base-card-content-libraries {
  display: flex;
  flex-wrap: wrap;
  column-gap: 0.6rem;
  row-gap: 0.6rem;
  padding-bottom: 2rem;
}

.base-card-content-links > *:not(:last-child) {
  margin-right: 1rem;
}
</style>
