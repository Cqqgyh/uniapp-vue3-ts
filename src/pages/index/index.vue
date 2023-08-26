<template>
  <view>
    home2
    <loading-button type="default" :clickFun="demo">测试loading-button</loading-button>
  </view>
</template>
<script setup lang="ts">
function demo() {
  console.log('123999123999123999')
}
</script>

<style scoped lang="scss"></style>
