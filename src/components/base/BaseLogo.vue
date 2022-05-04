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

  border-radius: 2rem;
  transition: outline-color 250ms ease-in-out;
}
</style>
