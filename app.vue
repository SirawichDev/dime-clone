<template>
  <NuxtLayout name="public">
  <Hero/>
  <Service/>
  </NuxtLayout>
</template>

<script setup lang="ts">
import Hero from '@/components/sections/Hero.vue';
import {useHead} from "#head";
import Service from "./components/sections/Service.vue";

useHead({
  title: 'Dime! บริการการเงินดิจิทัลเพื่อทุกคน - เคเคพี่ไดม์',
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    {name: 'description', content: 'My amazing site.'}
  ],
  bodyAttrs: {
    class: 'test'
  }
})
</script>
