<template>
  <svg
    :width="size"
    :height="size"
    :style="{ color: color }"
    viewBox="0 0 1024 1024"
    fill="currentColor"
    v-bind="$attrs"
  ><path d="M484.906667 228.864a38.4 38.4 0 0 1 54.314666 0l213.333334 213.333333a38.4 38.4 0 0 1-54.314667 54.272l-186.154667-186.154666-186.197333 186.154666a38.4 38.4 0 1 1-54.314667-54.272l213.333334-213.333333z m-213.333334 512l213.333334-213.333333a38.4 38.4 0 0 1 54.314666 0l213.333334 213.333333a38.4 38.4 0 0 1-54.314667 54.272l-186.154667-186.154667-186.197333 186.154667a38.4 38.4 0 1 1-54.314667-54.272z" fill="#25282B" />
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
