<script>
import { computed, toRefs } from "vue";

export default {
  props: {
    icon: Array,
    disabled: Boolean,
    color: String,
    size: String,
  },
  setup(props) {
    const { disabled } = toRefs(props);

    const style = computed(() => ({
      cursor: disabled.value ? "default" : "pointer",
      pointerEvents: disabled.value ? "none" : "all",
    }));

    return { style };
  },
};
</script>

<template>
  <fa
    :icon="icon"
    :size="size"
    :color="color"
    :style="style"
    class="base-icon-action"
  ></fa>
</template>

<style scoped>
.base-icon-action:hover {
  opacity: 0.7;
}
</style>
