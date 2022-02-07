<script>
import {
  computed,
  inject,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  ref,
  watch,
} from "vue";
import { useStore } from "vuex";

import { timeFormat } from "d3-time-format";
import BaseItem from "../base/BaseItem.vue";
import BaseImage from "../base/BaseImage.vue";
import BaseItemDescription from "../base/BaseItemDescription.vue";

export default {
  components: { BaseItem, BaseImage, BaseItemDescription },
  setup() {
    const format = timeFormat("%B %Y");

    const journey = inject("journey");

    const getPeriods = journey.getPeriods;
    const currentPeriod = computed(journey.getPeriod);

    const periodsRefs = {};
    const setPeriodRef = (periodId, ref) => {
      periodsRefs[periodId] = ref;
    };

    let scrollingTimeout;
    let isScrolling = false;

    const onScroll = (event) => {
      isScrolling = true;
      clearTimeout(scrollingTimeout);
      scrollingTimeout = setTimeout(() => {
        isScrolling = false;
      }, 66);

      const centerY = window.innerHeight / 2;
      const pair = Object.entries(periodsRefs).find(([_, ref]) => {
        const rect = ref.getBoundingClientRect();
        return rect.top < centerY && centerY < rect.top + rect.height;
      });

      pair !== undefined && journey.setPeriodId(pair[0]);
    };

    const getPeriodInterval = (period) =>
      period.fromDate
        ? `${format(period.fromDate)} - ${format(period.toDate)}`
        : format(period.toDate);

    onMounted(() => {
      window.addEventListener("scroll", onScroll);

      watch(currentPeriod, (period) => {
        if (!isScrolling) {
          periodsRefs[period.id].scrollIntoView();
        }
      });
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", onScroll);
    });

    return {
      getPeriods,
      getPeriodInterval,
      setPeriodRef,
      currentPeriod,
    };
  },
};
</script>

<template>
  <div
    v-for="period in getPeriods()"
    :key="period.id"
    :ref="(ref) => setPeriodRef(period.id, ref)"
  >
    <BaseItem>
      <template #logo>
        <div>
          <BaseImage :src="period.detail.logo" />
        </div>
      </template>
      <template #content>
        <BaseItemDescription
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

<style scoped></style>
