<template>
  <svg
    :width="size"
    :height="size"
    :style="{ color: color }"
    viewBox="0 0 1024 1024"
    fill="currentColor"
    v-bind="$attrs"
  ><path d="M228.906667 271.530667a38.4 38.4 0 0 1 54.314666 0l213.333334 213.333333a38.4 38.4 0 0 1 0 54.272l-213.333334 213.333333a38.4 38.4 0 1 1-54.314666-54.272L415.146667 512 228.906667 325.802667a38.4 38.4 0 0 1 0-54.272z m298.666666 0a38.4 38.4 0 0 1 54.314667 0l213.333333 213.333333a38.4 38.4 0 0 1 0 54.272l-213.333333 213.333333a38.4 38.4 0 1 1-54.314667-54.272L713.813333 512l-186.197333-186.197333a38.4 38.4 0 0 1 0-54.272z" fill="#25282B" />
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
