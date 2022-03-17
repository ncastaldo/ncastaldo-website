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

export const useClosestRef = (refs = []) => {
  const closestRef = ref(null);

  const onScroll = () => {
    const height = window.innerHeight;

    const maybeClosestRef = refs
      .map((ref) => [ref, ref.getBoundingClientRect()])
      .filter(([_, rect]) => rect.bottom >= 0 && rect.top <= height)
      .map(([ref, rect]) => [ref, Math.min(height - rect.top, rect.bottom)])
      .sort(([_, aDistance], [__, bDistance]) => bDistance - aDistance)
      .map(([ref, _]) => ref)
      .find(() => true);

    closestRef.value = maybeClosestRef ? maybeClosestRef : null;
  };

  useEventListener(document, "scroll", onScroll);

  return closestRef;
};
