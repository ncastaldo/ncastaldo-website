<script>
export default {
  props: {
    url: String,
    icon: Array,
    size: String,
  },
};
</script>

<template>
  <a class="icon-link" :href="url" target="_blank">
    <fa :icon="icon" :size="size"></fa>
  </a>
</template>

<style>
.icon-link {
  color: #1e1e1e;
}

.icon-link:hover {
  opacity: 0.7;
}
</style>
