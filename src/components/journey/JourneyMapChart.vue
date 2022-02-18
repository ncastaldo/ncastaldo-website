<script>
import { onMounted, ref, computed, watch } from "vue";
import { useStore } from "vuex";

import { geoMercator, geoPath } from "d3-geo";
import { zoom, zoomIdentity } from "d3-zoom";
import { select } from "d3-selection";
import { feature } from "topojson-client";
import { lineString } from "@turf/turf";

const MAP_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default {
  setup() {
    const [width, height] = [600, 300];

    const svgRef = ref(null);

    const store = useStore();
    const location = computed(() => store.getters.getLocation);
    const locations = computed(() => store.getters.getLocations);

    const setLocationId = (locationId) =>
      store.dispatch("setLocationId", locationId);

    const chartViewPoint = computed(() => [
      location.value.long,
      location.value.lat,
    ]);
    const chartLocations = computed(() =>
      locations.value.map((d) => ({
        id: d.id,
        point: [d.long, d.lat],
        current: location.value === d,
      }))
    );

    const chartFeature = ref(null);

    const useChart = (selection) => {
      const projection = geoMercator();
      const path = geoPath().projection(projection);

      const colorScale = (d) => (d.current ? "#42a07e" : "#bbb");

      const g = selection.append("g");

      let map = g.append("g").selectAll("path");
      let points = g.append("g").selectAll("circle");

      const zoomed = ({ transform }) => {
        g.attr("transform", transform);
      };

      const zoomBehavior = zoom().scaleExtent([1, 20]).on("zoom", zoomed);

      const updateMap = () => {
        projection.fitSize([width, height], chartFeature.value);

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
      };

      const updateZoom = (firstDraw) => {
        const [x, y] = projection(chartViewPoint.value);
        const scale = 20;

        const target = !firstDraw
          ? selection.transition().duration(750)
          : selection;

        target.call(
          zoomBehavior.transform,
          zoomIdentity
            .translate(width / 2, height / 2)
            .scale(scale)
            .translate(-x, -y)
        );
      };

      const updatePoints = () => {
        points = points
          .data(chartLocations.value)
          .join(
            (enter) =>
              enter
                .append("circle")
                .attr("opacity", 0)
                .attr("fill", colorScale)
                .transition()
                .attr("opacity", 1),
            (update) => update.transition().attr("fill", colorScale),
            (exit) => exit.transition().attr("opacity", 0).remove()
          )
          .attr("cx", (d) => projection(d.point)[0])
          .attr("cy", (d) => projection(d.point)[1])
          .attr("r", 6 / 20)
          .attr("vector-effect", "non-scaling-size")
          .style("cursor", "pointer")
          .on("click", (event, d) => setLocationId(d.id));
      };

      updateMap();
      updateZoom(true);
      updatePoints();

      watch(chartFeature, updateMap);
      watch(chartViewPoint, () => {
        updateZoom(false);
        updatePoints();
      });
    };

    onMounted(async () => {
      const mapTopojson = await fetch(MAP_URL).then((d) => d.json());

      chartFeature.value = feature(mapTopojson, mapTopojson.objects.countries);

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
  <svg
    id="journey-map-chart"
    ref="svgRef"
    :viewBox="`0 0 ${width} ${height}`"
  ></svg>
</template>
