<script>
</script>

<template>
  <div>
    <img class="about-image static" src="/assets/img/nc.jpeg" />
    <img class="about-image active" src="/assets/img/nc.gif" />
  </div>
</template>

<style>
.about-image-container {
  max-width: 30rem;
}

.about-image {
  max-width: 30rem;
  object-fit: contain;
}

.static {
  position: absolute;
  background: white;
}

.static:hover {
  opacity: 0;
}
</style>