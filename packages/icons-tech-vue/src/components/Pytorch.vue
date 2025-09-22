<template>
  <svg
    :width="size"
    :height="size"
    :style="{ color: color }"
    viewBox="0 0 1024 1024"
    fill="currentColor"
    v-bind="$attrs"
  ><path d="M512.224 1.696L212.288 301.632c-76.832 76.064-124.384 181.536-124.384 298.144s47.552 222.08 124.352 298.112l0.032 0.032c76.064 76.832 181.568 124.384 298.144 124.384s222.08-47.552 298.112-124.352l0.032-0.032c169.376-165.856 169.472-433.952 3.584-596.32l-74.144 74.112c123.52 123.52 123.52 324.608 0 448.128-123.488 123.488-324.608 123.488-448.128 0-123.488-123.52-123.488-324.64 0-448.128l197.632-197.6 24.736-28.288z m151.712 165.824a56.448 56.448 0 0 0 0 112.896 56.448 56.448 0 0 0 0-112.896z" fill="#EE4C2C" />
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
