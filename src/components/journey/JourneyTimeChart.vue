<script>
import { computed, onMounted, ref, toRefs, watchEffect } from "vue";

import { select } from "d3-selection";
import { transition } from "d3-transition";
import { scaleLinear, scaleTime } from "d3-scale";
import { min, max } from "d3-array";
import { axisBottom } from "d3-axis";

import {
  useContainerSize,
  useIntersectionObserverOnce,
} from "../../composables/view";

import journey from "../../store/journey";

export default {
  props: {
    height: {
      type: Number,
      default: 60,
    },
  },
  setup(props) {
    const padding = { top: 15, right: 20, bottom: 35, left: 20 };

    const period = computed(journey.getPeriod);

    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 2); // 2 months more

    const intervals = journey
      .getPeriods()
      .map((period) =>
        period.intervals.map((interval) => ({
          fromDate: interval.from ? new Date(interval.from) : null,
          toDate: interval.to ? new Date(interval.to) : maxDate,
          periodId: period.id,
        }))
      )
      .flat()
      .sort((a, b) => a.fromDate - b.toDate);

    const chartIntervals = computed(() => {
      return intervals.map((d) => ({
        ...d,
        current: d.periodId === period.value.id,
      }));
    });

    const divRef = ref(null);
    const svgRef = ref(null);

    const { height } = toRefs(props);
    const { width } = useContainerSize(divRef);

    const colorScale = (d) => (d.current ? "#42a07e" : "#ccc");

    const useChart = (selection) => {
      const xScale = scaleTime();
      const xAxis = axisBottom().scale(xScale).tickSize(0).tickPadding(8);

      const yScale = scaleLinear().domain([0, 1]);

      let axis = selection.append("g");
      let bars = selection.append("g").selectAll("rect");

      const update = ({ data, width, height }) => {
        const enterTransition = transition().duration(500);
        const delayTransition = (_, i) => i * 100;

        const updateTransition = transition().duration(250);

        xScale
          .domain([min(data, (d) => d.fromDate), maxDate]) // before: max(data, (d) => d.toDate)
          .range([0 + padding.left, width - padding.right]);

        xAxis.ticks(width > 500 ? 10 : 5);

        yScale.range([height - padding.bottom, padding.top]);

        const rx = (height - padding.top - padding.bottom) / 2;

        axis
          .call(xAxis)
          .attr("transform", `translate(0, ${height - padding.bottom})`)
          .call((g) => g.select(".domain").remove());

        bars = bars
          .data(data)
          .join(
            (enter) =>
              enter
                .append("rect")
                .attr("opacity", 0)
                .attr("fill", colorScale)
                .transition(enterTransition)
                .delay(delayTransition)
                .attr("opacity", 1),
            (update) =>
              update
                .transition(updateTransition)
                .attr("opacity", 1)
                .attr("fill", colorScale)
          )
          .attr("x", (d) => xScale(d.fromDate))
          .attr("rx", rx)
          .attr("width", (d) => xScale(d.toDate) - xScale(d.fromDate))
          .attr("height", (d) => yScale.range()[0] - yScale(1))
          .attr("y", (d) => yScale.range()[1])
          .style("cursor", "pointer")
          .on("click", (event, d) => journey.setTargetPeriodId(d.periodId));
      };

      watchEffect(() => {
        update({
          data: chartIntervals.value,
          width: width.value,
          height: height.value,
        });
      });
    };

    onMounted(() => {
      select(svgRef.value).call(useChart);
    });

    return {
      divRef,
      svgRef,
      width,
    };
  },
};
</script>

<template>
  <div ref="divRef" :style="{ height, width: '100%' }">
    <svg
      ref="svgRef"
      class="journey-time-chart"
      :width="width"
      :height="height"
    ></svg>
  </div>
</template>

<style scoped>
.journey-time-chart {
  background-color: #fff;
  /*
  box-shadow: #ddd 0 0 0 0.1rem;*/
}

.journey-time-chart :deep(text) {
  font-size: 1.6rem;
}
</style>
