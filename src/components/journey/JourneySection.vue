<script>
import BaseSection from "../base/BaseSection.vue";
import JourneyMapChart from "./JourneyMapChart.vue";
import JourneyTimeChart from "./JourneyTimeChart.vue";
import JourneyDescription from "./JourneyDescription.vue";
import { onMounted, ref } from "vue";

export default {
  components: {
    BaseSection,
    JourneyMapChart,
    JourneyTimeChart,
    JourneyDescription,
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
      <div class="sticky">
        <JourneyTimeChart />
        <JourneyMapChart />
      </div>
      <div style="z-index: 2">
        <JourneyDescription />
      </div>
    </template>
  </BaseSection>
</template>

<style scoped>
.sticky {
  position: sticky;
  top: 0;
}

.ahead-sticky {
  z-index: 1;
}
</style>
