<script>
export default {
  props: {
    src: String,
  },
};
</script>
<template>
  <img class="base-image" :src="src" />
</template>

<style scoped>
.base-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center center;
}
</style>
