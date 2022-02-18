<template>
  <div class="base-item">
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
  padding-bottom: 2rem;
  display: flex;
  align-items: flex-start;
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
</style>
