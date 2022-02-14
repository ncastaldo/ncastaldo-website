<script>
import {
  computed,
  nextTick,
  onMounted,
  ref,
  toRefs,
  watch,
  watchEffect,
} from "vue";

import { geoMercator, geoPath } from "d3-geo";
import { zoom, zoomIdentity } from "d3-zoom";
import { feature } from "topojson-client";

import { getSizeProps } from "../../plugins/utils";
import { useChart } from "../../composables/chart";
import { useFetch } from "../../composables/fetch";

const MAP_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default {
  props: {
    geoPoint: Array,
    ...getSizeProps(),
  },
  setup(props) {
    const { width, height, geoPoint } = toRefs(props);

    const chartRef = ref(null);

    const { selection } = useChart(chartRef);
    const { data: mapTopojson } = useFetch(MAP_URL);

    const chartFeature = computed(() =>
      mapTopojson.value !== null
        ? feature(mapTopojson.value, mapTopojson.value.objects.countries)
        : undefined
    );

    const chartDrawn = ref(false);

    const draw = (selection) => {
      const projection = geoMercator();
      const path = geoPath().projection(projection);

      const color = "#42a07e";

      const g = selection.append("g");
      let map = g.append("g").selectAll("path");
      let points = g.append("g").selectAll("circle");

      const zoomed = ({ transform }) => {
        g.attr("transform", transform);
      };
      const zoomBehavior = zoom().scaleExtent([1, 20]).on("zoom", zoomed);

      const update = () => {
        projection.fitSize([width.value, height.value], chartFeature.value);

        map = map
          .data([chartFeature.value])
          .join("path")
          .attr("fill", "#eee")
          .attr("stroke", "#023858")
          .attr("stroke-width", 0.5)
          .attr("vector-effect", "non-scaling-stroke")
          .style("pointer-events", "none")
          .attr("d", path)
          .attr("opacity", 0)
          .transition()
          .attr("opacity", 1);

        const [x, y] = projection(geoPoint.value);

        const scale = 20;
        const target = selection.transition().duration(2000);
        target.call(
          zoomBehavior.transform,
          zoomIdentity
            .translate(width.value / 2, height.value / 2)
            .scale(scale)
            .translate(-x, -y)
        );

        points = points
          .data([[x, y]])
          .join("circle")
          .attr("fill", color)
          .attr("cx", (d) => d[0])
          .attr("cy", (d) => d[1])
          .attr("r", 6 / 20)
          .attr("vector-effect", "non-scaling-size");
      };

      update();
    };

    watchEffect(() => {
      if (chartFeature.value !== undefined && selection.value !== undefined) {
        selection.value.call(draw);

        nextTick(() => {
          chartDrawn.value = true;
        });
      }
    });

    return {
      width,
      height,
      chartRef,
      chartDrawn,
    };
  },
};
</script>

<template>
  <svg
    v-show="chartDrawn"
    ref="chartRef"
    dis
    :viewBox="`0 0 ${width} ${height}`"
  />
</template>
