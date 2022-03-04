<script>
export default {
  props: {
    title: String,
    subtitle: String,
    caption: String,
    htmlContent: String, // todo verify
    url: String,
    current: Boolean,
  },
};
</script>

<template>
  <div class="base-description" :class="current ? 'current' : ''">
    <h3 class="base-description-title" :class="url ? 'link' : ''">
      <a :href="url" target="_blank">{{ title }}</a>
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
  padding-bottom: 0.5rem;
  font-size: 2.5rem;
  font-weight: 500;
  text-transform: uppercase;
}

.base-description-title.link {
  text-decoration: underline;
  text-decoration-thickness: 0.2rem;
  text-underline-offset: 0.2rem;
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
