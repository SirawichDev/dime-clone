<template>
  <div>
    <div class="container mx-auto my-[10%]">
      <div class="flex justify-around gap-10">
        <div class="flex flex-col flex-grow-2">
          <div class="flex flex-col justify-start flex-auto h-50">
            <Text theme="topic" classes="text-black">
              ทีมของเรา<span class="text-dime font-xl">.</span>
            </Text>
            <Text theme="subHeading">
              คิดต่าง สร้างใหม่ ล้มเร็วลุกไว บนโลกใบเดิม
            </Text>
          </div>
          <div class="flex gap-5">
            <ButtonDime
              theme="rounded"
              :classes="`w-15 h-15 flex justify-center items-center bottom-0 ${
                counter.value <= 0 ? 'bg-gray-400' : ''
              }`"
              @click="goLeft"
            >
              <ArrowLeft />
            </ButtonDime>
            <ButtonDime
              theme="rounded"
              :classes="`w-15 h-15 flex justify-center items-center bottom-0 ${
                counter.value === quotes.legth - 1 ? 'bg-gray-400' : ''
              }`"
              :disabled="counter.value === quotes.legth"
              @click="goRight"
            >
              <ArrowRight />
            </ButtonDime>
          </div>
        </div>
        <div
          id="card-slider"
          ref="test"
          class="scroll-smooth bg-gray-100 min-h-[550px] flex w-[560px] overflow-y-scroll"
        >
          <Card v-for="(quote, index) in quotes" :key="index" :quote="quote" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { IQuote } from '@/types/Models'
import ButtonDime from '@/components/Button.vue'
import Text from '@/components/Text.vue'
import ArrowLeft from '@/components/icons/ArrowLeft.vue'
import ArrowRight from '@/components/icons/ArrowRight.vue'
import Card from '@/components/Card.vue'

const test = ref(null)
const DISTANCE = 450
const counter = reactive({
  value: 0,
})
const quotes: IQuote[] = [
  {
    title:
      'ประโยชน์ส่วนตัวและประโยชน์ส่วนรวมไม่จำเป็นต้องแยกออกจากกัน ที่ Dime! เรามุ่งหวังในสิ่งเดียวกัน เราอยากให้คนไทยทุกคนเข้าถึงการลงทุนได้ง่าย คุณได้ลงทุน เราได้ลูกค้า ตลาดทุนได้เติบโต',
    imgUrl:
      'https://png.pngitem.com/pimgs/s/506-5067022_sweet-shap-profile-placeholder-hd-png-download.png',
    writer: 'Someone',
    position: 'Software Developer',
  },
  {
    title:
      'ประโยชน์ส่วนตัวและประโยชน์ส่วนรวมไม่จำเป็นต้องแยกออกจากกัน ที่ Dime! เรามุ่งหวังในสิ่งเดียวกัน เราอยากให้คนไทยทุกคนเข้าถึงการลงทุนได้ง่าย คุณได้ลงทุน เราได้ลูกค้า ตลาดทุนได้เติบโต',
    imgUrl:
      'https://png.pngitem.com/pimgs/s/506-5067022_sweet-shap-profile-placeholder-hd-png-download.png',
    writer: 'Someone',
    position: 'QA',
  },
  {
    title:
      'ประโยชน์ส่วนตัวและประโยชน์ส่วนรวมไม่จำเป็นต้องแยกออกจากกัน ที่ Dime! เรามุ่งหวังในสิ่งเดียวกัน เราอยากให้คนไทยทุกคนเข้าถึงการลงทุนได้ง่าย คุณได้ลงทุน เราได้ลูกค้า ตลาดทุนได้เติบโต',
    imgUrl:
      'https://png.pngitem.com/pimgs/s/506-5067022_sweet-shap-profile-placeholder-hd-png-download.png',
    writer: 'Someone',
    position: 'PO',
  },
]

function goRight() {
  test.value.scrollLeft += DISTANCE
  counter.value++
}

function goLeft() {
  test.value.scrollLeft -= DISTANCE
  counter.value--
}
</script>
