<template>
    <!-- Footer -->
    <footer className='p-4 bg-slate-900'>
        <div>
            <h3 className='text-center font-bold text-2xl'>Sociální sítě</h3>
            <div className='flex justify-center my-4'>
                <a v-for="link in social_links" :href="link.url"
                    className='text-3xl mx-3 hover:text-mcj-red transition-all delay-300'>
                    <component :is="link.icon"></component>
                </a>
            </div>
        </div>
        <div className='grid lg:grid-cols-3 auto-rows-auto gap-10 w-3/4 my-5 mx-auto'>
            <div className='m-3 shadow-lg p-3 rounded-xl'>
                <h4 className='text-xl font-bold my-2'>O serveru</h4>
                <hr className='border-mcj-red border-2' />
                <p>Server MCJabko je ne P2W server založený již v roce 2017 hostovaný na vlastním železe a zaměřením
                    převážně na Vanillu a Semi-Vanillu.</p>
            </div>
            <div className='m-3 shadow-lg p-3 rounded-xl'>
                <h4 className='text-xl font-bold my-2'>Kotakt</h4>
                <hr className='border-mcj-red border-2' />
                <ul>
                    <li><span>info@mcjabko.cz</span></li>
                </ul>
            </div>
            <div className='m-3 shadow-lg p-3 rounded-xl'>
                <h4 className='text-xl font-bold my-2'>Důležité odkazy</h4>
                <hr className='border-mcj-red border-2' />
                <ul>
                    <li><a href='https://status.mcjabko.cz'>Status Page</a></li>
                    <li><a href='https://mcjabko.cz/pravidla'>Pravidla</a></li>
                    <li><a href='https://dynamp.mcjabko.cz/'>Dynmapa</a></li>
                </ul>
            </div>
        </div>
        <p className='text-center text-md '>&copy; MCJabko.cz {{ new Date().getFullYear() }} | Coded by Rispy_CZ
        </p>
        <p className='text-center text-md font-mono '>Version: 2.0 beta</p>
    </footer>
</template>

<script setup lang="ts">
import { Discord, Youtube, Instagram, Facebook } from "mdue";
</script>

<script lang="ts">
type SocialLink = { icon: string, url: string }
export default {
    components: {
        Discord,
        Youtube,
        Instagram,
        Facebook
    },
    data() {
        return {
            social_links: [
                {
                    icon: 'discord',
                    url: "https://discord.mcjabko.cz"
                },
                {
                    icon: 'facebook',
                    url: "https://fb.com/mcjabko"
                },
                {
                    icon: 'instagram',
                    url: "https://instagram.com/mcjabko"
                },
                {
                    icon: 'youtube',
                    url: "https://www.youtube.com/channel/UC6HgVw3WAAQiMEt9C6IYviQ"
                }
            ] as SocialLink[]
        }

    },
}
</script>