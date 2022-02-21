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
  padding-top: 1rem;
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;

  outline: 0rem solid #ddd;
}

.base-item.current {
  /*box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);*/
  transition: 250ms;
  outline: 0.1rem solid #ddd;
}

.base-item-logo,
.base-item-content {
  box-sizing: border-box;
}
.base-item-logo {
  padding: 2rem;
  flex: 34%;
}

.base-item-content {
  flex: 66%;
}

@media (max-width: 600px) {
  .base-item-logo,
  .base-item-content {
    flex: 100%;
  }
}
</style>
