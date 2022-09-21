<template>
  <div class="bg-white relative m-5 mt-0 mb-0 inline-block">
    <div
      class="absolute top-[7%] left-[-1px] z-0 bg-dime h-[480px] w-[4px]"
    ></div>
    <div class="w-[300px] lg:w-[400px] flex flex-col flex-grow-2 px-10 py-10">
      <Button theme="rounded" classes="w-10 h-10 bg-blue-600">
        <Text theme="subHeading">''</Text>
      </Button>
      <Text
        theme="subHeading"
        classes="flex flex-grow-2 text-gray-500 font-bold mt-5"
      >
        {{ props.quote.title }}
      </Text>
      <Profile
        class="absolute bottom-5"
        :writer="props.quote.writer"
        :position="props.quote.position"
        :img-url="props.quote.imgUrl"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { IQuote } from '@/types/Models'
import Button from '@/components/Button.vue'
import Profile from '@/components/Profile.vue'
import Text from '@/components/Text.vue'

const props = defineProps<{ quote: IQuote }>()
</script>
