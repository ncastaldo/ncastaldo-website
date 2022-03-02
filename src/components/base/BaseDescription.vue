<script>
export default {
  props: {
    title: String,
    subtitle: String,
    caption: String,
    htmlContent: String, // todo verify
    current: Boolean,
  },
};
</script>

<template>
  <div class="base-description" :class="current ? 'current' : ''">
    <h3 class="base-description-title">
      {{ title }}
    </h3>
    <h4 class="base-description-subtitle">{{ subtitle }}</h4>
    <h5 class="base-description-caption">{{ caption }}</h5>
    <div class="base-description-html" v-html="htmlContent"></div>
  </div>
</template>

<style scoped>
.base-description {
  padding: 1rem;
}

.base-description-title {
  padding-bottom: 1rem;
  font-size: 2.5rem;
}

.base-description-subtitle {
  padding-bottom: 0.5rem;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 200;
  letter-spacing: 0.2rem;
}
.base-description-caption {
  padding-bottom: 1rem;
  font-weight: 700;
  font-size: 1.6rem;
  transition: color 100ms ease-in-out;
}

.base-description.current .base-description-caption {
  color: #42a07e;
}

.base-description-html {
  padding-top: 0.5rem;
  font-size: 1.6rem;
}

.base-description-html >>> p {
  padding-bottom: 0.4rem;
}

.base-description-html >>> ul {
  padding-bottom: 0.4rem;
  padding-left: 2rem;
  list-style: circle;
}
</style>
