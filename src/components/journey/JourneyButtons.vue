<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const canMoveBack = computed(() => store.getters.canMoveBack);
    const canMoveOn = computed(() => store.getters.canMoveOn);

    const moveBack = () => store.commit("moveBack");
    const moveOn = () => store.commit("moveOn");

    return {
      canMoveBack,
      canMoveOn,
      moveBack,
      moveOn,
    };
  },
};
</script>

<template>
  <div class="button-container">
    <button class="button" :disabled="!canMoveBack" @click="moveBack">
      <fa icon="angle-left" />
    </button>
    <button class="button" :disabled="!canMoveOn" @click="moveOn">
      <fa icon="angle-right" />
    </button>
  </div>
</template>

<style scoped>
.button-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.button {
  padding: 0.2rem 0.5rem 0.2rem 0.5rem;
  margin-right: 0.2rem;
  margin-left: 0.2rem;
}
</style>