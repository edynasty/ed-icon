<template>
  <svg
    :width="size"
    :height="size"
    :style="{ color: color }"
    viewBox="0 0 1024 1024"
    fill="currentColor"
    v-bind="$attrs"
  ><path d="M96 96h64v832H96z" fill="#000000" /><path d="M928 864v64H96v-64z" fill="#000000" /><path d="M307.2 435.2h192v211.2H307.2V435.2z m64 64v83.2h64V499.2H371.2zM627.2 288h192v448H627.2V288z m64 384h64V352h-64v320z" fill="#000000" /><path d="M377.6 352h44.8v83.2h-44.8z" fill="#000000" /><path d="M454.4 352v44.8H345.6v-44.8zM697.6 204.8h44.8v108.8h-44.8z" fill="#000000" /><path d="M774.4 204.8v44.8h-108.8v-44.8zM774.4 774.4v44.8h-108.8v-44.8zM377.6 646.4h44.8v83.2h-44.8z" fill="#000000" /><path d="M697.6 710.4h44.8v108.8h-44.8zM454.4 684.8v44.8H345.6v-44.8z" fill="#000000" />
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
