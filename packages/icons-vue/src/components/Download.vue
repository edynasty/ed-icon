<template>
  <svg
    :width="size"
    :height="size"
    :style="{ color: color }"
    viewBox="0 0 1024 1024"
    fill="currentColor"
    v-bind="$attrs"
  ><path d="M160 832h704q14.016 0 23.008 8.992T896 864t-8.992 23.008T864 896H160q-14.016 0-23.008-8.992T128 864t8.992-23.008T160 832z m384-253.984l236-236 46.016 44.992L509.024 704l-316.992-316.992 44.992-44.992 243.008 243.008V128.032h64v450.016z" />
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
