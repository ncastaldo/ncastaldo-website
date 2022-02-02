<script>
import { ref } from "vue";

export default {
  props: {
    imageSrc: String,
    contentTitle: String,
    contentDescription: String,
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
  <div class="card" @click="toggleReveal">
    <div class="card-image">
      <img :src="imageSrc" />
    </div>
    <div class="card-content">
      <h4 class="card-content-title">{{ contentTitle }}</h4>
      <p class="card-content-description">{{ contentDescription }}</p>
    </div>
    <div :class="`card-reveal ${reveal ? 'active' : ''}`">EEEEE</div>
  </div>
</template>

<style scoped>
.card {
  position: relative;
  outline: 0.1rem solid #ddd;
  cursor: pointer;
}

.card:hover {
  outline-color: #42a07e;
}

.card-image {
  height: 10rem;
}

.card-image > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
}

.card-content {
  padding: 1rem;
}

.card-content-title {
  font-size: 1.4rem;
  padding-bottom: 0.2rem;
}

.card-reveal {
  position: absolute;
  padding: 1rem;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.9);
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  opacity: 0;
}

.card-reveal.active {
  opacity: 1;
}
</style>
