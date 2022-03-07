<script>
import BaseIconLink from "./BaseIconLink.vue";
export default {
  components: { BaseIconLink },
  props: {
    title: String,
    subtitle: String,
    caption: String,
    htmlContent: String,
    url: String,
    icon: Array,
    current: Boolean,
  },
};
</script>

<template>
  <div class="base-description" :class="current ? 'current' : ''">
    <h3 class="base-description-title">
      {{ title }}
      <BaseIconLink
        v-if="url && icon"
        :url="url"
        size="1x"
        color="#1f1f1f"
        class="base-description-icon"
        :icon="icon"
      />
    </h3>

    <h4 class="base-description-subtitle">{{ subtitle }}</h4>
    <h5 class="base-description-caption">{{ caption }}</h5>
    <div class="base-description-html" v-html="htmlContent"></div>
  </div>
</template>

<style scoped>
.base-description {
}

.base-description-title {
  padding-bottom: 0.5rem;
  font-size: 2.5rem;
  font-weight: 500;
  text-transform: uppercase;
}

.base-description-icon {
  margin-left: 0.2rem;
}
.base-description-title.link:hover {
  opacity: 0.7;
}

.base-description-title a {
  text-decoration: none;
  color: inherit;
}

.base-description-subtitle {
  padding-bottom: 0.5rem;
  font-size: 2rem;
  font-weight: 500;
}
.base-description-caption {
  padding-bottom: 1rem;
  font-size: 1.6rem;
  font-style: italic;
  letter-spacing: 0.04rem;
}

.base-description.current .base-description-caption {
  color: #42a07e;
  font-weight: 600;
  letter-spacing: 0rem;
  text-decoration: underline;
}

.base-description-html {
  padding-top: 0.5rem;
  font-size: 1.6rem;
}

.base-description-html:deep(p) {
  padding-bottom: 0.4rem;
}

.base-description-html:deep(ul) {
  padding-bottom: 0.4rem;
  padding-left: 2rem;
  list-style: circle;
}
</style>
