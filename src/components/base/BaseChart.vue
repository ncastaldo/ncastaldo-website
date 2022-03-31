<script>
import { ref } from "vue";
import { useSizeProps } from "../../composables/svg";

export default {
  props: {
    ...useSizeProps(),
  },
  setup() {
    const template = ref(null);

    return { template };
  },
};
</script>

<template>
  <svg ref="template" :viewBox="`0 0 ${width} ${height}`"></svg>
</template>
