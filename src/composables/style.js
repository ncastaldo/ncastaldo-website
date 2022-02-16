import { onMounted, ref } from "vue";

export const useFontSize = (el) => {
  const fontSize = ref(undefined);

  onMounted(() => {
    const fontSizeString = window
      .getComputedStyle(el.value, null)
      .getPropertyValue("font-size");

    fontSize.value = parseInt(fontSizeString);
  });

  return { fontSize };
};
