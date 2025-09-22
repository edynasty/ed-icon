<template>
  <svg
    :width="size"
    :height="size"
    :style="{ color: color }"
    viewBox="0 0 1024 1024"
    fill="currentColor"
    v-bind="$attrs"
  ><path d="M102.4 307.2v614.4h204.8V307.2H102.4z m136.52992 546.14016h-68.25984V375.47008h68.25984v477.87008zM716.8 102.4v819.2h204.8V102.4H716.8z m136.52992 750.94016h-68.25984V170.67008h68.25984v682.67008zM409.6 512v409.6h204.8V512H409.6z m136.52992 341.34016h-68.25984V580.25984h68.25984v273.08032z" />
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
