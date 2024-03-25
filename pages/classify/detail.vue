<template>
  <view class="detail-layout">
    <image 
      v-for="item in 12" 
      :key="item" 
      class="image" 
      src="../../common/images/classify2.jpg"
      mode="aspectFill"
      @tap="preview"
    ></image>
  </view>
</template>

<script setup>
const preview = () => {
  uni.navigateTo({
    url: "/pages/preview/preview"
  })
}  
</script>

<style lang="scss" scoped>
.detail-layout {
    display: grid;
    gap: 5rpx;
    padding: 5rpx;
    grid-template-columns: repeat(3, 1fr);
    .image {
      display: block;
      width: 100%;
      height: 345rpx;
    }
  }
</style>
