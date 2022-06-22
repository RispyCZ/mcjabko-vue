
<template>
    <PageWrapper>
        <template v-slot:head>Pravidla</template>
        <template v-slot:subhead>Pravidla jsou velice důležitá pro klidně hraní. Pokud je však porušíš trest tě nemine.</template>
        <template v-slot:content>
            <Rules />
        </template>
    </PageWrapper>
</template>

<script setup lang="ts">
import Rules from "@/contents/Rules.vue";
import PageWrapper from "@/components/PageWrapper.vue";
</script>