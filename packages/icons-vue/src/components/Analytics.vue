<template>
  <svg
    :width="size"
    :height="size"
    :style="{ color: color }"
    viewBox="0 0 1024 1024"
    fill="currentColor"
    v-bind="$attrs"
  ><path d="M128 64H64v832a64 64 0 0 0 64 64h832v-64H128V64z m832 224h-224v64h114.88L608 594.88l-137.28-137.6a32 32 0 0 0-45.44 0L192 690.88 237.12 736 448 525.12l137.28 137.6a32 32 0 0 0 45.44 0l265.28-265.6V512h64V288z" fill="#000000" />
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
