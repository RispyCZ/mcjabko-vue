<template>
    <div class="p-3 shadow-lg shadow-black">
        <earth class="block text-8xl mx-auto my-10" :class="color"></earth>
        <h4 class="text-3xl text-mcj-red font-bold text-center">{{ name }}</h4>
        <p class="text-2xl text-center text-yellow-200 font-bold mt-5">Charakteristika světa</p>
        <ul class="text-xl text-center">
            <li v-for="feature in features">{{ feature }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { Earth } from "mdue";
</script>

<script lang="ts">
export default {
    props: {
        name: String,
        color: String,
        features: Array
    }
}
</script>