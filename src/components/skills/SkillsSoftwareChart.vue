<script>
import { onMounted, ref } from "vue";

import skillsSoftware from "../../assets/config/skillsSoftware.json";

import { scalePoint } from "d3-scale";
import { select } from "d3-selection";
import { transition } from "d3-transition";

export default {
  setup() {
    const [width, height] = [300, 120];
    const padding = { top: 10, right: 200, bottom: 10, left: 10 };

    const skills = skillsSoftware;

    const yScale = scalePoint()
      .range([padding.top, height - padding.bottom])
      .padding(0.2)
      .domain(skills.map((d) => d.id));

    const xLeft = padding.left;

    const labelPadding = 15;

    const svgRef = ref(null);

    const useChart = (selection) => {
      let circles = selection.append("g").selectAll("circle");
      let labels = selection.append("g").selectAll("text");

      // updates

      const update = () => {
        const t = transition().duration(500);
        const delay = (_, i) => i * 100;

        circles = circles
          .data(skills)
          .join(
            (enter) =>
              enter
                .append("circle")
                .attr("r", 0)
                .transition(t)
                .delay(delay)
                .attr("r", (d) => (d.value > 0 ? 5 : 0)),
            (update) => update,
            (exit) => exit
          )
          .attr("cx", xLeft)
          .attr("cy", (d) => yScale(d.id))
          .style("fill", (d) => "#42a07e");

        labels = labels
          .data(skills)
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

      update();
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
