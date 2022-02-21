<script>
import { computed, toRefs } from "vue";

export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    size: {
      type: Number,
      default: 1.6,
    },
  },
  setup(props) {
    const mul = 1;

    const { size } = toRefs(props);

    const fontSize = computed(() => (size.value * mul) / 1 + "rem");
    const borderRadius = computed(() => (size.value * mul) / 1 + "rem");

    return { fontSize, borderRadius };
  },
};
</script>

<template>
  <div class="base-library" :style="{ fontSize, borderRadius }">
    {{ label }}
  </div>
</template>

<style scoped>
.base-library {
  padding: 0.3rem 0.9rem;
  font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono,
    DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
  font-weight: 200;
  border: solid 0.1rem #ccc;
  background: #f4f4f4;
}
</style>
