<script>
import { computed } from "vue";
import fullscreenState from "../store/fullscreen";

export default {
  setup() {
    const fullscren = computed({
      get: fullscreenState.isFullscreen,
      set: fullscreenState.setFullscreen,
    });

    return { fullscren };
  },
};
</script>

<template>
  <fullscreen v-model="fullscren">
    <div v-if="fullscren" class="app-magic"></div>
  </fullscreen>
</template>
