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
  <div class="description">
    <h3 :class="`description-title ${current ? 'current' : ''}`">
      {{ title }}
    </h3>
    <h4 class="description-subtitle">{{ subtitle }}</h4>
    <h5 class="description-caption">{{ caption }}</h5>
    <div class="description-content">
      <p v-for="(paragraph, i) in paragraphs" :key="i">
        {{ paragraph }}
      </p>
    </div>
  </div>
</template>

<style>
.description {
  padding: 1rem;
}

.description-title {
  padding-top: 0.1rem;
  padding-bottom: 0.3rem;
  font-size: 1.5rem;
}
.description-title.current {
  color: #42a07e;
  text-decoration: underline #42a07e;
  text-underline-offset: 0.4rem;
}

.description-subtitle {
  padding-top: 0.1rem;
  padding-bottom: 0.2rem;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 0.1rem;
}

.description-caption {
  padding-top: 0.1rem;
  padding-bottom: 0.2rem;
  font-size: 0.8rem;
}

.description-content {
  padding-top: 0.5rem;
}
.description-content p {
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  line-height: 1.2rem;
}
</style>
