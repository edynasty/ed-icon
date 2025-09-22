<template>
  <svg
    :width="size"
    :height="size"
    :style="{ color: color }"
    viewBox="0 0 24 24"
    fill="currentColor"
    v-bind="$attrs"
  ><line x1="4" y1="7" x2="10" y2="7" /><line x1="7" y1="4" x2="7" y2="10" /><line x1="14" y1="7" x2="20" y2="7" /><line x1="4" y1="17" x2="10" y2="17" /><line x1="14" y1="14" x2="20" y2="20" /><line x1="20" y1="14" x2="14" y2="20" />
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
