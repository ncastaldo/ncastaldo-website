
<script setup>
import BaseSection from '../base/BaseSection.vue';
import JourneyButtons from "./JourneyButtons.vue";
import JourneyMapChart from "./JourneyMapChart.vue";
import JourneyDescription from "./JourneyDescription.vue";
import JourneyTimeChart from "./JourneyTimeChart.vue";

</script>

<template>
  <BaseSection>
    <template v-slot:title>My Journey</template>
    <template v-slot>
      <div>
        <JourneyButtons />
        <JourneyTimeChart />
        <JourneyMapChart />
      </div>
      <div>
        <JourneyDescription />
      </div>
    </template>
  </BaseSection>
</template>

