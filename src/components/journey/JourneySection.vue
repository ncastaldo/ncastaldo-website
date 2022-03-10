<script>
import BaseSection from "../base/BaseSection.vue";
import JourneyTimeChart from "./JourneyTimeChart.vue";
import JourneyItems from "./JourneyItems.vue";

export default {
  components: {
    BaseSection,
    JourneyTimeChart,
    JourneyItems,
  },
};
</script>

<template>
  <BaseSection>
    <template #title>Journey</template>
    <template #default>
      <div class="journey-section-header">
        <JourneyTimeChart :height="75" />
        <!--BaseItem>
          <template #logo> <JourneyMapChart /></template>
        </BaseItem-->
      </div>
      <div class="journey-section-content">
        <JourneyItems :margin-top="85 + 100" />
      </div>
    </template>
  </BaseSection>
</template>

<style scoped>
.journey-section-header {
  position: sticky;
  background-color: inherit;
  z-index: 5;
  margin-bottom: 2rem;

  top: 10rem;
}

.journey-section-content {
  padding: 3rem 3rem;
}
</style>
