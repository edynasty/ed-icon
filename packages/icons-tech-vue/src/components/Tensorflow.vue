<template>
  <svg
    :width="size"
    :height="size"
    :style="{ color: color }"
    viewBox="0 0 1024 1024"
    fill="currentColor"
    v-bind="$attrs"
  ><path d="M836.266667 512l4.266666 200.533333-132.266666-76.8v285.866667L533.333333 1024V0l435.2 251.733333v226.133334l-260.266666-153.6v115.2zM55.466667 251.733333L490.666667 0v1024l-174.933334-102.4v-597.333333l-260.266666 153.6z" fill="#ff6f00" />
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
