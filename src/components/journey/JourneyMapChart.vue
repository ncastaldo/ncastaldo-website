<script>
import { onMounted, ref, computed, watch } from "vue";
import { useStore } from "vuex";

import { geoMercator, geoPath } from "d3-geo";
import { zoom, zoomIdentity } from "d3-zoom";
import { select } from "d3-selection";
import { feature } from "topojson-client";
import { lineString } from '@turf/turf'

const MAP_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default {
  setup() {
    const [width, height] = [600, 300];

    const svgRef = ref(null);

    const store = useStore();
    const location = computed(() => store.getters.getLocation);
    const activeLocations = computed(() => store.getters.getActiveLocations);
    const activeRoutes = computed(() => store.getters.getActiveRoutes);

    const chartViewPoint = computed(() => [location.value.long, location.value.lat]);
    const chartPoints = computed(() => activeLocations.value
      .map(d => [d.long, d.lat]))
    const chartRoutes = computed(() => activeRoutes.value
      .map(({ fromLocation, toLocation }) => lineString([
        [fromLocation.long, fromLocation.lat],
        [toLocation.long, toLocation.lat]
      ])));
    const chartFeature = ref(null);

    const useChart = (selection) => {
      const projection = geoMercator();
      const path = geoPath().projection(projection);

      const g = selection.append('g')

      let map = g.append("g").selectAll("path");
      let routes = g.append("g").selectAll("path");
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

        const target = firstDraw
          ? selection.transition().duration(750) : selection

        target.call(
          zoomBehavior.transform,
          zoomIdentity
            .translate(width / 2, height / 2)
            .scale(scale)
            .translate(-x, -y)
        );
      };

      const updateRoutes = () => {
        routes = routes.data(chartRoutes.value)
          .join(
            enter => enter.append('path')
              .attr('opacity', 0)
              .transition()
              .attr('opacity', 1),
            update => update,
            exit => exit
              .transition()
              .attr('opacity', 0)
              .remove()
          )
          .attr('d', path)
          .attr('stroke-width', 4)
          .attr("vector-effect", "non-scaling-stroke")
          .attr('stroke', '#888')

        points = points.data(chartPoints.value)
          .join(
            enter => enter.append('circle')
              .attr('opacity', 0)
              .attr('fill', (d, i, array) => i == array.length - 1 ? '#49b787' : '#888')
              .transition()
              .attr('opacity', 1),
            update => update
              .transition()
              .attr('fill', (d, i, array) => i == array.length - 1 ? '#49b787' : '#888'),
            exit => exit
              .transition()
              .attr('opacity', 0)
              .remove()
          )
          .attr('cx', d => projection(d)[0])
          .attr('cy', d => projection(d)[1])
          .attr('r', 6 / 20)
          .attr("vector-effect", "non-scaling-size")
      }

      updateMap();
      updateZoom();
      updateRoutes();

      watch(() => chartFeature.value, updateMap);
      watch(() => chartViewPoint.value, updateZoom);
      watch(() => chartRoutes.value, updateRoutes);
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
  <svg ref="svgRef" :viewBox="`0 0 ${width} ${height}`" />
</template>
