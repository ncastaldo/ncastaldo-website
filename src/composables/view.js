import { onMounted, ref } from "vue";

import { useDebounceFn, useEventListener } from "@vueuse/core";

export const useContainerSize = (target, { debounce = 250 } = {}) => {
  const height = ref(0);
  const width = ref(0);

  const updateSize = () => {
    const rect = target.value.getBoundingClientRect();
    width.value = rect.width;
    height.value = rect.height;
  };

  useEventListener(window, "resize", useDebounceFn(updateSize, debounce));

  onMounted(() => {
    updateSize();
  });

  return {
    width,
    height,
  };
};
