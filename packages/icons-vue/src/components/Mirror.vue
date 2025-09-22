<template>
  <svg
    :width="size"
    :height="size"
    :style="{ color: color }"
    viewBox="0 0 1024 1024"
    fill="currentColor"
    v-bind="$attrs"
  ><path d="M554.688 85.312v853.376H469.312V85.376h85.376zM384 198.08v591.36H55.488L384 198.016z m256 0l328.512 591.36H640v-591.36zM200.512 704h98.176V527.36L200.512 704z m524.8-176.64V704h98.176l-98.176-176.64z" />
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
