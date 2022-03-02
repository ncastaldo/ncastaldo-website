<script>
import { computed, onMounted, onUnmounted, toRefs, watch } from "vue";

import { timeFormat } from "d3-time-format";
import BaseItem from "../base/BaseItem.vue";
import BaseLogo from "../base/BaseLogo.vue";
import BaseDescription from "../base/BaseDescription.vue";

import journey from "../../store/journey";

export default {
  components: { BaseItem, BaseLogo, BaseDescription },
  props: {
    current: Boolean,
  },
  setup(props) {
    const { current } = toRefs(props);

    const format = timeFormat("%B %Y");

    // const journey = inject("journey");

    const marginTop = 100;

    const periods = journey.getPeriods();
    const currentPeriod = computed(journey.getPeriod);

    const programmaticScrolling = computed({
      get: journey.isProgrammaticScrolling,
      set: journey.setProgrammaticScrolling,
    });

    const periodsRefs = {};
    const setPeriodRef = (ref) => {
      periodsRefs[ref.dataset.periodId] = ref;
    };

    let allEntries = [];

    const observerCallback = (entries) => {
      if (allEntries.length === 0) {
        allEntries = entries;
      } else {
        let j = 0;
        entries.forEach((entry) => {
          while (entry.target !== allEntries[j].target) {
            j += 1;
          }
          allEntries[j] = entry;
        });
      }

      const entry = allEntries.filter((entry) => entry.isIntersecting).pop();

      if (entry !== undefined && !programmaticScrolling.value) {
        journey.setPeriodId(entry.target.dataset.periodId);
      }
    };
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5,
      rootMargin: `-${marginTop}px 0px 0px`,
    });

    const getPeriodInterval = (period) =>
      period.fromDate
        ? `${format(period.fromDate)} - ${format(period.toDate)}`
        : format(period.toDate);

    onMounted(() => {
      Object.values(periodsRefs).forEach((target) => observer.observe(target));

      watch(currentPeriod, (currentPeriod) => {
        if (programmaticScrolling.value) {
          const rect = periodsRefs[currentPeriod.id].getBoundingClientRect();

          window.scrollTo(0, rect.top + window.scrollY - marginTop);
          programmaticScrolling.value = false;
        }
      });
    });

    onUnmounted(() => {
      observer.disconnect();
    });

    return {
      periods,
      getPeriodInterval,
      setPeriodRef,
      currentPeriod,
    };
  },
};
</script>

<template>
  <div
    v-for="period in periods"
    :key="period.id"
    :ref="setPeriodRef"
    :data-period-id="period.id"
  >
    <BaseItem>
      <template #logo>
        <BaseLogo
          :src="period.detail.logo"
          :current="currentPeriod === period"
        />
      </template>
      <template #default>
        <BaseDescription
          :title="period.detail.title"
          :subtitle="period.detail.place"
          :caption="getPeriodInterval(period)"
          :content="period.detail.achievements"
          :current="currentPeriod === period"
        />
      </template>
    </BaseItem>
  </div>
  <div class="test-class">
    <p>
      I work as a <b>Technical Analyst</b> in the
      <i>Geocall Product Development Group</i> at <i>OverIT</i>.
    </p>
    <p>In particular:</p>
    <ul>
      <li>
        I perform in-depth <b>technical analysis</b> of data, business logic and
        view layers of the existing software solution
      </li>
      <li>
        I work closely with business analysts to <b>define</b> the
        <b>requirements</b> of new software functionalities to be integrated in
        the <i>Product</i>
      </li>
      <li>
        I collaborate with the development teams to <b>design</b> the data and
        object models, process flows, user experience, page layouts and system
        integration structures based on <i>SOAP</i> and <i>REST</i>
      </li>
      <li>
        I define and distribute <b>development tasks</b> among the developers
        and I carry on <b>code reviews</b> on their outputs
      </li>
      <li>
        I test and improve technical documents and conduct
        <b>practical sessions</b> with international partners to technically
        introduce them to the <i>Product</i>
      </li>
    </ul>
  </div>
  <div class="test-class">
    <p>
      I worked as a <b>Software and Data Engineer</b> - formally
      <i>Technologist</i> - in the <i>CoMuNe Lab</i> at <i>FBK</i>, an
      interdisciplinary team focused on the research of
      <b>Complex Multilayer Networks</b>.
    </p>
    <p>About me and this job:</p>
    <ul>
      <li>
        I designed and developed scalable
        <b>processing pipelines</b> to analyze, integrate and efficiently store
        data coming from multiple sources and in different formats
      </li>
      <li>
        I had the opportunity to study and put in practice
        <b>data visualization</b> techniques in particular for the Web
        development, exploiting open source libraries (such as <b>D3</b> and
        <b>Leaflet</b>) to create dynamic and interactive charts
      </li>
      <li>
        I experimented and applied different full-stack development
        technologies, using both SQL and NoSQL databases, web back-end
        frameworks and front-end libraries
      </li>
      <li>
        I collaborated to different research projects that resulted in
        scientific papers, applying Data Science techniques and State-of-the-Art
        AI technologies
      </li>
      <li>
        I designed and developed a web full-stack application to process, store
        and dynamically visualize NLP analyzed text data with interactive charts
        and maps
      </li>
      <li>
        I designed and configured a cloud infrastructure to host different
        interconnected Linux based VMs for high computing tasks
      </li>
    </ul>
  </div>
  <div class="test-class">
    <p>
      I participated in the Erasmus+ programme and I stayed for five months in
      Valencia, Spain. I studied at the
      <i>Universitat Politècnica de València</i> where I followed both
      theoretical and practical courses related to:
    </p>
    <ul>
      <li>Network Design and Maintainance</li>
      <li>Data Bases Design and Management</li>
      <li>VPN and Tunelling</li>
      <li>Data Structures and Algorithms</li>
    </ul>
    <p>
      I enjoyed this period in Spain also because it was challenging! I had to
      study and take the exams in Spanish, a language didn't know at the
      beginning, and I had to change my <i>study method</i> in order to achieve
      good results in the Spanish academic system that is focused on
      <i>continuous assessment</i> and lots of practical sessions.
    </p>
  </div>
  <div class="test-class">
    <p>
      I moved from Udine, my hometown, to Milano and there I started my
      university studies at the <i>Politecnico di Milano</i>, choosing
      <b>Computer Science and Engineer</b> - formally
      <i>Ingegneria Informatica</i> - as Bachelor Degree.
    </p>
    <p>
      During these years I had the opportunity to study subjects related to
      different areas, spanning from Maths and Physics, to Computer Science,
      Electronics and Industrial Engineering.
    </p>
    <p>
      For the final, in a team with other colleagues, we designed and developed
      a Java-based digital version of a board game that could be played in
      multiplayer mode from different machines.
    </p>
  </div>
</template>

<style scoped>
.test-class {
  font-size: 1.6rem;
  margin-bottom: 3rem;
}

.test-class > ul {
  list-style: circle;
  padding-left: 2rem;
}
</style>
