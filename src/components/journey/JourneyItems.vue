<script>
import { computed, toRefs, watch, watchEffect } from "vue";

import { timeFormat } from "d3-time-format";
import BaseItem from "../base/BaseItem.vue";
import BaseLogo from "../base/BaseLogo.vue";
import BaseDescription from "../base/BaseDescription.vue";

import journey from "../../store/journey";

import BaseHorizonalRow from "../base/BaseHorizonalRow.vue";

import { useClosestRef } from "../../composables/view";

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
    const { marginTop } = toRefs(props);

    const format = timeFormat("%B %Y");

    const periods = journey.getPeriods();
    const currentPeriod = computed(journey.getPeriod);

    const targetPeriodId = computed(journey.getTargetPeriodId);

    const iconsMap = {
      education: ["fa", "university"],
      work: ["fa", "briefcase"],
    };

    const getPeriodIcon = (period) =>
      period.detail.type in iconsMap ? iconsMap[period.detail.type] : null;

    const getPeriodCaption = (period) =>
      `${period.detail.location} | ${format(period.fromDate)} - ${
        period.to ? format(period.toDate) : "Present"
      }`;

    const periodsRefs = [];
    const setPeriodRef = (ref) => {
      periodsRefs.push(ref);
    };

    const closestRef = useClosestRef(periodsRefs);

    watchEffect(() => {
      if (closestRef.value) {
        journey.setPeriodId(closestRef.value.dataset.periodId);
      }
    });

    watch(targetPeriodId, (id) => {
      const rect = periodsRefs
        .find((ref) => ref.dataset.periodId === id.toString())
        .getBoundingClientRect();

      window.scrollTo({
        top: rect.top + window.scrollY - marginTop.value,
        left: 0,
        behavior: "smooth",
      });
    });

    return {
      periods,
      getPeriodCaption,
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
          :caption="getPeriodCaption(period)"
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
