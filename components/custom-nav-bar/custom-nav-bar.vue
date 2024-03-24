<template>
	<view class="placeholder" :style="{ height: getStatusBarHeight() + getMenuButtonHeight() + 'px' }"></view>
	<view class="navbar" :style="{ height: getMenuButtonHeight() + 'px'}">
		<view class="title">{{title}}</view>
    <view class="search">
      <uni-icons type="search" size="20"></uni-icons>
      <text class="text">搜索</text>
    </view>
	</view>
</template>

<script setup>
import { getStatusBarHeight, getMenuButtonHeight } from "@/utils/system.js";

defineProps({
  title: {
    type: String,
    default: '标题'
  }
})
</script>

<style lang="scss" scoped>
.placeholder {}
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  padding: 0 30rpx;
  display: flex;
  align-items: center;
  background:
    linear-gradient(to bottom, transparent, #fff 400rpx),
    linear-gradient(to right, $uni-color-primary, #f5e3d9);
  .title {
    font-size: 42rpx;
    font-weight: bold;
  }
  .search {
    display: flex;
    align-items: center;
    padding: 0 6rpx;
    margin-left: 28rpx;
    border: 1px solid #f1fff6;
    background-color: #e9f6ef;
    width: 224rpx;
    height: 80%;
    border-radius: 100vmax;
    .text {
      display: block;
      margin-left: 12rpx;
      color: $uni-text-color-placeholder;
    }
  }
}
</style>