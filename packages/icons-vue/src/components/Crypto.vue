<template>
  <svg
    :width="size"
    :height="size"
    :style="{ color: color }"
    viewBox="0 0 24 24"
    fill="currentColor"
    v-bind="$attrs"
  ><path d="M18.09 10.37A6 6 0 1 1 10.34 18" /><path d="M7 6h1v4" /><path d="m16.71 13.88.7.71-2.82 2.82" /><circle cx="8" cy="8" r="6" />
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
