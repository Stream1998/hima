<template>
  <view class="user-layout page-bg">
    <view class="info flex-center">
      <image class="avatar" src="../../static/images/logo.png" mode="aspectFill"></image>
      <text class="nickname">良月玖</text>
      <text class="address">归属地：广东</text>
    </view>
    
    <uni-list class="section">
      <uni-list-item show-extra-icon :extra-icon="downloadIcon" link title="我的下载"  rightText="0"/>
      <uni-list-item show-extra-icon :extra-icon="rateIcon" link title="我的评分" rightText="0" />
      <uni-list-item show-extra-icon :extra-icon="contactIcon" link title="联系客服" />
    </uni-list>
    
    <uni-list class="section">
      <uni-list-item show-extra-icon :extra-icon="updateIcon" link title="订阅更新" />
      <uni-list-item show-extra-icon :extra-icon="questionIcon" link title="常见问题" />
    </uni-list>
  </view>
</template>

<script setup>
import { ref } from 'vue';
const commonConfig = {
  color: '#27b48d',
  size: '22',
}
const downloadIcon = ref({
  ...commonConfig,
  type: 'download-filled'
});
const rateIcon = ref({
  ...commonConfig,
  type: 'star-filled'
});
const contactIcon = ref({
  ...commonConfig,
  type: 'chatboxes-filled'
});
const updateIcon = ref({
  ...commonConfig,
  type: 'notification-filled'
});
const questionIcon = ref({
  ...commonConfig,
  type: 'flag-filled'
});
</script>

<style lang="scss" scoped>
.user-layout {
  .info {
    display: flex;
    flex-direction: column;
    height: 400rpx;
    gap: 15rpx;
    .avatar {
      width: 160rpx;
      height: 160rpx;
      border-radius: 50%;
      display: block;
    }
    .nickname {
      font-size: 36rpx;
    }
    .address {
      font-size: 30rpx;
      color: #999;
    }
  }
  .section {
    margin: 30rpx;
    border-radius: 10rpx;
    overflow: hidden;
    box-shadow: 2rpx 2rpx 5rpx #999;
  }
  .section + .section {
    margin-top: 60rpx;
  }
}
</style>
