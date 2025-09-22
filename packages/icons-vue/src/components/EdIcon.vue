<template>
  <span
    :class="['ed-icon', { 'ed-icon--spin': spin }]"
    :style="{
      fontSize: computedSize,
      color: color,
    }"
    v-bind="$attrs"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  size?: string | number;
  color?: string;
  spin?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  size: "1em",
  spin: false,
});

const computedSize = computed(() => {
  if (typeof props.size === "number") {
    return `${props.size}px`;
  }
  return props.size;
});
</script>

<style scoped>
.ed-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  vertical-align: middle;
}

.ed-icon--spin {
  animation: ed-icon-spin 2s linear infinite;
}

@keyframes ed-icon-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
