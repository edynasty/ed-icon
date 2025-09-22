<template>
  <svg
    :width="size"
    :height="size"
    :style="{ color: color }"
    viewBox="0 0 1024 1024"
    fill="currentColor"
    v-bind="$attrs"
  ><path d="M224 768v96q0.992 27.008 19.008 44.992T288 928h448q27.008-0.992 44.992-19.008T800 864v-96H224z m0-64h576V160q-0.992-27.008-19.008-44.992T736 96H288q-27.008 0.992-44.992 19.008T224 160v544z m32 288q-40.992-0.992-68-28T160 896V128q0.992-40.992 28-68T256 32h512q40.992 0.992 68 28T864 128v768q-0.992 40.992-28 68T768 992H256z m304-144q-0.992 20-14.496 33.504T512 895.008t-33.504-13.504-13.504-33.504 13.504-33.504T512 800.992t33.504 13.504 14.496 33.504z" />
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
