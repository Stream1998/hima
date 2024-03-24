<template>
  <section class="section-layout">
    <view class="section-header">
      <text class="title">{{title}}</text>
      <slot name="right">
        <text class="more">更多</text>
      </slot>
    </view>
    <slot></slot>
  </section>
</template>

<script setup>
  defineProps({
    title: {
      type: String,
      default: '标题'
    }
  })
</script>

<style lang="scss" scoped>
  .section-layout {
    margin: 0 30rpx;
    padding: 60rpx 0;
    .section-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 35rpx;
      .title {
        font-size: 40rpx;
        font-weight: bold;
      }
    }
  }
  .section-layout + .section-layout {
    padding-top: 0;
  }
</style>