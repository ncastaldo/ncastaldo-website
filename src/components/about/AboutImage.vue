<script></script>

<template>
  <div class="about-image-container">
    <img class="about-image static" src="/assets/img/about/nc_2.png" />
    <img class="about-image" src="/assets/img/about/nc_loop.gif" />
  </div>
</template>

<style scoped>
.about-image-container {
  margin: 0 auto;
}
.about-image {
  text-align: center;
  min-height: 30rem;
  max-width: 30rem;
  max-width: 30rem;
  border-radius: 15rem;
  object-fit: contain;
}

.about-image.static {
  position: absolute;
}
.about-image.static:hover {
  opacity: 0;
}
</style>
