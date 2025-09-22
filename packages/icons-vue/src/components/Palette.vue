<template>
  <svg
    :width="size"
    :height="size"
    :style="{ color: color }"
    viewBox="0 0 1024 1024"
    fill="currentColor"
    v-bind="$attrs"
  ><path d="M558.4 34.24a480 480 0 0 0-139.2 947.84h4.48a121.92 121.92 0 0 0 135.68-157.12C523.84 711.04 593.92 672 643.2 672h115.2c398.4 0 229.44-597.12-200-637.76zM160 384a96 96 0 1 1 96 96 96 96 0 0 1-96-96z m128 384a96 96 0 1 1 96-96 96 96 0 0 1-96 96z m224-448a96 96 0 1 1 96-96 96 96 0 0 1-96 96z m256 160a96 96 0 1 1 96-96 96 96 0 0 1-96 96z" fill="#231F20" />
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
