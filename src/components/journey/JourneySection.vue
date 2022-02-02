<script>
import BaseSection from "../base/BaseSection.vue";
import JourneyMapChart from "./JourneyMapChart.vue";
import JourneyTimeChart from "./JourneyTimeChart.vue";
import JourneyItems from "./JourneyItems.vue";
import { onMounted, ref } from "vue";
import BaseItem from "../base/BaseItem.vue";

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
      <div class="sticky">
        <JourneyTimeChart />
        <!--BaseItem>
          <template #logo> <JourneyMapChart /></template>
        </BaseItem-->
      </div>
      <div>
        <JourneyItems />
      </div>
    </template>
  </BaseSection>
</template>

<style scoped>
.sticky {
  position: sticky;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1),
    97%,
    rgba(255, 255, 255, 0)
  );
  z-index: 10;
  top: 0;
}

.ahead-sticky {
  z-index: 1;
}
</style>
