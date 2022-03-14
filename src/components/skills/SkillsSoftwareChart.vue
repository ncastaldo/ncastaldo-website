<script>
import { onMounted, ref, toRefs, watchEffect } from "vue";

import skillsSoftware from "../../assets/config/skillsSoftware.json";

import { scalePoint } from "d3-scale";
import { select } from "d3-selection";
import { transition } from "d3-transition";
import { useContainerSize } from "../../composables/chart";

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

    const padding = { top: 10, right: 200, bottom: 10, left: 10 };
    const radius = 8;
    const labelPadding = 20;

    const useChart = (selection) => {
      const yScale = scalePoint().padding(0.2);

      const xLeft = padding.left;

      let circles = selection.append("g").selectAll("circle");
      let labels = selection.append("g").selectAll("text");

      // updates

      const update = ({ data, width, height }) => {
        const t = transition().duration(500);
        const delay = (_, i) => i * 100;

        yScale
          .range([padding.top, height - padding.bottom])
          .domain(data.map((d) => d.id));

        circles = circles
          .data(data)
          .join(
            (enter) =>
              enter
                .append("circle")
                .attr("r", 0)
                .transition(t)
                .delay(delay)
                .attr("r", (d) => (d.value > 0 ? radius : 0)),
            (update) => update,
            (exit) => exit
          )
          .attr("cx", xLeft)
          .attr("cy", (d) => yScale(d.id))
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
          .attr("text-anchor", "start")
          .attr("alignment-baseline", "middle")
          .attr("x", xLeft + labelPadding)
          .attr("y", (d) => yScale(d.id))
          .text((d) => d.name);
      };

      watchEffect(() => {
        update({
          data: skillsSoftware,
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
      class="skills-software-chart"
    ></svg>
  </div>
</template>

<style scoped>
.skills-software-chart :deep(text) {
  font-size: 2rem;
}
</style>
