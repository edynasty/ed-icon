<template>
  <svg
    :width="size"
    :height="size"
    :style="{ color: color }"
    viewBox="0 0 1024 1024"
    fill="currentColor"
    v-bind="$attrs"
  ><path d="M1024 301.176471h-198.354824l140.227765 140.227764-42.586353 42.586353L783.058824 343.762824V542.117647h-60.235295V344.184471L81.558588 986.593882l-42.586353-42.586353L680.658824 301.176471H481.882353V240.941176h198.354823L540.009412 100.713412l42.586353-42.586353L722.823529 198.354824V0h60.235295v198.595765l137.758117-137.999059 42.586353 42.586353L825.886118 240.941176H1024v60.235295z" />
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
