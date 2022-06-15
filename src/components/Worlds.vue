<template>
    <!-- Worlds -->
    <section id="worlds" class="background p-5">
        <h3 class='text-4xl font-bold text-center text-yellow-300'>Vyber svět podle tvých představ</h3>
        <p class="text-lg text-yellow-200 text-center">Celý server je rozdělen do tzv. světů, které jsou pro lepší orientaci označny podle barev, stačí si tedy pouze vybrat ten co bude odpovídat tvým předstvám</p>
        <div class="grid lg:grid-cols-[1fr,1fr,1fr] gap-10">
            <WorldsBox v-for="world in worlds" :name="world.name" :features="world.features" :color="world.color" />
        </div>
    </section>
</template>

<style scoped>
.background {
    background-image: url("https://cdn.mcjabko.cz/images/map.png");
    background-color: #111;
    background-attachment: fixed;
    background-blend-mode: soft-light;
}
</style>

<script setup lang="ts">
import WorldsBox from "./WorldsBox.vue";
</script>

<script lang="ts">
type World = { name: string, color: string, features: string[] }
export default {
    data() {
        return {
            worlds: [
                {
                    name: "Zelený svět",
                    color: "text-green-500",
                    features: [
                        "Semi-Vanilla",
                        "Základní přikazy",
                        "Wipe jen pokud je to nutné",
                        "Neomezená mapa"
                    ],
                },
                {
                    name: "Fialový svět",
                    color: "text-purple-500",
                    features: [
                        "Semi-Vanilla",
                        "Základní přikazy",
                        "Wipe každých 6 měsíců",
                        "Neomezená mapa"
                    ],
                },
                {
                    name: "Modrý svět",
                    color: "text-blue-500",
                    features: [
                        "Vanilla",
                        "Žádné přikazy",
                        "Dynmapa",
                        "Wipe po domluvě komunity",
                        "Předgenerovaná 5kx5k"
                    ],
                },
            ] as World[]
        }
    },
    components: { WorldsBox }
}
</script>