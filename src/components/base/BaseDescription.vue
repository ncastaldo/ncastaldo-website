<script>
export default {
  props: {
    title: String,
    subtitle: String,
    caption: String,
    paragraphs: Array, // todo verify
    current: Boolean,
  },
};
</script>

<template>
  <div class="base-description">
    <h3 :class="`base-description-title ${current ? 'current' : ''}`">
      {{ title }}
    </h3>
    <h4 class="base-description-subtitle">{{ subtitle }}</h4>
    <h5 class="base-description-caption">{{ caption }}</h5>
    <div class="base-description-content">
      <p v-for="(paragraph, i) in paragraphs" :key="i">
        {{ paragraph }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.base-description {
  padding: 1rem;
}

.base-description-title {
  padding-top: 0.1rem;
  padding-bottom: 0.3rem;
  font-size: 2.5rem;
}
.base-description-title.current {
  color: #42a07e;
  text-decoration: underline #42a07e;
  text-underline-offset: 0.4rem;
}

.base-description-subtitle {
  padding-top: 0.1rem;
  padding-bottom: 0.2rem;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 0.1rem;
}

.base-description-caption {
  padding-top: 0.1rem;
  padding-bottom: 0.2rem;
  font-size: 1.6rem;
}

.base-description-content {
  padding-top: 0.5rem;
  font-size: 1.6rem;
}

.base-description-content p {
  padding-bottom: 0.4rem;
}
</style>
