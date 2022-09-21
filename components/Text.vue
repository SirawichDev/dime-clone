<template>
  <span :class="`${textProps[props.theme]} ${props.classes ?? ''}`">
    <slot></slot>
  </span>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const textProps = {
  heading: 'text-5xl lg:text-6xl font-bold',
  subHeading: 'text-l lg:text-lg font-normal',
  subHeading2: 'text-l',
  small: 'text-sm',
  topic: 'text-5xl font-bold',
  subTopic: 'text-3xl font-bold',
  subTopic2: 'text-2xl',
  subTopic3: 'text-xl',
}
const props = defineProps<{ theme: string; classes?: string }>()
</script>
