<template>
  <NuxtLayout name="public">
    <div class="bg-black text-white">
      <div class="w-full relative overflow-hidden min-h-[656px]">
        <div class="absolute  w-full  bottom-0 overflow-hidden">
        <img src="https://dime.co.th/top-hero-bg-left.svg" class="relative h-[544px] lg:h-full -bottom-30 lg:bottom-[20%] lg:left-[-40%] z-2"/>
        <img src="https://dime.co.th/top-hero-bg-right.svg" class="absolute bottom-0 right-[-40%] h-[400px] translate-x-[115%] hidden lg:block"/>
        </div>
        <div class="relative flex justify-center w-full mt-20 gap-25 mx-auto container flex-wrap lg:flex-nowrap flex-wrap-reverse">
          <div class="flex z-2 w-full">
          <img class="h-40 mt-20" src="https://dime.co.th/left-coin-lg.webp" alt="coin"/>
          <img class="h-[500px]" src="https://dime.co.th/top-hero-phone-lg.webp" alt="phone"/>
        </div>
          <div class="flex flex-col items-center lg:items-start">
            <Text theme="heading" classes="flex mb-5">
              เพราะ
              <span class="text-dime">
                <img class="absolute w-50" src="https://dime.co.th/top-hero-circle-th.svg" alt="circle" />
                การเงิน
              </span>
            </Text>
            <Text theme="heading">เป็นเรื่องของทุกคน</Text>
            <Text theme="subHeading" classes="mt-4 w-[70%] text-left"><span class="text-dime font-bold">Dime!</span> มุ่งมั่นที่จะปฏิวัติธุรกิจการเงินและการลงทุน ให้ทุกคนสามารถเข้าถึงผลิตภัณฑ์และบริการทางการเงินได้ง่าย เสียค่าใช้จ่ายน้อยที่สุด และตอบโจทย์ไลฟ์สไตล์ในยุคดิจิทัล</Text>
          </div>
        </div>
        <div class="absolute bottom-[0] opacity-60 bg-gradient-to-t from-black z-2 h-50 w-full">
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import Text from '@/components/Text.vue'

import {useHead} from "#head";

useHead({
  title: 'My Appxx',
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
