<script>
import { computed } from "vue";
import fullscreenStore from "../store/fullscreen";
import JourneyTimeChart from "./journey/JourneyTimeChart.vue";
import JourneyMapChart from "./journey/JourneyMapChart.vue";

export default {
  components: { JourneyTimeChart, JourneyMapChart },
  setup() {
    const fullscren = computed({
      get: fullscreenStore.isFullscreen,
      set: fullscreenStore.setFullscreen,
    });
    return { fullscren };
  },
};
</script>

<template>
  <fullscreen v-model="fullscren" page-only="true">
    <div v-if="fullscren" class="fullscreen-wrapper">
      <JourneyTimeChart :height="75"></JourneyTimeChart>
      <JourneyMapChart></JourneyMapChart>
    </div>
  </fullscreen>
</template>

<style>
.fullscreen-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 20;
  background-color: #fff;
}
</style>
