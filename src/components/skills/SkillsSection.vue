<script>
import BaseSection from "../base/BaseSection.vue";
import SkillsProgrammingChart from "./SkillsProgrammingChart.vue";
import SkillsSoftwareChart from "./SkillsSoftwareChart.vue";
import BaseSubsection from "../base/BaseSubsection.vue";

import skillsLibraryConfig from "../../assets/config/skillsLibraryConfig.json";
import BaseLibrary from "../base/BaseLibrary.vue";

export default {
  components: {
    BaseSection,
    SkillsProgrammingChart,
    SkillsSoftwareChart,
    BaseSubsection,
    BaseLibrary,
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
            <SkillsProgrammingChart :height="200" />
          </template>
        </BaseSubsection>
        <BaseSubsection class="skills-subsection-chart">
          <template #title>Software</template>
          <template #default>
            <SkillsSoftwareChart :height="200" />
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
              <BaseLibrary
                v-for="library in partition.libraries"
                :key="library.id"
                :label="library.name"
              >
              </BaseLibrary>
            </div>
          </template>
        </BaseSubsection>
      </div>
    </template>
  </BaseSection>
</template>

<style scoped>
.skills-subsection-content {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  padding: 3rem 3rem;

  gap: 1rem;
}

.skills-subsection-chart {
  margin: auto 0;
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

@media (max-width: 720px) {
  .skills-subsection-chart,
  .skills-subsection-libraries {
    grid-column: span 6;
  }
}
</style>
