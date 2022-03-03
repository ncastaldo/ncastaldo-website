<script>
export default {
  props: {
    current: Boolean,
  },
};
</script>

<template>
  <div class="base-item" :class="current ? 'current' : ''">
    <div class="base-item-logo">
      <slot name="logo"></slot>
    </div>
    <div class="base-item-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.base-item {
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}

.base-item-logo,
.base-item-content {
  box-sizing: border-box;
}

.base-item-logo {
  padding: 2rem;
  flex: 30%;
  text-align: center;
}

.base-item-content {
  flex: 70%;
}

@media (max-width: 720px) {
  .base-item {
    padding: 2rem 0;
  }
  .base-item-logo,
  .base-item-content {
    flex: 100%;
  }
}
</style>
