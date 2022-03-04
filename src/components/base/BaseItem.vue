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
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}

.base-item-logo,
.base-item-content {
  box-sizing: border-box;
}

.base-item-logo {
  padding-right: 2rem;
  flex: 30%;
  text-align: center;
}

.base-item-content {
  padding-left: 2rem;
  flex: 70%;
}

@media (max-width: 720px) {
  .base-item-logo,
  .base-item-content {
    flex: 100%;
  }

  .base-item-logo {
    padding-right: 0rem;
    padding-bottom: 2rem;
  }

  .base-item-content {
    padding-left: 0rem;
  }
}
</style>
