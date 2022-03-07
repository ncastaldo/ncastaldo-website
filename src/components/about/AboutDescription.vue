<script>
import BaseTooltip from "../base/BaseTooltip.vue";
import BaseMapChart from "../base/BaseMapChart.vue";
export default {};
</script>

<template>
  <div class="about-description">
    <p>
      Hi, welcome to my personal website! My name is
      <b>Nicola Castaldo</b> and I come from <b>Udine, Italy</b>.
      <!--BaseTooltip>
        <template #source>Udine, Italy</template>
        <template #target
          ><BaseMapChart :geo-point="[13.224, 46.068]"
        /></template>
      </BaseTooltip-->
    </p>
    <p>
      I am a <b>curious</b> person and I always try to put <b>passion</b> in
      what I do.
    </p>
    <p>
      If you scroll down a bit, you can find some information about my
      <b>Skills</b>, my professional and academic <b>Journey</b> and the details
      of some <b>Projects</b> that I worked on.
    </p>
  </div>
</template>

<style>
.about-description {
  font-size: 1.6rem;
  padding: 3rem 3rem;
}

.about-description p {
  padding-bottom: 0.4rem;
}
</style>
