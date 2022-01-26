<script>
import { computed, onMounted, ref, watch } from "vue";
import { useStore } from "vuex";

import { select } from "d3-selection";
import { transition } from "d3-transition";
import { scaleLinear, scaleTime } from "d3-scale";
import { min, max } from "d3-array";
import { axisBottom } from "d3-axis";

export default {
  setup() {
    const [width, height] = [600, 80];
    const padding = { top: 10, right: 10, bottom: 30, left: 10 };

    const svgRef = ref(null);

    const store = useStore();
    const periods = computed(() => store.getters.getPeriods);
    const activePeriods = computed(() => store.getters.getActivePeriods);

    const useChart = (selection) => {
      const xScale = scaleTime()
        .domain([min(periods.value, d => d.fromDate), max(periods.value, d => d.toDate)])
        .range([0 + padding.left, width - padding.right]);

      const yScale = scaleLinear()
        .domain([0, 1])
        .range([height - padding.bottom, padding.top]);

      const xAxis = axisBottom().scale(xScale);

      selection
        .append("g")
        .call(xAxis)
        .attr("transform", `translate(0, ${height - padding.bottom})`);

      let bars = selection.append("g").selectAll("rect");

      const update = () => {
        const t = transition().duration(500)

        bars = bars
          .data(activePeriods.value, (d) => d.id)
          .join(
            (enter) => enter
              .append("rect")
              .attr("opacity", 0)
              .attr('fill', (d, i, array) => i == array.length - 1 ? '#49b787' : '#888')
              .transition(t)
              .attr("opacity", 1),
            (update) => update
              .transition(t)
              .attr("opacity", 1)
              .attr('fill', (d, i, array) => i == array.length - 1 ? '#49b787' : '#888'),
            (exit) => exit
              .transition(t)
              .attr("opacity", 0)
              .remove()
          )
          .attr("x", (d) => xScale(d.fromDate))
          .attr("width", (d) => xScale(d.toDate) - xScale(d.fromDate))
          .attr("height", (d) => yScale.range()[0] - yScale(1))
          .attr("y", (d) => yScale.range()[1])
      };

      update();

      watch(() => activePeriods.value, update);
    };

    onMounted(() => {
      select(svgRef.value).call(useChart);
    });

    return {
      width,
      height,
      svgRef,
    };
  },
};
</script>

<template>
  <svg ref="svgRef" :viewBox="`0 0 ${width} ${height}`" />
</template>
