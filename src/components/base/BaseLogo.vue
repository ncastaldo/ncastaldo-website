<script>
export default {
  props: {
    src: String,
  },
};
</script>
<template>
  <img class="logo" :src="src" />
</template>

<style>
.logo {
  max-width: 100%;
  object-fit: contain;
}
</style>
