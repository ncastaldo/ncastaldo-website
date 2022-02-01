<script></script>

<template>
  <div class="subsection">
    <h2 class="subsection-title">
      <slot name="title"></slot>
    </h2>

    <div class="subsection-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.subsection {
  padding-bottom: 1.5rem;
}
.subsection-title {
  font-size: 1.5rem;
  padding-bottom: 0rem;
}

.subsection-content {
  margin: 0 auto;
}
</style>
