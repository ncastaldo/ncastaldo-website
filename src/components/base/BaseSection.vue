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
  padding: 1rem 4rem 2rem;
}

.base-section-heading {
  font-size: 5rem;
  margin: 3rem auto;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.base-section-heading::before,
.base-section-heading::after {
  content: "";
  border-top: 0.1rem solid #ddd;
  flex: 1 0;
}

.base-section-heading::before {
  margin: 0 2rem 0 1rem;
}

.base-section-heading::after {
  margin: 0 1rem 0 2rem;
}

.base-section-content {
  margin: 0 auto;
  max-width: 80rem;
}

@media (max-width: 720px) {
  .base-section {
    padding: 1rem 1rem 2rem;
  }
}
</style>
