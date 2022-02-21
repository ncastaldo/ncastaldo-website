<script>
import { computed, onMounted, onUnmounted, toRefs, watch } from "vue";

import { timeFormat } from "d3-time-format";
import BaseItem from "../base/BaseItem.vue";
import BaseLogo from "../base/BaseLogo.vue";
import BaseDescription from "../base/BaseDescription.vue";

import journey from "../../store/journey";

export default {
  components: { BaseItem, BaseLogo, BaseDescription },
  props: {
    current: Boolean,
  },
  setup(props) {
    const { current } = toRefs(props);

    const format = timeFormat("%B %Y");

    // const journey = inject("journey");

    const marginTop = 100;

    const periods = journey.getPeriods();
    const currentPeriod = computed(journey.getPeriod);

    const programmaticScrolling = computed({
      get: journey.isProgrammaticScrolling,
      set: journey.setProgrammaticScrolling,
    });

    const periodsRefs = {};
    const setPeriodRef = (ref) => {
      periodsRefs[ref.dataset.periodId] = ref;
    };

    let allEntries = [];

    const observerCallback = (entries) => {
      if (allEntries.length === 0) {
        allEntries = entries;
      } else {
        let j = 0;
        entries.forEach((entry) => {
          while (entry.target !== allEntries[j].target) {
            j += 1;
          }
          allEntries[j] = entry;
        });
      }

      const entry = allEntries.filter((entry) => entry.isIntersecting).pop();

      if (entry !== undefined && !programmaticScrolling.value) {
        journey.setPeriodId(entry.target.dataset.periodId);
      }
    };
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5,
      rootMargin: `-${marginTop}px 0px 0px`,
    });

    const getPeriodInterval = (period) =>
      period.fromDate
        ? `${format(period.fromDate)} - ${format(period.toDate)}`
        : format(period.toDate);

    onMounted(() => {
      Object.values(periodsRefs).forEach((target) => observer.observe(target));

      watch(currentPeriod, (currentPeriod) => {
        if (programmaticScrolling.value) {
          const rect = periodsRefs[currentPeriod.id].getBoundingClientRect();

          window.scrollTo(0, rect.top + window.scrollY - marginTop);
          programmaticScrolling.value = false;
        }
      });
    });

    onUnmounted(() => {
      observer.disconnect();
    });

    return {
      periods,
      getPeriodInterval,
      setPeriodRef,
      currentPeriod,
    };
  },
};
</script>

<template>
  <div
    v-for="period in periods"
    :key="period.id"
    :ref="setPeriodRef"
    :data-period-id="period.id"
  >
    <BaseItem :current="currentPeriod === period">
      <template #logo>
        <BaseLogo :src="period.detail.logo" />
      </template>
      <template #default>
        <BaseDescription
          :title="period.detail.title"
          :subtitle="period.detail.place"
          :caption="getPeriodInterval(period)"
          :paragraphs="period.detail.achievements"
          :current="currentPeriod === period"
        />
      </template>
    </BaseItem>
  </div>
</template>

<style></style>
