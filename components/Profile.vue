<template>
  <div class="flex gap-5">
    <div class="relative">
      <img class="w-25 rounded-full h-25"
           src="https://png.pngitem.com/pimgs/s/506-5067022_sweet-shap-profile-placeholder-hd-png-download.png"/>
    </div>
    <div class="flex flex-col">
      <Text theme="subHeading" classes="font-semibold">{{ writer }}</Text>
      <Text theme="subHeading2" classes="font-normal text-gray-400"> {{ position }}</Text>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {defineProps} from 'vue';
import Text from '@/components/Text.vue';

const {writer, position, imgUrl} = defineProps<{ writer: string, position: string, imgUrl: string }>()
</script>
