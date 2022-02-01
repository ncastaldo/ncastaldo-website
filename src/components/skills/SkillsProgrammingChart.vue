<script>
import { onMounted, ref } from "vue";

import skillsConfig from "../../assets/config/skillsConfig2.json";

import { scaleLinear, scaleBand } from "d3-scale";
import { select } from "d3-selection";
import { transition } from "d3-transition";

export default {
  setup() {
    const [width, height] = [300, 120];
    const padding = { top: 10, right: 30, bottom: 10, left: 100 };

    const skills = skillsConfig.programming;

    const fullSkills = skills.map((d) => ({ ...d, value: 10 }));

    const x = padding.left;
    const rx = 10;

    const labelPadding = 15;

    const xScale = scaleLinear()
      .domain([1, 10])
      .range([0, width - padding.right - padding.left]);

    const yScale = scaleBand()
      .domain(skills.map((d) => d.id))
      .range([padding.top, height - padding.bottom])
      .paddingInner(0.4);

    const svgRef = ref(null);

    const useChart = (selection) => {
      let backgroundBars = selection.append("g").selectAll("rect");
      let bars = selection.append("g").selectAll("rect");
      let labels = selection.append("g").selectAll("rect");

      // updates

      const update = () => {
        const t = transition().duration(500);
        const delay = (_, i) => i * 100;

        backgroundBars = backgroundBars
          .data(fullSkills)
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
          .attr("x", x)
          .attr("rx", rx)
          .attr("width", (d) => xScale(d.value))
          .attr("y", (d) => yScale(d.id))
          .attr("height", (d) => yScale.bandwidth())
          .style("fill", (d) => "#ccc");

        bars = bars
          .data(skills)
          .join(
            (enter) =>
              enter
                .append("rect")
                .attr("width", 0)
                .transition(t)
                .delay(delay)
                .attr("width", (d) => xScale(d.value)),
            (update) => update,
            (exit) => exit
          )
          .attr("x", x)
          .attr("rx", rx)
          .attr("y", (d) => yScale(d.id))
          .attr("height", (d) => yScale.bandwidth())
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
          .attr("text-anchor", "end")
          .attr("alignment-baseline", "middle")
          .attr("x", x - labelPadding)
          .attr("y", (d) => yScale(d.id) + yScale.bandwidth() / 2)

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
  <svg ref="svgRef" :viewBox="`0 0 ${width} ${height}`" style="max-width: 400px" />
</template>
