<template>
  <view class="theme-item">
    <view v-show="status" class="content">
      <image class="image" src="../../common/images/classify1.jpg" mode="aspectFill"></image>
      <view class="mask flex-center">明星美女</view>
      <view class="updated">2月前更新</view>
    </view>
    <view v-show="!status" class="content more">
      <image class="image" src="../../common/images/more.jpg" mode="aspectFill"></image>
      <view class="mask flex-center">
        <uni-icons type="more-filled" size="30" color="#fff"></uni-icons>
        <text>更多</text>
      </view>
    </view>
  </view>
</template>

<script setup>
  defineProps({
    status: {
      type: Boolean,
      default: true,
    }
  })
</script>

<style lang="scss" scoped>
  .theme-item {
    position: relative;
    height: 345rpx;
    border-radius: 10rpx;
    overflow: hidden;
    .content {
      width: 100%;
      height: 100%;
      .image {
        width: 100%;
        height: 100%;
      }
      .mask {
        position: absolute;
        bottom: 0;
        height: 20%;
        left: 0;
        right: 0;
        background-color: rgba(255,255,255,0.2);
        backdrop-filter: blur(20rpx);
        color: #fff;
        letter-spacing: 2rpx;
      }
      .updated {
        position: absolute;
        left: 0;
        top: 0;
        font-size: 24rpx;
        padding: 10rpx 15rpx;
        background-color: rgba(243, 151, 133, 0.9);
        backdrop-filter: blur(20rpx);
        color: #fff;
        border-radius: 0 0 10rpx 0;
        transform-origin: left top;
        transform: scale(0.8);
        &::before {
          content: '';
          display: inline-block;
          width: 10rpx;
          height: 10rpx;
          background-color: #fff;
          border-radius: 50%;
          margin-right: 5rpx;
          vertical-align: 4rpx;
        }
      }
    }
    .content.more {
      .mask {
        height: 100%;
        bottom: 0;
        left: 0;
        right: 0;
        flex-direction: column;
        color: #fff;
      }
    }
    
  }
</style>