<template>
  <img
    :class="props.classes ?? ''"
    src="https://dime.co.th/banner-play-store.webp"
    alt="play-store"
  />
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps<{ classes?: string }>()
</script>
