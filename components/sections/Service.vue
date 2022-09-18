<template>
<div class="container mx-auto pb-20">
<div class="bg-blue-600 opacity-90 mt-[15%] mb-[5%] mx-0 lg:mx-[10%] min-h-fit lg:h-[450px] px-20 pt-10 rounded-xl flex justify-around items-center flex-wrap lg:flex-nowrap flex-wrap">
<div class="flex flex-col gap-10 items-center lg:items-start lg:text-left text-center">
    <Text theme="topic" classes="text-white">
    บริการการเงินดิจิทัลเพื่อทุกคน
</Text>
<Text theme="sub-heading" classes="text-white w-95">
    ฝันของคุณคือภารกิจของเรา ให้ Dime! ทำฝันของคุณให้เป็นจริง<strong>ไม่เคยลงทุน ไม่เป็นไร</strong> Dime! ช่วยคุณได้
</Text>
<ButtonDime theme="rectangle" classes="w-2/6">
   รู้จักเรา
</ButtonDime>
</div>
<div class="relative bottom-0 mb-0 lg:mb-[20%] z-1 flex flex-col justify-center items-center gap-0 overflow-auto">
    <img class="relative bottom-[-40px] z-2" src="https://dime.co.th/story-hero-phone-frame.webp"/>
    <img class="relative mb-0 bottom-0 z-1" src="https://dime.co.th/story-hero-phone-base.svg"/>
</div>
</div>
<DownloadStore/>
</div>
</template>
<script lang="ts" setup>
import Text from '@/components/Text.vue';
import ButtonDime from '@/components/Button.vue';
import DownloadStore from '@/components/DownloadStore.vue';

</script>