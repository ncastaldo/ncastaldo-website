<script></script>

<template>
  <div class="base-subsection">
    <h3 class="base-subsection-heading">
      <slot name="title"></slot>
    </h3>

    <div class="base-subsection-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.base-subsection {
  padding-bottom: 2rem;
}
.base-subsection-heading {
  font-size: 2.5rem;
  padding-bottom: 1rem;
}

.base-subsection-content {
  margin: 0 auto;
}
</style>
