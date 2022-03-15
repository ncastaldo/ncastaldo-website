<script>
import { computed, onMounted, onUnmounted, toRefs, watch } from "vue";

import { timeFormat } from "d3-time-format";
import BaseItem from "../base/BaseItem.vue";
import BaseLogo from "../base/BaseLogo.vue";
import BaseDescription from "../base/BaseDescription.vue";

import view from "../../store/view";
import journey from "../../store/journey";

import BaseHorizonalRow from "../base/BaseHorizonalRow.vue";

import { useEventListener } from "@vueuse/core";

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

    const periods = journey.getPeriods();
    const currentPeriod = computed(journey.getPeriod);

    const programmaticScroll = computed({
      get: view.isProgrammaticScroll,
      set: view.setProgrammaticScroll,
    });

    const iconsMap = {
      education: ["fa", "university"],
      work: ["fa", "briefcase"],
    };

    const getPeriodIcon = (period) =>
      period.detail.type in iconsMap ? iconsMap[period.detail.type] : null;

    const getPeriodCaption = (period) =>
      period.detail.location +
      " | " +
      (period.fromDate
        ? `${format(period.fromDate)} - ${format(period.toDate)}`
        : format(period.toDate));

    const periodsRefs = {};
    const setPeriodRef = (ref) => {
      periodsRefs[ref.dataset.periodId] = ref;
    };

    const onScroll = (event) => {
      if (programmaticScroll.value) {
        return;
      }

      const sectionTop = window.pageYOffset + marginTop.value;

      const periodRefDistances = Object.entries(periodsRefs)
        .map(([periodId, ref]) => [
          periodId,
          Math.abs(ref.offsetTop - sectionTop),
        ])
        .sort(([_, aDistance], [__, bDistance]) => aDistance - bDistance);

      if (periodRefDistances.length > 0) {
        const closestPeriodId = periodRefDistances[0][0];

        journey.setPeriodId(closestPeriodId);
      }
    };

    useEventListener(document, "scroll", onScroll);

    watch(currentPeriod, () => {
      if (!programmaticScroll.value) {
        return;
      }
      const rect = periodsRefs[currentPeriod.value.id].getBoundingClientRect();

      window.scrollTo({
        top: rect.top + window.scrollY - marginTop.value,
        left: 0,
        behavior: "smooth",
      });

      programmaticScroll.value = false;
    });

    // window.scrollTo(0, rect.top + window.scrollY - marginTop.value);
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
