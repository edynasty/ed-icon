<template>
  <svg
    :width="size"
    :height="size"
    :style="{ color: color }"
    viewBox="0 0 1024 1024"
    fill="currentColor"
    v-bind="$attrs"
  ><path d="M541.397333 144.917333a64 64 0 0 1 90.517334 0l300.501333 300.501334a64 64 0 0 1 0 90.496L646.954667 821.376l291.690666-0.042667 0.021334 85.333334H318.144a64 64 0 0 1-45.226667-18.752l-192-192a64 64 0 0 1 0-90.496L541.397333 144.917333z m-15.082666 676.48l32.021333-32.042666L288 518.997333 156.330667 650.666667l170.666666 170.666666 199.317334 0.064zM348.330667 458.666667L618.666667 729.002667 856.96 490.666667 586.666667 220.330667 348.330667 458.666667z" fill="#4E5969" />
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
