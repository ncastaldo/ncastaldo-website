import { select } from "d3-selection";
import { onMounted, ref } from "vue";

export const useChart = (el) => {
  const selection = ref(null);

  onMounted(() => {
    selection.value = select(el.value);
  });

  return { selection };
};
