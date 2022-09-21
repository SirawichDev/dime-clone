<template>
<div class="container mx-auto flex flex-col justify-center items-center">
    <Text theme="subTopic" classes="relative text-center mb-10">
        ร่วมงานกับ Dime! <span class="absolute bottom-0 w-85 bg-dime -z-1 h-[18px]">
    </span>      <span class="z-5">เพื่อสร้างความเปลี่ยนแปลง</span>
    </Text>
    <div v-for="(job, index) in preJobList" class="drop-shadow-2xl flex gap-20 py-5 my-5 shadow-md border-l-5 border-l-dime rounded-tr-xl rounded-br-xl justify-between items-center w-[60%] px-10 tracking-wide" :key="index">
        <Text theme="small">
            <span class="font-semibold">{{ job.title + ' ' + job.level + ' ' + currencyFormat(job.salary) }}</span>
        </Text>
        <Text theme="small">
            <span class="font-semibold">{{ dateFormat(job.date) }}</span>
        </Text>
    </div>
</div>
</template>
<script lang="ts" setup>
import Text from '@/components/Text.vue';
function currencyFormat(value: string) {
    return new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB', maximumFractionDigits: 0 }).format(Number(value))
}
function dateFormat(value: Date) {
    return  value.toLocaleDateString('th-TH', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
})
}
const preJobList = [
    {
        title: 'Data Engineer',
        level: '(Mid-Senior)',
        salary: '300000',
        date: new Date(2022, 10, 7)
    },
    {
        title: 'Software Engineer',
        level: '(Junior-Senior)',
        salary: '390000',
        date:  new Date(2022, 10, 17)
    },  {
        title: 'Product Owner',
        level: '',
        salary: '500000',
        date:  new Date(2022, 9, 10)
    }
]
</script>
