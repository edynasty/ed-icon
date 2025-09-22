<template>
  <svg
    :width="size"
    :height="size"
    :style="{ color: color }"
    viewBox="0 0 1024 1024"
    fill="currentColor"
    v-bind="$attrs"
  ><path d="M384 140.992V928q0 14.016 8.992 23.008T416 960t23.008-8.992T448 928V219.008l243.008 242.016q10.016 10.016 22.496 10.016t22.016-10.016 9.504-22.496-8.992-22.496L439.04 119.04q-7.008-7.008-16.512-8.992t-18.496 2.016-14.496 11.488-5.504 17.504z" />
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
