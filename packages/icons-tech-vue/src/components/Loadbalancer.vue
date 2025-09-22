<template>
  <svg
    :width="size"
    :height="size"
    :style="{ color: color }"
    viewBox="0 0 1024 1024"
    fill="currentColor"
    v-bind="$attrs"
  ><path d="M870.4 614.4h-307.2v204.8h51.2v204.8H409.6v-204.8h51.2v-204.8H153.6v204.8h51.2v204.8H0v-204.8h51.2v-204.8a102.4 102.4 0 0 1 102.4-102.4h307.2V307.2H358.4V0h307.2v307.2h-102.4v204.8h307.2a102.4 102.4 0 0 1 102.4 102.4v204.8h51.2v204.8h-204.8v-204.8h51.2v-204.8z" />
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
