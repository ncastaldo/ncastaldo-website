<script>
export default {
  props: {
    src: String,
  },
};
</script>
<template>
  <img class="base-logo" :src="src" />
</template>

<style scoped>
.base-logo {
  width: 100%;
  height: 100%;
  max-width: 25rem;
  object-fit: contain;
  object-position: center center;
}
</style>
