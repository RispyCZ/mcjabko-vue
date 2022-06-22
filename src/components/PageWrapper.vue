<template>
    <!-- Page Head -->
    <div class="background h-[600px] flex flex-col justify-center align-center items-center">
        <h1 class="text-5xl text-mcj-red font-bold">
            <slot name="head"></slot>
        </h1>
        <h2 class="text-xl text-center mt-5">
            <slot name="subhead"></slot>
        </h2>
    </div>
    <!-- Page Content -->
    <div class="bg-slate-900 p-10 text-xl w-4/5 my-10 mx-auto">
        <slot name="content"></slot>
    </div>
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