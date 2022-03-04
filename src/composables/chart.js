import { onMounted, ref } from "vue";

import { useDebounceFn, useEventListener } from "@vueuse/core";

export const useContainerWidth = (target, { debounce = 250 } = {}) => {
  const width = ref(0);

  const updateWidth = () => {
    width.value = target.value.getBoundingClientRect().width;
  };

  useEventListener(window, "resize", useDebounceFn(updateWidth, debounce));

  onMounted(() => {
    updateWidth();
  });

  return width;
};
