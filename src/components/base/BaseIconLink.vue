<script>
import { ref } from "vue";

import isMobile from "is-mobile";

export default {
  props: {
    url: String,
    icon: Array,
    size: String,
    color: {
      type: String,
      default: "#1f1f1f",
    },
  },
  setup() {
    const active = ref(false);

    const mobile = isMobile();

    const onPointer = (enter) => {
      if (!mobile) {
        active.value = enter;
      }
    };

    return { active, onPointer };
  },
};
</script>

<template>
  <a
    class="icon-link"
    :class="active ? 'active' : ''"
    :style="{ color }"
    :href="url"
    target="_blank"
    @pointerenter="onPointer(true)"
    @pointerleave="onPointer(false)"
  >
    <fa :icon="icon" :size="size"></fa>
  </a>
</template>

<style scoped>
.icon-link.active {
  opacity: 0.7;
}
</style>
