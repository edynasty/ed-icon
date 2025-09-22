<template>
  <svg
    :width="size"
    :height="size"
    :style="{ color: color }"
    viewBox="0 0 1024 1024"
    fill="currentColor"
    v-bind="$attrs"
  ><path d="M512.664 937.336c-235.272 0-426-190.728-426-426s190.728-426 426-426 426 190.728 426 426-190.728 426-426 426z m-172.664-616l135.152 379.92h75.024l135.152-379.92h-67.576l-104.296 309.68h-1.6l-104.296-309.68h-67.576z" />
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
