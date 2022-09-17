<template>
  <div>
    <button @click="lang.toggle = !lang.toggle" id="menu-button" aria-expanded="true" aria-haspopup="true"
            class="ml-3 relative h-10 w-20 border-2 border-dime border-r-2 rounded-4xl flex justify-evenly items-center">
      <span class="text-white font-bold">ไทย</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="#5df591"
           :class="{'rotate-180': lang.toggle, 'rotate-0': !lang.toggle}" viewBox="0 0 24 24" stroke-width="1.5"
           stroke="currentColor" class="w-6 h-6 transition-transform duration-200 transform ">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
      </svg>
    </button>
    <div v-show="lang.toggle" class="absolute z-50 w-full  origin-top-right">
      <span class="text-white font-bold ml-6">EN</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {reactive, ref, watch} from "vue";

const lang = reactive({toggle: false})
</script>

<style scoped>

</style>
