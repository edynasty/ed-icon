<template>
  <svg
    :width="size"
    :height="size"
    :style="{ color: color }"
    viewBox="0 0 640 640"
    fill="currentColor"
    v-bind="$attrs"
  ><path d="M24.863 284.035C43.63 136.065 144.605 1.866 325.563-.012 434.783 2.102 524.642 51.615 578.147 145.95c26.882 49.217 35.232 100.974 36.98 158.069v67.123l-401.532-.012c1.866 165.593 243.712 159.947 347.803 86.977v134.86c-60.993 36.627-199.325 69.344-306.417 27.225C163.775 585.963 98.777 490.47 99.143 398.603c-2.988-119.092 59.222-197.955 155.837-242.838-20.492 25.359-36.095 53.363-44.22 101.871H437.45s13.252-135.498-128.317-135.498c-133.49 4.642-229.715 82.23-284.177 161.848l-.094.047z" />
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
