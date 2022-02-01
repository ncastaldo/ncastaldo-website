
<script>
import { onMounted, ref } from "vue";

import skillsFullConfig from "../../assets/config/skillsFullConfig.json";


import { scaleLinear, scalePoint } from "d3-scale";
import { select } from "d3-selection";
import { transition } from 'd3-transition'
import { axisLeft, axisRight } from 'd3-axis'

export default {
  setup() {

    const [width, height] = [600, 400];
    const padding = { top: 10, right: 200, bottom: 10, left: 200 };

    const { programming, engineering, libraries } = skillsFullConfig.nodes

    const leftSkills = [...programming, { id: 'fake', value: 0 }, ...engineering]
    const rightSkills = libraries

    const yScale = scalePoint()
      .range([padding.top, height - padding.bottom])
      .padding(0.2)

    const yLeftScale = yScale.copy()
      .domain(leftSkills.map(d => d.id))

    const xLeft = padding.left

    const labelPadding = 15

    const yRightScale = yScale.copy()
      .domain(rightSkills.map(d => d.id))

    const xRight = width - padding.right

    const svgRef = ref(null);

    const useChart = (selection) => {

      let leftCircles = selection.append('g').selectAll("circle");
      let leftLabels = selection.append('g').selectAll("text");

      let rightCircles = selection.append('g').selectAll("circle");
      let rightLabels = selection.append('g').selectAll("text");

      // updates

      const update = () => {
        const t = transition().duration(500)
        const delay = (_, i) => i * 50

        leftCircles = leftCircles
          .data(leftSkills)
          .join(
            (enter) =>
              enter
                .append("circle")
                .attr("r", 0)
                .transition(t)
                .delay(delay)
                .attr("r", d => d.value > 0 ? 5 : 0),
            (update) => update,
            (exit) => exit
          )
          .attr("cx", xLeft)
          .attr("cy", d => yLeftScale(d.id))
          .style("fill", d => '#42a07e')

        leftLabels = leftLabels
          .data(leftSkills)
          .join(
            (enter) =>
              enter
                .append("text")
                .attr("opacity", 0)
                .transition(t)
                .delay(delay)
                .attr("opacity", d => d.value > 0 ? 1 : 0),
            (update) => update,
            (exit) => exit
          )
          .attr("pointer-events", "none")
          .attr("text-anchor", "end")
          .attr("alignment-baseline", "middle")
          .attr("x", xLeft - labelPadding)
          .attr("y", d => yLeftScale(d.id))
          .text(d => d.name)

        rightCircles = rightCircles
          .data(rightSkills)
          .join(
            (enter) =>
              enter
                .append("circle")
                .attr("r", 0)
                .transition(t)
                .delay(delay)
                .attr("r", d => d.value > 0 ? 5 : 0),
            (update) => update,
            (exit) => exit
          )
          .attr("cx", xRight)
          .attr("cy", d => yRightScale(d.id))
          .style("fill", d => '#42a07e')

        rightLabels = rightLabels
          .data(rightSkills)
          .join(
            (enter) =>
              enter
                .append("text")
                .attr("opacity", 0)
                .transition(t)
                .delay(delay)
                .attr("opacity", d => d.value > 0 ? 1 : 0),
            (update) => update,
            (exit) => exit
          )
          .attr("pointer-events", "none")
          .attr("text-anchor", "start")
          .attr("alignment-baseline", "middle")
          .attr("x", xRight + labelPadding)
          .attr("y", d => yRightScale(d.id))
          .text(d => d.name)
      };

      update();
    }

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
