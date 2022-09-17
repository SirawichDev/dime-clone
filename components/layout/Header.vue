<template>
  <div class="w-full bg-black p-4">
    <header class="container mx-auto">
      <div class="flex items-center justify-between">
        <div class="flex flex-grow-1">
          <Logo/>
        </div>
        <div class="flex items-center">
          <ul class="flex gap-4">
            <li class="text-base cursor-pointer font-bold text-white  hover:bg-gradient-to-t hover:from-green-500 hover-to-black" v-for="(menu, index) in menus" :key="index">
              {{ menu.name }}
            </li>
          </ul>
          <LangSwitch/>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import {reactive} from 'vue'
import LangSwitch from "@/components/LangSwitch.vue";
import Logo from "@/components/Logo.vue";

const menus = reactive([
  {
    name: 'เกี่ยวกับเรา',
    link: '#'
  },
  {
    name: 'แผนงาน',
    link: '#'
  },
  {
    name: 'ร่วมงาน',
    link: '#'
  },
  {
    name: 'ติดต่อเรา',
    link: '#'
  }
])
</script>

<style scoped>

</style>
