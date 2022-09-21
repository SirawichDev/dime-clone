<template>
  <img
    :class="props.classes ?? ''"
    src="https://dime.co.th/left-coin-lg.webp"
    alt="coin-left"
  />
</template>
<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps<{ classes: string }>()
</script>
