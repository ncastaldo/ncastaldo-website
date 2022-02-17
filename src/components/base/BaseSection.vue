<script></script>

<template>
  <section class="base-section">
    <h2 class="base-section-heading">
      <slot name="title"></slot>
    </h2>

    <div class="base-section-content">
      <slot></slot>
    </div>
  </section>
</template>

<style scoped>
.base-section {
  padding: 1rem 4rem;
}

.base-section-heading {
  font-size: 5rem;
  margin: 3rem auto;
  text-align: center;
}

.base-section-content {
  margin: 0 auto;
  max-width: 80rem;
}
</style>
