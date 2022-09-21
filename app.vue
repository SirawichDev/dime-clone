<template>
  <NuxtLayout name="public">
    <Hero />
    <Service />
    <Product />
    <OurTeam />
    <JoinUs />
    <Footer />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useHead } from '#head'
import Hero from '@/components/sections/Hero.vue'
import Service from '@/components/sections/Service.vue'
import Product from '@/components/sections/Product.vue'
import OurTeam from '@/components/sections/OurTeam.vue'
import JoinUs from '@/components/sections/JoinUs.vue'
import Footer from '@/components/Footer.vue'

useHead({
  title: 'Dime! บริการการเงินดิจิทัลเพื่อทุกคน - เคเคพี่ไดม์',
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [{ name: 'description', content: 'My amazing site.' }],
  bodyAttrs: {
    class: 'test',
  },
})
</script>
