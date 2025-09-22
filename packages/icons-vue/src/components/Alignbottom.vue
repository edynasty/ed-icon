<template>
  <svg
    :width="size"
    :height="size"
    :style="{ color: color }"
    viewBox="0 0 1024 1024"
    fill="currentColor"
    v-bind="$attrs"
  ><path d="M509.013333 679.68a4.266667 4.266667 0 0 0 5.973334 0l160.426666-160.426667a4.266667 4.266667 0 0 0-2.986666-7.253333H558.933333a3.84 3.84 0 0 1-4.266666-4.266667V174.933333a3.84 3.84 0 0 0-4.266667-4.266666h-76.8a3.84 3.84 0 0 0-4.266667 4.266666v332.8a3.84 3.84 0 0 1-4.266666 4.266667H351.573333a4.266667 4.266667 0 0 0-2.986666 7.253333z m298.666667 88.32H217.6a3.84 3.84 0 0 0-4.266667 4.266667v76.8a3.84 3.84 0 0 0 4.266667 4.266666h588.8a3.84 3.84 0 0 0 4.266667-4.266666v-76.8a3.84 3.84 0 0 0-4.266667-4.266667z" />
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
