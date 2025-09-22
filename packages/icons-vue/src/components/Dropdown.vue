<template>
  <svg
    :width="size"
    :height="size"
    :style="{ color: color }"
    viewBox="0 0 1706 1024"
    fill="currentColor"
    v-bind="$attrs"
  ><path d="M782.02272703 706.46395178L457.91614086 317.53604822h648.21317271z" />
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
