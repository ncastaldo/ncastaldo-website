<script>
import { onMounted, ref, toRefs, watchEffect } from "vue";

import skillsProgramming from "../../assets/config/skillsProgramming.json";

import { scaleLinear, scaleBand } from "d3-scale";
import { select } from "d3-selection";
import { transition } from "d3-transition";

import { useContainerSize } from "../../composables/view";

export default {
  props: {
    height: {
      type: Number,
      default: 300,
    },
  },
  setup(props) {
    const divRef = ref(null);
    const svgRef = ref(null);

    const { height } = toRefs(props);
    const { width } = useContainerSize(divRef);

    const padding = { top: 20, right: 30, bottom: 20, left: 120 };

    const labelPadding = 15;

    const useChart = (selection) => {
      const xScale = scaleLinear().domain([1, 10]);

      const yScale = scaleBand();

      let backgroundBars = selection.append("g").selectAll("rect");
      let bars = selection.append("g").selectAll("rect");
      let labels = selection.append("g").selectAll("rect");

      // updates

      const update = ({ data, width, height }) => {
        xScale.range([padding.left, width - padding.right]);

        yScale
          .domain(data.map((d) => d.id))
          .range([padding.top, height - padding.bottom])
          .paddingInner(0.45);

        const rx = yScale.bandwidth() / 2;

        const t = transition().duration(500);
        const delay = (_, i) => i * 100;

        backgroundBars = backgroundBars
          .data(data)
          .join(
            (enter) =>
              enter
                .append("rect")
                .attr("opacity", 0)
                .transition(t)
                .delay(delay)
                .attr("opacity", 1),
            (update) => update,
            (exit) => exit
          )
          .attr("x", xScale.range()[0])
          .attr("rx", rx)
          .attr("width", xScale.range()[1] - xScale.range()[0])
          .attr("y", (d) => yScale(d.id))
          .attr("height", (d) => yScale.bandwidth())
          .style("fill", (d) => "#ccc");

        bars = bars
          .data(data)
          .join(
            (enter) =>
              enter
                .append("rect")
                .attr("width", 0)
                .transition(t)
                .delay(delay)
                .attr("width", (d) => xScale(d.value) - xScale.range()[0]),
            (update) =>
              update.attr("width", (d) => xScale(d.value) - xScale.range()[0]),
            (exit) => exit
          )
          .attr("x", xScale.range()[0])
          .attr("rx", rx)
          .attr("y", (d) => yScale(d.id))
          .attr("height", (d) => yScale.bandwidth())
          .style("fill", (d) => "#42a07e");

        labels = labels
          .data(data)
          .join(
            (enter) =>
              enter
                .append("text")
                .attr("opacity", 0)
                .transition(t)
                .delay(delay)
                .attr("opacity", (d) => (d.value > 0 ? 1 : 0)),
            (update) => update,
            (exit) => exit
          )
          .attr("pointer-events", "none")
          .attr("text-anchor", "end")
          .attr("alignment-baseline", "middle")
          .attr("x", xScale.range()[0] - labelPadding)
          .attr("y", (d) => yScale(d.id) + yScale.bandwidth() / 2)
          .text((d) => d.name);
      };

      watchEffect(() => {
        update({
          data: skillsProgramming,
          width: width.value,
          height: height.value,
        });
      });
    };

    onMounted(() => {
      select(svgRef.value).call(useChart);
    });

    return {
      width,
      divRef,
      svgRef,
    };
  },
};
</script>

<template>
  <div ref="divRef" :style="{ height, width: '100%' }">
    <svg
      ref="svgRef"
      :width="width"
      :height="height"
      class="skills-programming-chart"
    ></svg>
  </div>
</template>

<style scoped>
.skills-programming-chart :deep(text) {
  font-size: 2rem;
}
</style>
