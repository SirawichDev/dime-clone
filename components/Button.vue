<template>
  <button :class="`${themeProps[props.theme]} ${classes ?? ''}`">
    <slot></slot>
  </button>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'

const themeProps = {
  rectangle: 'py-2 bg-black text-white rounded-xl cursor-pointer',
  rounded: 'py-2 bg-black text-white rounded-full cursor-pointer',
}
const props = defineProps<{ classes?: string; theme: string }>()
</script>
