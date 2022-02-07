<script>
import { ref } from "vue";
import BaseImage from "./BaseImage.vue";

export default {
  components: { BaseImage },
  props: {
    imageSrc: String,
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
  <div class="card">
    <div class="card-front" @click="toggleReveal">
      <div class="card-image">
        <BaseImage :src="imageSrc" />
      </div>
      <div class="card-content">
        <slot name="content"></slot>
      </div>
    </div>
    <div :class="`card-reveal ${reveal ? 'active' : ''}`">
      <div class="card-reveal-close" @click="toggleReveal">
        <fa icon="times" size="2x"> </fa>
      </div>
      <slot name="reveal"></slot>
    </div>
  </div>
</template>

<style scoped>
.card {
  position: relative;
  outline: 0.1rem solid #ddd;
}

.card:hover {
  outline-color: #42a07e;
}

.card-front {
  cursor: pointer;
}

.card-image {
  height: 10rem;
}

.card-content {
  padding: 1rem;
}

.card-reveal {
  position: absolute;
  top: 0;
  left: 0;
  padding: 1rem;
  box-sizing: border-box;
  width: 100%;
  min-height: 100%;
  background-color: rgba(255, 255, 255, 0.95);
  opacity: 0;
  visibility: hidden;
}

.card-reveal.active {
  opacity: 1;
  visibility: visible;
}

.card-reveal-close {
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem;
  cursor: pointer;
}

.card-reveal-close:hover {
  color: #42a07e;
}
</style>
