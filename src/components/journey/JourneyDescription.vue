<script>
import { computed, onBeforeUpdate, onMounted, ref } from "vue";
import { useStore } from "vuex";

import { timeFormat } from "d3-time-format";
import BaseItem from "../base/BaseItem.vue";
import BaseLogo from "../base/BaseLogo.vue";

export default {
  components: { BaseItem, BaseLogo },
  setup() {
    const format = timeFormat("%B %Y");
    const store = useStore();
    const setPeriodId = (periodId) => store.commit("setPeriodId", periodId);
    const periods = computed(() => store.getters.getPeriods);
    const currentPeriod = computed(() => store.getters.getPeriod);
    const getPeriodInterval = period => period.fromDate
      ? `${format(period.fromDate)} - ${format(period.toDate)}`
      : format(period.toDate);
    const descriptionRefPeriods = [];
    const setDescriptionRef = (descriptionRef, period) => { descriptionRefPeriods.push([descriptionRef, period]); };
    // onBeforeUpdate not needed here
    const onScroll = (event) => {
      const centerY = window.innerHeight / 2;
      const pair = descriptionRefPeriods
        .find(([descriptionRef, period]) => {
          const rect = descriptionRef.getBoundingClientRect();
          return rect.top < centerY && centerY < rect.top + rect.height;
        });
      if (pair !== null && pair.length === 2) {
        const period = pair[1];
        if (period !== currentPeriod.value) {
          setPeriodId(period.id);
        }
      }
    };
    onMounted(() => {
      window.addEventListener("scroll", onScroll);
    });
    return {
      setDescriptionRef,
      currentPeriod,
      periods,
      getPeriodInterval,
    };
  },
};
</script>

<template>
  <BaseItem
    v-for="period in periods"
    :key="period.id"
    class="description"
    :ref="(ref) => setDescriptionRef(ref, period)"
  >
    <template #logo>
      <BaseLogo :src="period.detail.logo" />
    </template>
    <template #content>
      <h3
        :class="`description-title ${currentPeriod === period ? 'current' : ''}`"
      >{{ period.detail.title }}</h3>
      <h4 class="description-subtitle">{{ period.detail.place }}</h4>
      <h5 class="description-caption">{{ getPeriodInterval(period) }}</h5>
      <div class="description-content">
        <p v-for="(achievement, i) in period.detail.achievements" :key="i">{{ achievement }}</p>
      </div>
    </template>
  </BaseItem>
</template>

<style scoped>
.description {
  padding: 1rem;
}

.description-title {
  padding-top: 0.1rem;
  padding-bottom: 0.3rem;
  font-size: 1.5rem;
}
.description-title.current {
  text-decoration: underline #42a07e;
  text-underline-offset: 0.4rem;
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
