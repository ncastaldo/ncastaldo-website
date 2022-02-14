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
  width: 20rem;
  height: 20rem;
  border-radius: 10rem;
  object-fit: contain;
}

.static {
  position: absolute;
}
.static:hover {
  opacity: 0;
}
</style>
