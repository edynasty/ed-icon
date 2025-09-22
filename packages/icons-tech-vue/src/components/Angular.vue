<template>
  <svg
    :width="size"
    :height="size"
    :style="{ color: color }"
    viewBox="0 0 1024 1024"
    fill="currentColor"
    v-bind="$attrs"
  ><path d="M435.8 536.2H512V353z" fill="#DD0031" /><path d="M400.9 616.8l-52.4 130.8h-97.2L512 163V64L94.9 212.7l63.6 551.5L512 960V616.8z" fill="#DD0031" /><path d="M512 353v183.2h76.2z" fill="#C3002F" /><path d="M512 64v99l259.8 584.6h-97.2l-52.4-130.8H512V960l353.5-195.8 63.6-551.5z" fill="#C3002F" />
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
