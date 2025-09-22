<template>
  <svg
    :width="size"
    :height="size"
    :style="{ color: color }"
    viewBox="0 0 1024 1024"
    fill="currentColor"
    v-bind="$attrs"
  ><path d="M544 128v128a32 32 0 0 1-64 0V128a32 32 0 0 1 64 0z m352 352h-128a32 32 0 0 0 0 64h128a32 32 0 0 0 0-64z m-180.352 190.4a32 32 0 0 0-45.248 45.248l90.496 90.496a32 32 0 1 0 45.28-45.28l-90.56-90.464zM512 736a32 32 0 0 0-32 32v128a32 32 0 0 0 64 0v-128a32 32 0 0 0-32-32z m-203.648-65.6l-90.496 90.496a32 32 0 1 0 45.28 45.28l90.464-90.56a32 32 0 0 0-45.248-45.216zM288 512a32 32 0 0 0-32-32H128a32 32 0 0 0 0 64h128a32 32 0 0 0 32-32z m-24.864-294.144a32 32 0 1 0-45.312 45.28l90.56 90.464a32 32 0 0 0 45.216-45.248L263.104 217.856z" />
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
