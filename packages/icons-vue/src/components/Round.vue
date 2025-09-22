<template>
  <svg
    :width="size"
    :height="size"
    :style="{ color: color }"
    viewBox="0 0 1024 1024"
    fill="currentColor"
    v-bind="$attrs"
  ><path d="M512 1021.725c-281.076 0-509.725-228.647-509.725-509.725s228.647-509.725 509.725-509.725 509.725 228.647 509.725 509.725-228.647 509.725-509.725 509.725zM512 75.093c-240.917 0-436.907 195.989-436.907 436.907s195.989 436.907 436.907 436.907c240.917 0 436.907-195.989 436.907-436.907 0-240.917-195.989-436.907-436.907-436.907z" fill="#272636" />
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
