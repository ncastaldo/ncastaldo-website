<script></script>

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
  padding: 1rem 4rem;
  background-color: #eeeeee;
}

.section-title {
  font-size: 3rem;
  padding-bottom: 1rem;
  text-align: center;
}

.section-content {
  margin: 0 auto;
  max-width: 40rem;
}
</style>
