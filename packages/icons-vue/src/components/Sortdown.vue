<template>
  <svg
    :width="size"
    :height="size"
    :style="{ color: color }"
    viewBox="0 0 1024 1024"
    fill="currentColor"
    v-bind="$attrs"
  ><path d="M576 96v710.016l-243.008-243.008q-12.992-12.992-30.496-8.512t-22.496 22.496T288 608l296.992 296.992q7.008 7.008 16.512 8.992t18.496-2.016 14.496-11.488 5.504-17.504V95.968q0-14.016-8.992-23.008T608 63.968t-23.008 8.992-8.992 23.008z" />
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
