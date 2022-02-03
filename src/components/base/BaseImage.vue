<script>
export default {
  props: {
    src: String,
  },
};
</script>
<template>
  <img class="image" :src="src" />
</template>

<style>
.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
}
</style>
