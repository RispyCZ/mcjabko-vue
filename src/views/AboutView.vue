<template>
    <PageWrapper>
        <template v-slot:head>O nás</template>
        <template v-slot:subhead>Zde nalezneš stručnou historii serveru, ale i naši filozofii</template>
        <template v-slot:content>
            <AboutUs />
        </template>
    </PageWrapper>
</template>

<script setup lang="ts">
import PageWrapper from '@/components/PageWrapper.vue'
import AboutUs from '@/contents/AboutUs.vue'
</script>