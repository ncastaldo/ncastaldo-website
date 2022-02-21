<script>
import BaseSection from "../base/BaseSection.vue";
import JourneyTimeChart from "./JourneyTimeChart.vue";
import JourneyItems from "./JourneyItems.vue";
import { onMounted, ref } from "vue";

export default {
  components: {
    BaseSection,
    JourneyTimeChart,
    JourneyItems,
  },
  setup() {
    const section = ref(null);

    const onScroll = (event) => {
      console.log(section.value.getBoundingClientRect(), window.scrollY);
    };

    onMounted(() => {
      // window.addEventListener('scroll', onScroll)
    });

    return {
      section,
    };
  },
};
</script>

<template>
  <BaseSection>
    <template #title>Journey</template>
    <template #default>
      <div class="journey-section-header">
        <JourneyTimeChart />
        <!--BaseItem>
          <template #logo> <JourneyMapChart /></template>
        </BaseItem-->
      </div>
      <JourneyItems />
    </template>
  </BaseSection>
</template>

<style scoped>
.journey-section-header {
  position: sticky;
  background-color: inherit;
  z-index: 10;
  top: 0;
  padding-bottom: 2rem;
}
</style>
