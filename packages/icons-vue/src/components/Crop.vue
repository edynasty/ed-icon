<template>
  <svg
    :width="size"
    :height="size"
    :style="{ color: color }"
    viewBox="0 0 1024 1024"
    fill="currentColor"
    v-bind="$attrs"
  ><path d="M896 682.666667h-128V365.226667A109.226667 109.226667 0 0 0 658.773333 256H341.333333V128a42.666667 42.666667 0 0 0-85.333333 0v128H128a42.666667 42.666667 0 0 0 0 85.333333h128v317.44A109.226667 109.226667 0 0 0 365.226667 768H682.666667v128a42.666667 42.666667 0 0 0 85.333333 0v-128h128a42.666667 42.666667 0 0 0 0-85.333333zM365.226667 682.666667a23.893333 23.893333 0 0 1-23.893334-23.893334V341.333333h317.44a23.893333 23.893333 0 0 1 23.893334 23.893334V682.666667z" />
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
