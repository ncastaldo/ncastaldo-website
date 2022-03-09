<script>
export default {
  props: {
    src: String,
    current: Boolean,
  },
};
</script>
<template>
  <img class="base-logo" :class="current ? 'current' : ''" :src="src" />
</template>

<style scoped>
.base-logo {
  width: 100%;
  height: 100%;
  max-width: 25rem;
  object-fit: contain;
  object-position: center center;
  box-shadow: #ddd 0 0 0 0.1rem;
  border-radius: 2rem;
  transition: outline-color 250ms ease-in-out;
}

.base-logo.current {
  /*box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);*/
  /*boutline-color: #42a07e;*/
}
</style>
