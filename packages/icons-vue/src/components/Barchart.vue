<template>
  <svg
    :width="size"
    :height="size"
    :style="{ color: color }"
    viewBox="0 0 1170 1024"
    fill="currentColor"
    v-bind="$attrs"
  ><path d="M365.714286 512v292.571429H219.428571V512h146.285715z m219.428571-292.571429v585.142858H438.857143V219.428571h146.285714z m585.142857 658.285715v73.142857H0V73.142857h73.142857v804.571429h1097.142857z m-365.714285-512v438.857143h-146.285715V365.714286h146.285715z m219.428571-219.428572v658.285715h-146.285714V146.285714h146.285714z" />
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
