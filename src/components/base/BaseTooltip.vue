<script>
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

export default {
  setup() {
    const target = ref(null);
    const visible = ref(false);

    onClickOutside(target, () => {
      if (visible.value === true) {
        visible.value = false;
      }
    });

    const toggleVisibility = () => {
      console.log("a");
      visible.value = !visible.value;
    };

    return { target, visible, toggleVisibility };
  },
};
</script>

<template>
  <span class="tooltip-container">
    <span @click="toggleVisibility">
      <slot name="source"></slot>
    </span>
    <div ref="target" class="tooltip">
      <slot v-if="visible" name="target"></slot>
    </div>
  </span>
</template>

<style>
.tooltip-container {
  position: relative;
  cursor: pointer;
}

.tooltip {
  color: #ffffff;
  text-align: center;

  width: 240px;
  bottom: 100%;
  left: 50%;
  margin-left: -120px;

  position: absolute;
  z-index: 1;

  background: #fff;
}
</style>
