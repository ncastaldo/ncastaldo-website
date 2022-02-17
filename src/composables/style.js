import { computed, onMounted, ref, unref } from "vue";

export const useStyle = (el) => {
  const style = ref(undefined);

  onMounted(() => {
    style.value = window.getComputedStyle(el.value, null);
  });

  return { style };
};

export const useProperty = (el, name) => {
  const propertyName = unref(name);

  const { style } = useStyle(el);

  const property = computed(() =>
    style.value !== undefined
      ? style.value.getPropertyValue(propertyName)
      : undefined
  );

  return { property };
};
