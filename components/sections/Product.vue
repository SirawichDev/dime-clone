<template>
  <div class="bg-black relative">
    <div class="container relative mx-auto min-h-[700px] lg:min-h-[500px]">
      <img
        class="absolute h-full"
        src="https://dime.co.th/roadmap-hero-bg-lg.svg"
        alt="product-bg"
      />
      <CoinLeft classes="absolute h-50" />
      <CoinLeft classes="absolute right-25 h-30" style="rotate: 339deg" />
      <CoinRight classes="absolute right-60 h-30 bottom-[-10%]" />
      <div class="relative flex justify-center w-full">
        <div
          class="transform translate-y-50 lg:translate-y-[50%] flex gap-10 z-2 items-center flex-wrap justify-center lg:flex-nowrap"
        >
          <div class="flex flex-col w-auto lg:w-full justify-center items-end">
            <Text
              v-for="(product, index) in products"
              :key="index"
              theme="heading"
              classes="text-white text-right"
            >
              {{ product }}<span class="text-dime font-xl">.</span>
            </Text>
          </div>
          <div class="flex flex-col items-center gap-5">
            <Text
              theme="subHeading"
              classes="text-white w-auto lg:w-95 tracking-wide text-center lg:text-left"
            >
              <span class="text-dime">Dime!</span>
              แอปพลิเคชันที่รวบรวมผลิตภัณฑ์ทางการเงินและการลงทุนหลากหลายประเภท
              ได้แก่ เงินฝาก บริการชำระเงิน สินเชื่อ ประกัน กองทุนรวม
              หุ้นต่างประเทศ สินทรัพย์ดิจิทัล สะดวก ง่ายแค่ปลายนิ้ว
            </Text>
            <Button theme="rectangle" classes="bg-dime w-1/2 text-black"
              >แผนงาน</Button
            >
          </div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import CoinLeft from '../icons/CoinLeft.vue'
import CoinRight from '../icons/CoinRight.vue'
import Text from '@/components/Text.vue'
import Button from '@/components/Button.vue'

const products = ['ออมเงิน', 'ลงทุน', 'เรียนรู้', 'จัดการ']
</script>
