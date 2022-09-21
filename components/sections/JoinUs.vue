<template>
  <div
    class="w-full mx-0 lg:mx-auto flex flex-col justify-center items-center relative"
  >
    <Text theme="subTopic" classes="relative text-center mb-10">
      ร่วมงานกับ Dime!
      <div
        class="absolute bottom-0 right-50 lg:right-0 w-25 lg:w-85 bg-dime -z-1 h-[18px]"
      ></div>
      <span class="z-5">เพื่อสร้างความเปลี่ยนแปลง</span>
    </Text>
    <div
      v-for="(job, index) in preJobList"
      :key="index"
      class="drop-shadow-2xl flex gap-1 lg:gap-20 py-5 my-5 mx-1 lg:mx-0 shadow-md border-l-5 border-l-dime rounded-tr-xl rounded-br-xl justify-between items-center w-[90%] lg:w-[60%] px-10 tracking-wide"
    >
      <Text theme="small" classes="flex grow">
        <span class="font-semibold">{{
          job.title + ' ' + job.level + ' ' + currencyFormat(job.salary)
        }}</span>
      </Text>
      <Text theme="small">
        <span class="font-semibold">{{ dateFormat(job.date) }}</span>
      </Text>
    </div>
    <Button theme="rectangle" classes="px-8 text-md"> ดูตำแหน่งทั้งหมด </Button>
  </div>
</template>
<script lang="ts" setup>
import Text from '@/components/Text.vue'
import Button from '@/components/Button.vue'

function currencyFormat(value: string) {
  return new Intl.NumberFormat('th-TH', {
    style: 'currency',
    currency: 'THB',
    minimumFractionDigits: 0,
  }).format(Number(value))
}

function dateFormat(value: Date) {
  return value.toLocaleDateString('th-TH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const preJobList = [
  {
    title: 'Data Engineer',
    level: '(Mid-Senior)',
    salary: '300000',
    date: new Date(2022, 10, 7),
  },
  {
    title: 'Software Engineer',
    level: '(Junior-Senior)',
    salary: '390000',
    date: new Date(2022, 10, 17),
  },
  {
    title: 'Product Owner',
    level: '',
    salary: '500000',
    date: new Date(2022, 9, 10),
  },
]
</script>
