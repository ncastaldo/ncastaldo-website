<script>
import { computed, onMounted, onUnmounted, toRefs, watch } from "vue";

import { timeFormat } from "d3-time-format";
import BaseItem from "../base/BaseItem.vue";
import BaseLogo from "../base/BaseLogo.vue";
import BaseDescription from "../base/BaseDescription.vue";

import journey from "../../store/journey";
import BaseHorizonalRow from "../base/BaseHorizonalRow.vue";

export default {
  components: { BaseItem, BaseLogo, BaseDescription, BaseHorizonalRow },
  props: {
    current: {
      type: Boolean,
      default: false,
    },
    marginTop: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const { current, marginTop } = toRefs(props);

    const format = timeFormat("%B %Y");

    // const journey = inject("journey");

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
      rootMargin: `-${marginTop.value}px 0px 0px`,
    });

    const getPeriodInterval = (period) =>
      period.fromDate
        ? `${format(period.fromDate)} - ${format(period.toDate)}`
        : format(period.toDate);

    const iconsMap = {
      education: ["fa", "university"],
      work: ["fa", "briefcase"],
    };

    const getPeriodIcon = (period) =>
      period.detail.type in iconsMap ? iconsMap[period.detail.type] : null;

    onMounted(() => {
      Object.values(periodsRefs).forEach((target) => observer.observe(target));

      watch(currentPeriod, (currentPeriod) => {
        if (programmaticScrolling.value) {
          const rect = periodsRefs[currentPeriod.id].getBoundingClientRect();

          window.scrollTo(0, rect.top + window.scrollY - marginTop.value);
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
      getPeriodIcon,
      setPeriodRef,
      currentPeriod,
    };
  },
};
</script>

<template>
  <div
    v-for="(period, i) in periods"
    :key="period.id"
    :ref="setPeriodRef"
    :data-period-id="period.id"
  >
    <BaseItem>
      <template #logo>
        <BaseLogo
          :src="period.detail.logo"
          :current="currentPeriod === period"
        />
      </template>
      <template #default>
        <BaseDescription
          :title="period.detail.place"
          :subtitle="period.detail.title"
          :caption="getPeriodInterval(period)"
          :html-content="period.detail.html"
          :current="currentPeriod === period"
          :url="period.detail.url"
          :icon="getPeriodIcon(period)"
        />
      </template>
    </BaseItem>
    <BaseHorizonalRow v-if="i !== periods.length - 1" />
  </div>
</template>

<style scoped></style>
