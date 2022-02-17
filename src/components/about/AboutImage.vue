<script></script>

<template>
  <div class="about-image-container">
    <img class="about-image static" src="/assets/img/about/nc_2.png" />
    <img class="about-image active" src="/assets/img/about/nc_loop.gif" />
  </div>
</template>

<style>
.about-image-container {
  text-align: center;
  padding: 1rem;
}

.about-image {
  width: 30rem;
  height: 30rem;
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
