<script>
import BaseSection from "../base/BaseSection.vue";
import SkillsProgrammingChart from "./SkillsProgrammingChart.vue";
import SkillsSoftwareChart from "./SkillsSoftwareChart.vue";
import BaseSubsection from "../base/BaseSubsection.vue";

import skillsLibraryConfig from "../../assets/config/skillsLibraryConfig.json";

export default {
  components: {
    BaseSection,
    SkillsProgrammingChart,
    SkillsSoftwareChart,
    BaseSubsection,
  },
  setup() {
    return {
      skillsLibraryConfig,
    };
  },
};
</script>

<template>
  <BaseSection>
    <template #title>Skills</template>
    <template #default>
      <div class="skills-subsection-content">
        <BaseSubsection class="skills-subsection-chart">
          <template #title>Programming</template>
          <template #default>
            <SkillsProgrammingChart />
          </template>
        </BaseSubsection>
        <BaseSubsection class="skills-subsection-chart">
          <template #title>Software</template>
          <template #default>
            <SkillsSoftwareChart />
          </template>
        </BaseSubsection>
        <BaseSubsection
          v-for="partition in skillsLibraryConfig"
          :key="partition.id"
          class="skills-subsection-libraries"
        >
          <template #title>{{ partition.name }}</template>
          <template #default>
            <div class="skills-subsection-libraries-content">
              <div
                v-for="library in partition.libraries"
                :key="library.id"
                class="library"
              >
                {{ library.name }}
              </div>
            </div>
          </template>
        </BaseSubsection>
      </div>
    </template>
  </BaseSection>
</template>

<style>
.skills-subsection-content {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));

  gap: 1rem;
}

.skills-subsection-chart {
  grid-column: span 3;
}

.skills-subsection-libraries {
  grid-column: span 2;
}

.skills-subsection-libraries-content {
  display: flex;
  flex-wrap: wrap;
  column-gap: 0.6rem;
  row-gap: 0.6rem;
}
</style>
