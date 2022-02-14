<script>
import { ref } from "vue";
import Intersect from "vue-intersect";
export default {
  props: {
    backgroundColor: String,
  },
  setup() {
    const visible = ref(true);
    const show = () => {
      console.log("a");
      visible.value = true;
    };

    return {
      visible,
      show,
    };
  },
};
</script>

<template>
  <section class="section">
    <h2 class="section-title">
      <slot name="title"></slot>
    </h2>

    <div v-if="visible" class="section-content">
      <slot></slot>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 1rem 4rem;
}

.section-title {
  font-size: 3rem;
  margin-top: 3rem;
  margin-bottom: 2rem;
  text-align: center;
}

.section-content {
  margin: 0 auto;
  max-width: 50rem;
}
</style>
