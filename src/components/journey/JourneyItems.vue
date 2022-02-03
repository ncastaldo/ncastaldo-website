<script>
import { computed, onBeforeUpdate, onMounted, ref } from "vue";
import { useStore } from "vuex";

import { timeFormat } from "d3-time-format";
import BaseItem from "../base/BaseItem.vue";
import BaseImage from "../base/BaseImage.vue";
import BaseItemDescription from "../base/BaseItemDescription.vue";

export default {
  components: { BaseItem, BaseImage, BaseItemDescription },
  setup() {
    const store = useStore();
    const setPeriodId = (periodId) => store.commit("setPeriodId", periodId);
    const periods = computed(() => store.getters.getPeriods);
    const currentPeriod = computed(() => store.getters.getPeriod);

    const descriptionRefPeriods = [];
    const setDescriptionRef = (descriptionRef, period) => {
      descriptionRefPeriods.push([descriptionRef, period]);
    };

    // onBeforeUpdate not needed here
    const onScroll = (event) => {
      const centerY = window.innerHeight / 2;
      const pair = descriptionRefPeriods.find(([descriptionRef, period]) => {
        console.log(descriptionRef);
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

    const format = timeFormat("%B %Y");

    const getPeriodInterval = (period) =>
      period.fromDate
        ? `${format(period.fromDate)} - ${format(period.toDate)}`
        : format(period.toDate);

    onMounted(() => {
      // window.addEventListener("scroll", onScroll);
    });

    return {
      getPeriodInterval,
      setDescriptionRef,
      currentPeriod,
      periods,
    };
  },
};
</script>

<template>
  <BaseItem
    v-for="period in periods"
    :key="period.id"
    :ref="(ref) => setDescriptionRef(ref, period)"
  >
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
</template>

<style scoped></style>
