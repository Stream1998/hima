<template>
  <view class="classify-layout page-bg">
    <custom-nav-bar title="分类"></custom-nav-bar>
    <view class="theme-list">
      <theme-item v-for="item in 12" :key="item" @click="toDetail"></theme-item>
    </view>
  </view>
</template>

<script setup>
const toDetail = () => {
  uni.navigateTo({
    url: '/pages/classify/detail'
  })
}
</script>

<style lang="scss" scoped>
.classify-layout {
  margin: 30rpx 0;
  padding: 0 15rpx;
  .theme-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15rpx;
  }
}
</style>
