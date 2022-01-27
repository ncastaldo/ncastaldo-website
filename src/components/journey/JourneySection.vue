<script setup>
import JourneyButtons from "./JourneyButtons.vue";
import JourneyMapChart from "./JourneyMapChart.vue";
import JourneyDescription from "./JourneyDescription.vue";
import JourneyTimeChart from "./JourneyTimeChart.vue";
</script>

<template>
  <section class="section">
    <h2 class="section-title">Journey</h2>

    <div class="section-content">
      <div>
        <JourneyButtons />
        <JourneyTimeChart />
        <JourneyMapChart />
      </div>
      <div>
        <JourneyDescription />
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 1rem;
  background-color: #eee;
}

.section-title {
  padding-bottom: 1rem;
}

.section-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
}
</style>
