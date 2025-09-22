<template>
  <svg
    :width="size"
    :height="size"
    :style="{ color: color }"
    viewBox="0 0 124.79 132.69"
    fill="currentColor"
    v-bind="$attrs"
  ><path d="SVGID_2_" /><path d="SVGID_6_" /><path d="SVGID_12_" /><path d="SVGID_18_" /><path d="M25.38,64.92C25.16,29.38,72.77,13.69,93.3,46.71l-15.75,9.12c-9.51-15.73-33.12-10.1-33.97,9.1 c0.25,17.69,23.46,25.91,33.97,9.09l15.75,9.12C75.21,114.54,26.29,103.24,25.38,64.92L25.38,64.92z" /><rect x="60.58" y="33.24" width="55.92" height="65.76" /><rect x="7.06" y="53.4" width="108" height="72.96" /><rect x="7.06" y="3.24" width="108" height="92.64" />
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
