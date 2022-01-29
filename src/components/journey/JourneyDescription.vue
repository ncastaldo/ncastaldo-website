<script>
import { computed } from "vue";
import { useStore } from "vuex";

import { timeFormat } from "d3-time-format";

export default {
  setup() {
    const format = timeFormat("%B %Y");

    const store = useStore();

    const periods = computed(() => store.getters.getPeriods);

    const getPeriodInterval = period =>
      period.fromDate
        ? `${format(period.fromDate)} - ${format(period.toDate)}`
        : format(period.toDate)


    return {
      periods,
      getPeriodInterval,
    };
  },
};
</script>

<template>
  <div v-for="period in periods" :key="period.id" class="description">
    <h3 class="description-title">{{ period.detail.title }}</h3>
    <h4 class="description-subtitle">{{ period.detail.place }}</h4>
    <h5 class="description-caption">{{ getPeriodInterval(period) }}</h5>
    <div class="description-content">
      <p v-for="(achievement, i) in period.detail.achievements" :key="i">{{ achievement }}</p>
    </div>
  </div>
</template>

<style scoped>
.description {
  padding: 1rem;
}
.description-title {
  padding-top: 0.1rem;
  padding-bottom: 0.2rem;
  font-size: 1.5rem;
}

.description-subtitle {
  padding-top: 0.1rem;
  padding-bottom: 0.2rem;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 0.1rem;
}

.description-caption {
  padding-top: 0.1rem;
  padding-bottom: 0.2rem;
  font-size: 0.8rem;
}

.description-content {
  padding-top: 0.5rem;
}
.description-content p {
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  line-height: 1.2rem;
}
</style>
