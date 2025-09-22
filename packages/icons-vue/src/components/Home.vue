<template>
  <svg
    :width="size"
    :height="size"
    :style="{ color: color }"
    viewBox="0 0 24 24"
    fill="currentColor"
    v-bind="$attrs"
  ><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
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
