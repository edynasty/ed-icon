<template>
  <svg
    :width="size"
    :height="size"
    :style="{ color: color }"
    viewBox="0 0 1024 1024"
    fill="currentColor"
    v-bind="$attrs"
  ><path d="M667.221333 228.864a38.4 38.4 0 0 1 0 54.272L438.357333 512l228.864 228.864a38.4 38.4 0 0 1-54.314666 54.272l-256-256a38.4 38.4 0 0 1 0-54.272l256-256a38.4 38.4 0 0 1 54.314666 0z" fill="#25282B" />
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
