<script>
export default {};
</script>

<template>
  <section class="base-section">
    <div class="base-section-heading-container">
      <h2 class="base-section-heading">
        <slot name="title"></slot>
      </h2>
    </div>

    <div class="base-section-content">
      <slot></slot>
    </div>
  </section>
</template>

<style scoped>
.base-section {
  padding-bottom: 2rem;
}
.base-section-heading-container {
  text-align: center;

  padding: 3rem 0 3rem 0;
}
.base-section-heading {
  font-size: 5rem;
  display: inline-block;
}

.base-section-content {
  margin: 0 auto;
  max-width: 85rem;
}
</style>
