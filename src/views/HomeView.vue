<script setup lang="ts"></script>

<template>
  <!-- Hero -->
  <section id="hero w-full">
    <div
      class="grid grid-cols-[1fr,1fr] h-screen background justify-center content-center items-center"
    >
      <div class="flex flex-col justify-center content-center items-center">
        <h1 class="text-7xl font-bold text-mcj-red my-3">MCJabko.cz</h1>
        <h2 class="text-6xl font-semibold text-yellow-300 my-3">
          Vanilla Network
        </h2>
        <button class="btn-red my-3">mc.mcjabko.cz</button>
      </div>
      <div class="flex flex-col justify-center content-start items-start"></div>
    </div>
  </section>

  <!-- Why Us -->
  <section id="whyus">
    <div className="m-10">
      <div className="my-6">
        <h3 className="text-4xl font-bold text-white text-center">
          <span className="text-mcj-red">3 důvody</span> proč si vybrat zrovna
          nás?
        </h3>
      </div>
      <div className="grid lg:grid-cols-3 auto-rows-auto gap-10">
        <div
          className="p-4 rounded-2xl text-white bg-mcj-red bg-opacity-40 shadow-lg"
        >
          <i class="icon-data icon-xl my-10 mx-auto"></i>
          <h4 className="text-3xl font-bold text-center">Vždy online</h4>
          <p className="text-xl">
            Všechny herní servery provozujeme v Praze na vlastním HW a
            garantujeme minimální dostupnost 99,8%
          </p>
        </div>
        <div
          className="p-4 rounded-2xl text-white bg-mcj-red bg-opacity-40 shadow-lg"
        >
          <i class="icon-lock-unlock icon-xl my-10 mx-auto"></i>
          <h4 className="text-3xl font-bold text-center">Vždy online</h4>
          <p className="text-xl">
            Všechny herní servery provozujeme v Praze na vlastním HW a
            garantujeme minimální dostupnost 99,8%
          </p>
        </div>
        <div
          className="p-4 rounded-2xl text-white bg-mcj-red bg-opacity-40 shadow-lg"
        >
          <i class="icon-select icon-xl my-10 mx-auto"></i>
          <h4 className="text-3xl font-bold text-center">Máš na výběr</h4>
          <p className="text-xl">
            Ačkoliv nabízíme jen servery zaměřené na Semi-Vanillu a Vanillu
            můžeš si vybrat.
          </p>
        </div>
      </div>
    </div>
    <!-- -->
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
</style>
