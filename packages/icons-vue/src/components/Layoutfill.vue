<template>
  <svg
    :width="size"
    :height="size"
    :style="{ color: color }"
    viewBox="0 0 1024 1024"
    fill="currentColor"
    v-bind="$attrs"
  ><path d="M384 912h496c17.7 0 32-14.3 32-32V340H384v572zM880 112H384v164h528V144c0-17.7-14.3-32-32-32zM112 144v736c0 17.7 14.3 32 32 32h176V112H144c-17.7 0-32 14.3-32 32z" />
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
