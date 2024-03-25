<template>
  <view class="popup-wrapper" :style="[borderRadiusStyle]">
    <view class="header">
      <view></view>
      <text class="title">{{title}}</text>
      <uni-icons type="closeempty" size="20" @click="emit('close')"></uni-icons>
    </view>
    <scroll-view scroll-y>
      <slot></slot>
    </scroll-view>
  </view>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  type: {
    type: String,
    validate(value){
      return ['center', 'bottom', 'left', 'top', 'right'].includes(value) ? value : 'center';
    },
    default: 'center'
  },
  title: {
    type: String,
    default: '标题'
  }
})
const emit = defineEmits(['close']);
const radiusMap = {
  'center': { 'border-radius': '20rpx' },
  'bottom': { 'border-radius': '20rpx 20rpx 0 0'},
  'top': { 'border-radius': '0' },
  'left': { 'border-radius': '0' },
  'right': { 'border-radius': '0' },
}
const borderRadiusStyle = computed(() => radiusMap[props.type]);
</script>

<style lang="scss" scoped>
.popup-wrapper {
  background-color: #fff;
  padding: 40rpx 20rpx;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20rpx;
  }
  .scroll-view {
    max-height: 60vh;
  }
}
</style>