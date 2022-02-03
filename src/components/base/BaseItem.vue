<template>
  <div class="item">
    <div class="item-logo">
      <slot name="logo"></slot>
    </div>
    <div class="item-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  padding: 1rem;
  display: flex;
}

.item-logo {
  padding: 0.5rem;
  flex: 30%;
}

.item-content {
  flex: 70%;
}
</style>
