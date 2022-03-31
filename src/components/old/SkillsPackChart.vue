<script>
import { onMounted, ref } from "vue";

import skillsConfig from "../../assets/config/skillsConfig.json";

import { select } from "d3-selection";
import { scaleOrdinal } from "d3-scale";
import { pack, hierarchy } from "d3-hierarchy";
import { zoom } from "d3-zoom";
import {
  forceSimulation,
  forceManyBody,
  forceCollide,
  forceX,
  forceY,
} from "d3-force";

export default {
  setup() {
    const [width, height] = [500, 400];
    const padding = { top: 10, right: 10, bottom: 30, left: 10 };

    const colorScale = scaleOrdinal().domain([1, 2]).range(["#ddd", "#bbb"]);

    const color = "#42a07e";

    const svgRef = ref(null);

    const packFunction = pack().size([
      width - padding.left - padding.right,
      height - padding.top - padding.bottom,
    ]);

    const skillsHierarchy = hierarchy(skillsConfig)
      .sum((d) => ("value" in d ? d.value : 0))
      .sort((a, b) => b.value - a.value);

    const skillsRoot = packFunction(skillsHierarchy);

    const useChart = (selection) => {
      const zoomed = ({ transform }) => {
        g.attr("transform", transform);
      };

      const zoomBehavior = zoom()
        .scaleExtent([1, 3])
        .translateExtent([
          [0, 0],
          [width, height],
        ])
        .on("zoom", zoomed);

      const g = selection.append("g").call(zoomBehavior);

      let circles = g.selectAll("circles");

      let labels = g.selectAll("text");

      // updates

      const update = () => {
        circles = circles
          .data(skillsRoot)
          .join("circle")
          .attr("r", (d) => d.r)
          .attr("cx", (d) => d.x)
          .attr("cy", (d) => d.y)
          .style("fill", (d) => colorScale(d.depth));

        labels = labels
          .data(skillsRoot.descendants())
          .join("text")
          .attr("pointer-events", "none")
          .attr("text-anchor", "middle")
          .attr("transform", (d) => `translate(${d.x}, ${d.y})`)
          .text((d) => d.data.name);
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
  <h4>Engineering</h4>
  <svg
    ref="svgRef"
    :viewBox="`0 0 ${width} ${height}`"
    style="max-width: 400px"
  />
</template>
