<template>
  <svg
    :width="size"
    :height="size"
    :style="{ color: color }"
    viewBox="0 0 1024 1024"
    fill="currentColor"
    v-bind="$attrs"
  ><path d="M484.906667 356.864a38.4 38.4 0 0 1 54.314666 0l256 256a38.4 38.4 0 0 1-54.314666 54.272l-228.821334-228.821333-228.864 228.821333a38.4 38.4 0 1 1-54.314666-54.272l256-256z" fill="#25282B" />
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
