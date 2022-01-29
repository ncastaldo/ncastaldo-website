<script setup>
import BaseSection from "../base/BaseSection.vue";
import JourneyButtons from "./JourneyButtons.vue";
import JourneyMapChart from "./JourneyMapChart.vue";
import JourneyDescription from "./JourneyDescription.vue";
import JourneyTimeChart from "./JourneyTimeChart.vue";

// http://www.garysheng.com/

</script>

<template>
  <BaseSection>
    <template #title>My Journey</template>
    <template #default>
      <JourneyTimeChart />

      <JourneyMapChart />

      <JourneyDescription />
    </template>
  </BaseSection>
</template>

<style scoped>
.journey-time-chart-outside {
  position: relative;
}
.journey-time-chart-inside {
  position: absolute;
}
</style>