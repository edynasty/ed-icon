<template>
  <svg
    :width="size"
    :height="size"
    :style="{ color: color }"
    viewBox="0 0 1024 1024"
    fill="currentColor"
    v-bind="$attrs"
  ><path d="M427.9 344V183c0-13.7-16.1-21.1-26.5-12.1l-320 276.6c-23.4 20.2-23.3 53 0 73.2l320 276.6c10.4 9 26.5 1.6 26.5-12.1V624c178.4 0 345.1 34.8 489.7 199.3 11.1 12.7 31.7 1.6 27.5-14.7C855.3 467.8 585.9 344 427.9 344" />
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
