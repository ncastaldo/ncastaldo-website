<script setup>
import BaseSection from "../base/BaseSection.vue";
import SkillsChart from "./SkillsChart.vue";
import SkillsProgrammingChart2 from "./SkillsProgrammingChart2.vue";
</script>

<template>
  <BaseSection>
    <template #title>Skills</template>
    <template #default>
      <SkillsChart />
      <SkillsProgrammingChart2 />
    </template>
  </BaseSection>
</template>
