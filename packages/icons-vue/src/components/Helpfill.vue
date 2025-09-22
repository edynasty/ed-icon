<template>
  <svg
    :width="size"
    :height="size"
    :style="{ color: color }"
    viewBox="0 0 1024 1024"
    fill="currentColor"
    v-bind="$attrs"
  ><path d="M927.008 480h-226.016q-11.008-60.992-53.504-103.488T544 323.008V96.992q156.992 15.008 262.496 120.512T927.008 480z m0 64q-15.008 156.992-120.512 262.496T544 927.008v-226.016q60.992-11.008 103.488-53.504T700.992 544h226.016zM96.992 544h226.016q11.008 60.992 53.504 103.488T480 700.992v226.016q-156.992-15.008-262.496-120.512T96.992 544z m0-64q15.008-156.992 120.512-262.496T480 96.992v226.016q-60.992 11.008-103.488 53.504T323.008 480H96.992z" />
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
