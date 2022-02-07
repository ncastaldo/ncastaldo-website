<script></script>

<template>
  <div class="about-image-container">
    <img class="about-image static" src="/assets/img/about/nc.jpeg" />
    <img class="about-image active" src="/assets/img/about/nc_loop.gif" />
  </div>
</template>

<style>
.about-image-container {
  text-align: center;
}

.about-image {
  max-width: 30rem;
  object-fit: contain;
}

.static {
  position: absolute;
}
.static:hover {
  opacity: 0;
}
</style>
