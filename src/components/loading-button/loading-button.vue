<template>
  <button :class="[type]" @click="clickHandle" type="default" :loading="loading" :size="size" :plain="plain" :disabled="disabled">
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
import { PropType } from 'vue'
const props = defineProps({
  clickFun: {
    type: Function,
    default: () => {}
  },
  plain: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  size: {
    type: String as PropType<'default' | 'mini'>,
    default: 'default'
  },
  type: {
    type: String as PropType<'primary' | 'success' | 'warning' | 'danger' | 'default'>,
    default: 'default'
  }
})
const loading = ref(false)
async function clickHandle() {
  try {
    loading.value = true
    await props.clickFun()
    // loading.value = false
    setTimeout(() => {
      loading.value = false
    }, 100)
  } catch (error) {
    console.log(error)
    loading.value = false
  }
}
</script>

<style scoped lang="scss">
.primary {
  background-color: $uni-color-primary;
  color: $uni-text-color-inverse;
}
.success {
  background-color: $uni-color-success;
  color: $uni-text-color-inverse;
}
.warning {
  background-color: $uni-color-warning;
  color: $uni-text-color-inverse;
}
.danger {
  background-color: $uni-color-error;
  color: $uni-text-color-inverse;
}
.default {
  color: $uni-text-color;
}
</style>
