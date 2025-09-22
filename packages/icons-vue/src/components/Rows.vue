<template>
  <svg
    :width="size"
    :height="size"
    :style="{ color: color }"
    viewBox="0 0 1024 1024"
    fill="currentColor"
    v-bind="$attrs"
  ><path d="M832 544H192a64 64 0 0 0-64 64v160a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64v-160a64 64 0 0 0-64-64z m0 224H192v-160h640v160z m0-576H192a64 64 0 0 0-64 64v160a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64z m0 224H192V256h640v160z" />
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
