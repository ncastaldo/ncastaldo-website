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
    const padding = { top: 20, right: 10, bottom: 40, left: 10 };

    const svgRef = ref(null);

    const store = useStore();

    const setPeriodId = (periodId) => store.commit("setPeriodId", periodId);

    const period = computed(() => store.getters.getPeriod);
    const periods = computed(() => store.getters.getPeriods);

    const chartPeriods = computed(() =>
      periods.value.map((d) => ({
        ...d,
        current: d === period.value,
      }))
    );

    const xScale = scaleTime()
      .domain([
        min(periods.value, (d) => d.fromDate),
        max(periods.value, (d) => d.toDate),
      ])
      .range([0 + padding.left, width - padding.right]);

    const rx = 10;

    const yScale = scaleLinear()
      .domain([0, 1])
      .range([height - padding.bottom, padding.top]);

    const colorScale = (d) => (d.current ? "#42a07e" : "#ccc");

    const xAxis = axisBottom().scale(xScale).tickSize(0).tickPadding(6);

    const useChart = (selection) => {
      selection
        .append("g")
        .call(xAxis)
        .attr("transform", `translate(0, ${height - padding.bottom})`)
        .call((g) => g.select(".domain").remove())
        .call((g) => g.selectAll(".tick text").attr("font-size", "0.8rem"));

      let bars = selection.append("g").selectAll("rect");

      const update = () => {
        const t = transition().duration(500);

        bars = bars
          .data(chartPeriods.value, (d) => d.id)
          .join(
            (enter) =>
              enter
                .append("rect")
                .attr("opacity", 0)
                .attr("fill", colorScale)
                .transition(t)
                .attr("opacity", 1),
            (update) =>
              update.transition(t).attr("opacity", 1).attr("fill", colorScale),
            (exit) => exit.transition(t).attr("opacity", 0).remove()
          )
          .attr("x", (d) => xScale(d.fromDate))
          .attr("rx", rx)
          .attr("width", (d) => xScale(d.toDate) - xScale(d.fromDate))
          .attr("height", (d) => yScale.range()[0] - yScale(1))
          .attr("y", (d) => yScale.range()[1])
          .style("cursor", "pointer")
          .on("click", (event, d) => {
            console.log(d);
            setPeriodId(d.id);
          });
      };

      update();

      watch(() => chartPeriods.value, update);
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
