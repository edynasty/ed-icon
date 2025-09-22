<template>
  <svg
    :width="size"
    :height="size"
    :style="{ color: color }"
    viewBox="0 0 24 24"
    fill="currentColor"
    v-bind="$attrs"
  ><path d="M4 7c0-1.7 1.3-3 3-3h13" /><path d="M18 20c-1.7 0-3-1.3-3-3V4" /><line x1="9" y1="4" x2="9" y2="20" />
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
