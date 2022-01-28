<script>
</script>

<template>
  <section class="section">
    <h2 class="section-title">
      <slot name="title"></slot>
    </h2>

    <div class="section-content">
      <slot></slot>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 1rem;
  background-color: #eeeeee;
}

.section-title {
  font-size: 3rem;
  padding-bottom: 1rem;
}

.section-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
}
</style>