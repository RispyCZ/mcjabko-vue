<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"
</script>

<template>
  <nav>
    <RouterLink to="/">Domů</RouterLink>
    <RouterLink to="/o-nas">O nás</RouterLink>
    <RouterLink to="/faq">FAQ</RouterLink>
    <RouterLink to="/pravidla">Pravidla</RouterLink>
  </nav>

  <RouterView />
</template>
