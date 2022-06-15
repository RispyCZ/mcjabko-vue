<template>
    <!-- Why Us -->
    <section id="whyus" class="p-5">
        <div class="my-10">
            <h3 class="text-4xl text-yellow-300 font-bold text-center mb-10">
                Další důvody proč hrát zrovna u nás
            </h3>

            <div class="grid lg:grid-cols-[1fr,1fr,1fr] gap-10">
                <WhyUsBox v-for="whyus in whyuslist" :icon="whyus.icon" :title="whyus.title" :desc="whyus.desc" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import WhyUsBox from './WhyUsBox.vue';
</script>

<script lang="ts">
type WhyUs = { icon: string, title: string, desc: string }
export default {
    components: {
        WhyUsBox
    },
    data() {
        return {
            whyuslist: [
                {
                    icon: "signal-variant",
                    title: "Vždy online",
                    desc: "Všechny herní servery provozujeme v Praze na vlastním HW a garantujeme minimální dostupnost 99,8%",
                },
                {
                    icon: "account-group",
                    title: "Admin Team",
                    desc: "Tým našich adminů a supportů ti rád pomůže s řešením tvých problém ať už na serveru nebo na discordu"
                },
                {
                    icon: "star",
                    title: "Máš na výběr",
                    desc: "Ačkoliv nabízíme jen servery zaměřené na Semi-Vanillu a Vanillu můžeš si vybrat."
                }
            ] as WhyUs[]
        }
    }
}
</script>