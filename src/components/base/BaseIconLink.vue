<script>
export default {
  props: {
    url: String,
    icon: Array,
    size: String,
    color: {
      type: String,
      default: "#1e1e1e",
    },
  },
};
</script>

<template>
  <a class="icon-link" :style="{ color }" :href="url" target="_blank">
    <fa :icon="icon" :size="size"></fa>
  </a>
</template>

<style scoped>
.icon-link:hover {
  opacity: 0.7;
}
</style>
