<script>
import { ref } from "vue";

export default {
  setup() {
    const active = ref(false);

    return { active };
  },
};
</script>

<template>
  <div class="about-image-container">
    <img
      :style="{ opacity: active ? 0 : 1 }"
      class="about-image static"
      src="/assets/img/about/nc_2.png"
      @touchstart.prevent=""
      @pointerenter="active = true"
      @pointerleave="active = false"
    />
    <img class="about-image" src="/assets/img/about/nc_loop.gif" />
  </div>
</template>

<style scoped>
.about-image-container {
  margin: 0 auto;
}
.about-image {
  text-align: center;
  min-height: 30rem;
  max-width: 30rem;
  max-width: 30rem;
  border-radius: 15rem;
  object-fit: contain;
  overflow: hidden;
}

.about-image.static {
  position: absolute;
}
</style>
