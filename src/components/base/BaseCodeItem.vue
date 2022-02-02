<script>
export default {
  props: {
    content: String,
  },
};
</script>

<template>
  <div class="library-item">
    <span class="library-item-content">{{ content }}</span>
    <span class="library-item-delimiter"></span>
  </div>
</template>

<style>
.library-item {
  font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono,
    DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
  margin: 0.5rem 0rem;
}

.library-item-content {
  padding: 0.2rem 0.7rem;
  border: solid 0.1rem #ccc;
  border-radius: 0.9rem;
}
.library-item-delimiter {
  margin-left: 0.4rem;
}
</style>
