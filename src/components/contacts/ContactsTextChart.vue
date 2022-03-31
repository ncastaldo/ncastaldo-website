<script>
import { computed, onMounted, ref, toRefs, watchEffect } from "vue";

import { select } from "d3-selection";
import { shuffle } from "d3-array";

export default {
  props: {
    height: {
      type: Number,
      default: 40,
    },
    text: {
      type: String,
      default: "example",
    },
    ordered: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { height, text, ordered } = toRefs(props);

    const svgRef = ref(null);

    const orderedLetters = computed(() =>
      text.value.split("").map((d, i) => ({
        letter: d,
        key: i,
        pos: i,
        color: "#42a07e",
      }))
    );

    const letters = computed(() =>
      ordered.value === true
        ? [...orderedLetters.value]
        : shuffle(orderedLetters.value).map((d, i) => ({
            ...d,
            pos: i,
            color: "#888",
          }))
    );

    const fontSize = height.value * 0.7;

    const letterWidth = fontSize * 0.7;

    const width = letters.value.length * letterWidth;

    const useChart = (selection) => {
      let texts = selection
        .append("g")
        .attr("transform", `translate(0, ${fontSize})`)
        .style("font-size", fontSize)
        .classed("contacts-text-chart-text", true)
        .selectAll("text");

      const update = (data) => {
        texts = texts
          .data(data, (d) => d.key)
          .join(
            (enter) =>
              enter
                .append("text")
                .attr("x", (d) => d.pos * letterWidth)
                .attr("fill", (d) => d.color),
            (update) =>
              update
                .transition()
                .duration(500)
                .attr("x", (d) => d.pos * letterWidth)
                .attr("fill", (d) => d.color),
            (exit) => exit
          )
          .text((d) => d.letter);
      };

      watchEffect(() => {
        update(letters.value);
      });
    };

    onMounted(() => {
      select(svgRef.value).call(useChart);
    });

    return {
      svgRef,
      width,
    };
  },
};
</script>

<template>
  <svg
    ref="svgRef"
    class="contacts-text-chart-svg"
    :width="width"
    :height="height"
  ></svg>
</template>

<style scoped>
.contacts-text-chart-svg {
  font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono,
    DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
}
</style>
