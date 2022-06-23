<template>
    <div class="p-4 rounded-2xl bg-mcj-red bg-opacity-120 shadow-xl shadow-black">
        <component :is="icon" class="block text-7xl mx-auto my-5 text-center"></component>
        <h4 class="text-3xl font-bold text-center">{{ title }}</h4>
        <p class="text-xl">
            {{ desc }}
        </p>
    </div>
</template>

<script setup lang="ts">
import { SignalVariant, AccountGroup, Star } from "mdue";
</script>

<script lang="ts">
export default {
    components: {
        SignalVariant,
        AccountGroup,
        Star
    },
    props: {
        icon: String,
        title: String,
        desc: String
    }
}
</script>