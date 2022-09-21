<template>
  <img
    :class="props.classes ?? ''"
    src="https://dime.co.th/right-coin.webp"
    alt="coin-right"
  />
</template>
<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps<{ classes: string }>()
</script>
