<template>
  <img
    :class="props.classes ?? ''"
    src="https://dime.co.th/banner-app-store.webp"
    alt="app-store"
  />
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps<{ classes?: string }>()
</script>
