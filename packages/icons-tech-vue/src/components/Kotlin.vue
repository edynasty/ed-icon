<template>
  <svg
    :width="size"
    :height="size"
    :style="{ color: color }"
    viewBox="0 0 122.88 122.88"
    fill="currentColor"
    v-bind="$attrs"
  ><rect y="61.17" width="122.88" height="61.71" /><rect width="122.88" height="122.88" /><rect width="61.69" height="64.88" />
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
