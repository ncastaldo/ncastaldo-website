<script>
import {
  computed,
  onBeforeMount,
  onMounted,
  ref,
  toRefs,
  watch,
  watchEffect,
} from "vue";

import opentype from "opentype.js";

import { select, pointer } from "d3-selection";
import { shuffle } from "d3-array";
import { forceSimulation, forceManyBody, forceX, forceY } from "d3-force";

const FONT_URL = import.meta.env.BASE_URL + "assets/fonts/register.ttf";

export default {
  props: {
    height: {
      type: Number,
      default: 40,
    },
  },
  setup(props) {
    const { height } = toRefs(props);

    const fontSize = height.value * 0.6;

    const initialDelay = 200;
    const transitionDuration = 2400;

    // manage this class, use computed and watched properties for size

    const text = "@ncastaldo";

    const textHeight = fontSize;
    const textWidth = (text.length * fontSize * 2) / 3;

    const width = textWidth * 1.2;

    const color = "#42a07e";

    const canvasRef = ref(null);

    const font = ref(undefined);

    // fetch font
    opentype.load(FONT_URL).then((data) => {
      font.value = data;
    });

    const useChart = (selection) => {
      const context = selection.node().getContext("2d");

      let textNodes = [];

      const ticked = () => {
        context.clearRect(0, 0, width, height.value);
        context.save();

        const nodes = simulation.nodes();

        const targetIndex = nodes.length * timeRatio;

        for (let index = 0; index < targetIndex; index++) {
          const d = nodes[index];

          context.beginPath();
          context.moveTo(d.x, d.y);
          context.arc(d.x, d.y, d.r, 0, 2 * Math.PI);
          context.fillStyle = color;
          context.fill();
        }

        context.restore();
      };

      const simulation = forceSimulation()
        .alphaTarget(0.3) // stay hot: 0.3
        .velocityDecay(0.1) // low friction: 0.1
        .force("x", forceX((d) => d.forceX).strength(0.1))
        .force("y", forceY((d) => d.forceY).strength(0.1))
        .force(
          "charge",
          forceManyBody().strength((d) => ("pointer" in d ? -50 : 0))
        )
        .on("tick", ticked);

      // event listeners

      let pointerNode = { r: 0, pointer: true };

      const onEnter = (event) => {
        const [x, y] = pointer(event);
        pointerNode.fx = x;
        pointerNode.fy = y;
        simulation.nodes([...textNodes, pointerNode]);
      };

      const onMove = (event) => {
        const [x, y] = pointer(event);
        pointerNode.fx = x;
        pointerNode.fy = y;
      };

      const onOut = (event) => {
        simulation.nodes([...textNodes]);
      };

      selection
        .on("touchstart", (event) => {
          onEnter(event);
          event.preventDefault();
        })
        .on("pointerenter", onEnter)
        .on("pointermove", onMove)
        .on("pointerleave", onOut);

      // updates

      let timeout = null;
      let timeRatio = 0;

      const update = ({ font }) => {
        const x = (width - textWidth) / 2;
        const y = height.value / 2 + (textHeight / 100) * 35;

        const path = font.getPath(text, x, y, fontSize);

        textNodes = [];

        let curPath = new opentype.Path();
        for (const command of path.commands) {
          curPath.commands.push(command);
          if (command.type === "Z") {
            const bbox = curPath.getBoundingBox();

            const rBold = 1.7;

            const x = +((bbox.x1 + bbox.x2) / 2).toFixed(3);
            const y = +((bbox.y1 + bbox.y2) / 2).toFixed(3);

            const r =
              +((bbox.x2 - bbox.x1 + bbox.y2 - bbox.y2) / 2).toFixed(3) * rBold;

            const forceX = x;
            const forceY = y;

            textNodes.push({ x, y, r, forceX, forceY });

            curPath = new opentype.Path();
          }
        }

        simulation.nodes(shuffle(textNodes));

        const startTime = Date.now();

        const loopFn = () => {
          if (timeout) {
            clearTimeout(timeout);
          }

          const currentTime = Date.now();
          timeRatio = (currentTime - startTime) / transitionDuration;

          if (timeRatio > 1) {
            timeRatio = 1;
          } else {
            timeout = setTimeout(loopFn, 10);
          }
        };

        if (timeout) {
          clearTimeout(timeout);
        }

        timeout = setTimeout(loopFn, initialDelay);
      };

      watchEffect(() => {
        if (font.value) {
          update({ font: font.value });
        }
      });
    };

    onMounted(() => {
      select(canvasRef.value).call(useChart);
    });

    return {
      width,
      canvasRef,
    };
  },
};
</script>

<template>
  <canvas
    ref="canvasRef"
    class="intro-name-chart-canvas"
    :width="width"
    :height="height"
  />
</template>

<style scoped>
.intro-name-chart-canvas {
  vertical-align: text-bottom;
}
</style>
