<script>
import BaseTooltip from "../base/BaseTooltip.vue";
import BaseMapChart from "../base/BaseMapChart.vue";
export default {};
</script>

<template>
  <div class="about-description">
    <p>
      Hi, welcome to my personal website! My name is Nicola Castaldo and I come
      from Udine, Italy.
      <!--BaseTooltip>
        <template #source>Udine, Italy</template>
        <template #target
          ><BaseMapChart :geo-point="[13.224, 46.068]"
        /></template>
      </BaseTooltip-->
    </p>
    <p>
      I am a curious person and I always try to put passion in what I do. As a
      child, I used to play a lot with the LEGO pecies to create everyday a new
      building. I chose to study and work in the Computer Science field because
      for me it's just like playing LEGO: with my hands I can make awesome
      things everyday.
    </p>
    <p>
      If you scroll down a bit, you can find some information about my
      <b>Skills</b>, my professional and academic <b>Journey</b>, as well as the
      details of some <b>Projects</b> that I worked on.
    </p>
  </div>
</template>

<style>
.about-description {
  font-size: 1.6rem;
  padding: 3rem 0;
}

.about-description p {
  padding-bottom: 0.4rem;
}
</style>
