<script>
import { ref } from "vue";
import BaseIconLink from "./BaseIconLink.vue";
import BaseLibrary from "./BaseLibrary.vue";

import isMobile from "is-mobile";

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
    const active = ref(false);

    const mobile = isMobile();

    const onClick = () => {
      if (mobile) {
        active.value = !active.value;
      }
    };

    return { active, onClick };
  },
};
</script>

<template>
  <div
    class="base-card"
    :class="active ? 'active' : ''"
    @click="onClick"
    @mouseover="active = true"
    @mouseout="active = false"
  >
    <div class="base-card-back">
      <img class="base-card-image" :src="imageSrc" />
    </div>
    <div class="base-card-front">
      <div class="base-card-heading-container">
        <h3 class="base-card-heading">
          {{ heading }}
        </h3>
      </div>
      <hr />
      <div class="base-card-description-container">
        <div class="base-card-description">
          {{ description }}
        </div>
      </div>

      <hr />
      <div class="base-card-libraries-container">
        <BaseLibrary
          v-for="(library, i) in libraries"
          :key="i"
          :label="library"
          :size="1.4"
        >
        </BaseLibrary>
      </div>
    </div>
    <div class="base-card-header">
      <BaseIconLink
        v-for="(link, i) in links"
        :key="i"
        :url="link.url"
        :icon="link.icon"
        size="4x"
      >
        {{ library.name }}
      </BaseIconLink>
    </div>
  </div>
</template>

<style scoped>
.base-card {
  position: relative;
  box-shadow: #ddd 0 0 0 0.1rem;
  border-radius: 2rem;
  transform: translateZ(0);
  overflow: hidden;
  height: 40rem;
  width: 30rem;
}

.base-card-back,
.base-card-front,
.base-card-header {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
}

.base-card-back {
  left: 0;
  top: 0;
  height: 50%;
  opacity: 1;
  transition: opacity 200ms;
}

.base-card.active .base-card-back {
  opacity: 0.1;
}

.base-card-front {
  left: 0;
  top: calc(100% - 22rem);
  padding: 0 2rem;
  background-color: #fff;
  transition: top 200ms;
}

.base-card-header {
  height: calc(100% - 33rem);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;

  transition: opacity 200ms;
}
.base-card.active .base-card-header {
  opacity: 1;
}
.base-card-header > * {
  margin: 0 0.5rem;
}

.base-card.active .base-card-front {
  top: calc(100% - 33rem);
}

.base-card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
}

.base-card-heading-container {
  height: 9rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.base-card-heading {
  text-align: center;
  font-size: 2.3rem;
}

.base-card-description-container {
  height: 13rem;
  display: flex;
  align-items: center;
}

.base-card-description {
  font-size: 1.6rem;
}

.base-card-libraries-container {
  height: 8rem;
  padding-top: 1.4rem;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 0.6rem;
  row-gap: 0.6rem;
  padding-bottom: 2rem;
}
</style>
