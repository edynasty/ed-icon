<template>
  <svg
    :width="size"
    :height="size"
    :style="{ color: color }"
    viewBox="0 0 129 129"
    fill="currentColor"
    v-bind="$attrs"
  ><path d="M0,0h61.3v61.3H0V0z" /><path d="M67.7,0H129v61.3H67.7V0z" /><path d="M0,67.7h61.3V129H0V67.7z" /><path d="M67.7,67.7H129V129H67.7V67.7z" />
  </svg>
</template>

<script setup lang="ts">
interface Props {
  size?: string | number
  color?: string
}

withDefaults(defineProps<Props>(), {
  size: '1em',
  color: 'currentColor'
})
</script>
