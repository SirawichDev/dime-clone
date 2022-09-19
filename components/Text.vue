<template>
    <span :class="`${textProps[props.theme]} ${props.classes ?? ''}`">
        <slot></slot>
    </span>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
const textProps = {
    heading: 'text-6xl font-bold',
    subHeading: 'text-lg font-normal',
    subHeading2: 'text-l font-normal',
    topic: 'text-5xl font-bold',
}
const props = defineProps<{ theme: string, classes?: string}>()
</script>
