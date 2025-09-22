<template>
  <svg
    :width="size"
    :height="size"
    :style="{ color: color }"
    viewBox="0 0 1024 1024"
    fill="currentColor"
    v-bind="$attrs"
  ><path d="M512 873.6a41.6 41.6 0 0 1-41.6-41.6V192a41.6 41.6 0 1 1 83.2 0v640a41.6 41.6 0 0 1-41.6 41.6z" /><path d="M234.88 713.6a41.6 41.6 0 0 1-20.8-77.76L768 315.84a41.6 41.6 0 0 1 41.6 72.32L256 708.16a43.84 43.84 0 0 1-21.12 5.44z" /><path d="M789.12 713.6a43.84 43.84 0 0 1-20.8-5.44l-554.24-320A41.6 41.6 0 1 1 256 315.84l554.24 320a41.6 41.6 0 0 1-20.8 77.76z" />
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
