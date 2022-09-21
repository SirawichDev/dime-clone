<template>
  <footer class="container mx-auto my-10">
    <div
      class="bg-black flex gap-10 flex-wrap lg:flex-nowrap justify-around items-center mx-10 lg:mx-20 min-h-[300px] rounded-3xl px-10 py-10"
    >
      <div class="flex flex-col gap-10">
        <Logo class="w-20" />
        <Text theme="small" classes="text-white flex flex-col">
          <span>KKP Dime</span>
          <span>เป็นบริษัทในเครือเกียรตินาคินภัทร</span>
        </Text>
        <Social />
      </div>
      <div class="flex flex-col gap-10">
        <Text theme="small" classes="flex flex-col">
          <span class="font-bold text-gray-500">สำนักงานใหญ่</span>
          <span class="font-base text-white">xxxxx</span>
        </Text>
        <Text theme="small" classes="flex flex-col">
          <span class="font-bold text-gray-500">อีเมล์</span>
          <span class="text-dime">xxxxx</span>
        </Text>
      </div>
      <div class="flex flex-col gap-5">
        <Text
          v-for="(menu, index) in footerMenu"
          :key="index"
          theme="subTopic3"
          classes="text-dime"
          class="font-bold"
        >
          {{ menu.name }}
        </Text>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import Logo from '@/components/Logo.vue'
import Social from '@/components/Social.vue'
import Text from '@/components/Text.vue'
const footerMenu = [
  {
    name: 'เกี่ยวกับเรา',
    link: '',
  },
  {
    name: 'แผนงาน',
    link: '',
  },
  {
    name: 'ร่วมงาน',
    link: '',
  },
  {
    name: 'ติดต่อเรา',
    link: '',
  },
  {
    name: 'ประกาศ',
    link: '',
  },
]
</script>

<style scoped></style>
