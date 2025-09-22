<template>
  <svg
    :width="size"
    :height="size"
    :style="{ color: color }"
    viewBox="0 0 1024 1024"
    fill="currentColor"
    v-bind="$attrs"
  ><path d="M85.333333 224.853333 139.946667 170.666667 853.333333 884.053333 799.146667 938.666667 640 779.52 640 938.666667 384 938.666667 384 523.52 85.333333 224.853333M768 213.333333 640 426.666667 504.32 426.666667 290.986667 213.333333 768 213.333333M768 170.666667 256 170.666667 256 85.333333 768 85.333333 768 170.666667M640 469.333333 640 562.346667 546.986667 469.333333 640 469.333333Z" />
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
