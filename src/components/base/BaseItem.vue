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
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;

  outline: 0.1rem solid #fff;

  transition: outline-color 250ms ease-in-out;
}

.base-item.current {
  /*box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);*/
  outline-color: #ddd;
}

.base-item-logo,
.base-item-content {
  box-sizing: border-box;
}
.base-item-logo {
  padding: 2rem;
  flex: 34%;
  text-align: center;
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
