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
  <a class="icon-link" :href="url">
    <fa :icon="icon" :size="size"></fa>
  </a>
</template>

<style>
.icon-link {
  color: #1e1e1e;
}

.icon-link:hover {
  color: #42a07e;
}
</style>
