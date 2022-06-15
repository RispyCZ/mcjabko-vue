<template>
  <!-- Hero -->
  <section id="hero" class="background p-5">
    <div class="grid grid-cols-[1fr,1fr] h-screen justify-center content-center items-center">
      <div class="flex flex-col justify-center content-center items-center">
        <div class="text-background p-10 rounded-lg">
          <h1 class="text-5xl font-bold text-mcj-red my-3">MCJabko.cz</h1>
          <p class="text-2xl font-semibold my-5 text-yellow-300">Sít Semi-Vanilla a Vanilla serverů již od roku 2017</p>
          <button class="btn-red my-3">mc.mcjabko.cz</button>
        </div>
      </div>
      <div class="flex flex-col justify-center content-start items-start"></div>
    </div>
  </section>
</template>

<style scoped>
.background {
  background-image: url("https://cdn.mcjabko.cz/images/header.png");
  background-color: #3322;
  background-position: top center;
  background-blend-mode: soft-light;
  background-attachment: fixed;
}

.text-background {
  background-color: rgba(255, 255, 255, .1);
}
</style>

<script setup lang="ts">
</script>