
<script>
import { onMounted, ref } from "vue";

import skillsConfig from "../../assets/config/skillsConfig2.json";


import { scaleLinear, scaleBand } from "d3-scale";
import { select } from "d3-selection";
import { transition } from 'd3-transition'
import { axisLeft } from 'd3-axis'

export default {
  setup() {

    const [width, height] = [500, 200];
    const padding = { top: 10, right: 30, bottom: 30, left: 60 };

    const skills = skillsConfig.programming

    const fullSkills = skills.map(d => ({ ...d, value: 10 }))

    const xScale = scaleLinear()
      .domain([0, 10])
      .range([padding.left, width - padding.right - padding.left])

    const yScale = scaleBand()
      .domain(skills.map(d => d.id))
      .range([padding.top, height - padding.bottom])
      .paddingInner(0.2)

    const yAxis = axisLeft().scale(yScale);

    const svgRef = ref(null);

    const useChart = (selection) => {

      selection
        .append("g")
        .call(yAxis)
        .attr("transform", `translate(${padding.left}, 0)`);

      selection
        .append("g")
        .selectAll("rect")
        .data(fullSkills)
        .join("rect")
        .attr("x", d => xScale.range()[0])
        .attr("width", d => xScale(d.value))
        .attr("y", d => yScale(d.id))
        .attr("height", d => yScale.bandwidth())
        .style("fill", d => '#bbb')

      let bars = selection.append('g').selectAll("rect");

      // updates

      const update = () => {
        const t = transition()
          .duration(500)

        bars = bars
          .data(skills)
          .join(
            (enter) =>
              enter
                .append("rect")
                .attr("width", 0)
                .transition(t)
                .delay((_, i) => i * 250)
                .attr("width", d => xScale(d.value)),
            (update) => update,
            (exit) => exit
          )
          .join("rect")
          .attr("x", d => xScale.range()[0])
          .attr("y", d => yScale(d.id))
          .attr("height", d => yScale.bandwidth())
          .style("fill", d => '#42a07e')

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
  <svg ref="svgRef" :viewBox="`0 0 ${width} ${height}`" style="max-width: 600px" />
</template>
