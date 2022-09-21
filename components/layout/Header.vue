<template>
  <div class="w-full bg-black p-4 sticky top-0 z-50">
    <header class="container mx-auto">
      <div class="flex items-center justify-between">
        <div class="flex flex-grow-1">
          <Logo class="w-20" />
        </div>
        <div class="hidden lg:flex items-center">
          <ul class="flex gap-6">
            <li
              v-for="(menu, index) in menus"
              :key="index"
              class="text-base cursor-pointer font-bold text-white hover:bg-gradient-to-t hover:from-green-500 hover-to-black"
            >
              {{ menu.name }}
            </li>
          </ul>
          <LangSwitch />
        </div>
        <div class="block lg:hidden">
          <button class="relative group">
            <div
              class="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-black ring-0 duration-200 shadow-md"
            >
              <div
                class="flex flex-col justify-between w-[30px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden"
              >
                <div
                  class="bg-dime h-[2px] w-9 transform transition-all duration-300 origin-left group-focus:translate-x-10"
                ></div>
                <div
                  class="bg-dime h-[2px] w-9 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75"
                ></div>
                <div
                  class="bg-dime h-[2px] w-9 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150"
                ></div>

                <div
                  class="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12"
                >
                  <div
                    class="absolute bg-dime h-[2px] w-7 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"
                  ></div>
                  <div
                    class="absolute bg-dime h-[2px] w-7 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"
                  ></div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import LangSwitch from '@/components/LangSwitch.vue'
import Logo from '@/components/Logo.vue'

const menus = reactive([
  {
    name: 'เกี่ยวกับเรา',
    link: '#',
  },
  {
    name: 'แผนงาน',
    link: '#',
  },
  {
    name: 'ร่วมงาน',
    link: '#',
  },
  {
    name: 'ติดต่อเรา',
    link: '#',
  },
])
</script>

<style scoped></style>
