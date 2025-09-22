<template>
  <svg
    :width="size"
    :height="size"
    :style="{ color: color }"
    viewBox="0 0 1024 1024"
    fill="currentColor"
    v-bind="$attrs"
  ><path d="M517.333333 42.666667H938.666667v938.666666H85.333333V78.08l432 426.666667V42.666667z m85.333334 853.333333H853.333333v-56.874667h-134.4v-85.333333H853.333333v-56.917333h-134.4v-85.333334H853.333333V554.666667h-134.4v-85.333334H853.333333V412.458667h-134.4v-85.333334H853.333333V270.208h-134.4v-85.333333H853.333333V128h-250.666666v768z m-85.333334 0v-271.36L170.666667 282.24V896h346.666666z" fill="#000000" />
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
