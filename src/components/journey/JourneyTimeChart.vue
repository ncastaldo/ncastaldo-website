<script>
import { computed, onMounted, ref, watch } from "vue";

import { select } from "d3-selection";
import { transition } from "d3-transition";
import { scaleLinear, scaleTime } from "d3-scale";
import { min, max } from "d3-array";
import { axisBottom } from "d3-axis";

import journey from "../../store/journey";

export default {
  setup() {
    const [width, height] = [600, 80];
    const padding = { top: 20, right: 10, bottom: 40, left: 10 };

    const svgRef = ref(null);

    const period = computed(journey.getPeriod);

    const intervals = journey
      .getPeriods()
      .map((period) =>
        period.intervals.map((interval) => ({
          fromDate: interval.from ? new Date(interval.from) : null,
          toDate: interval.to ? new Date(interval.to) : new Date(),
          periodId: period.id,
        }))
      )
      .flat();

    const chartIntervals = computed(() => {
      return intervals.map((d) => ({
        ...d,
        current: d.periodId === period.value.id,
      }));
    });

    const xScale = scaleTime()
      .domain([
        min(chartIntervals.value, (d) => d.fromDate),
        max(chartIntervals.value, (d) => d.toDate),
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
        const t = transition().duration(250);

        bars = bars
          .data(chartIntervals.value)
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
          .on("click", (event, d) => journey.scrollToPeriodId(d.periodId));
      };

      update();

      watch(chartIntervals, update);
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
