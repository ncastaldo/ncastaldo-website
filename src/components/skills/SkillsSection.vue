<script setup>
import BaseSection from "../base/BaseSection.vue";
import SkillsProgrammingChart from "./SkillsProgrammingChart.vue";
import SkillsSoftwareChart from "./SkillsSoftwareChart.vue";
import BaseSubsection from "../base/BaseSubsection.vue";
import SkillsLibrarySubsections from "./SkillsLibrarySubsections.vue";
</script>

<template>
  <BaseSection style="background-color: #eeeeee">
    <template #title>Skills</template>
    <template #default>
      <div class="skills-subsection-charts">
        <BaseSubsection>
          <template #title>Programming</template>
          <template #default>
            <SkillsProgrammingChart />
          </template>
        </BaseSubsection>
        <BaseSubsection>
          <template #title>Software</template>
          <template #default>
            <SkillsSoftwareChart />
          </template>
        </BaseSubsection>
      </div>
      <div class="skills-subsection-libraries">
        <SkillsLibrarySubsections />
      </div>
    </template>
  </BaseSection>
</template>

<style>
.skills-subsection-charts {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.skills-subsection-libraries {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
}
</style>
