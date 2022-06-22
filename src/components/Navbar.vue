<template>
    <!-- Navbar -->
    <nav class="fixed top-0 left-0 right-0 py-5 px-10 bg-slate-900 grid grid-cols-[1fr,1fr] md:grid-cols-[.1fr,1fr] items-center">
        <RouterLink to="/"><img src="https://cdn.mcjabko.cz/images/logo.png" height="64" width="60" /></RouterLink>
        <button @click="handleClick" class="md:hidden text-2xl">
            <format-align-right v-if="!active"></format-align-right>
            <close v-if="active"></close>
        </button>
        <div class="col-span-2 md:col-span-1 md:mt-0 md:inline-block transition-all duration-150 ease-out" :class="active ? 'mt-10 flex flex-col items-center' : 'mt-0 hidden'">
            <RouterLink v-for="link in links" :to="link.url" class="mx-3 font-semibold text-xl hover:text-mcj-red transition duration-150 ease-out hover:ease-in">{{ link.name }}</RouterLink>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { FormatAlignRight, Close } from 'mdue'
</script>

<script lang="ts">
export default {
    data() {
        return {
            active: false,
            links: [
                {
                    name: "Domů",
                    url: "/"
                },
                {
                    name: "Pravidla",
                    url: "/pravidla"
                },
                {
                    name: "O nás",
                    url: "/o-nas"
                }
            ]
        }
    },
    methods: {
        handleClick() {
            this.active = !this.active
        }
    }
}
</script>