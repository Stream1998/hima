<template>
  <view class="index-layout page-bg">
    <custom-nav-bar title="壁纸"></custom-nav-bar>
    <view class="banner">
      <swiper autoplay indicator-dots indicator-color="rgba(255,255,255,0.5)" indicator-active-color="rgba(255,255,255)" circular>
        <swiper-item>
            <image src="../../common/images/banner1.jpg" mode="aspectFill"></image>
        </swiper-item>
        <swiper-item>
            <image src="../../common/images/banner2.jpg" mode="aspectFill"></image>
        </swiper-item>
        <swiper-item>
            <image src="../../common/images/banner3.jpg" mode="aspectFill"></image>
        </swiper-item>
      </swiper>
    </view>
    <view class="notice">
      <view class="left flex-center">
        <view class="icon primary">
          <uni-icons type="sound-filled" size="20"></uni-icons>
        </view>
        <text class="title">公告</text>
      </view>
      <swiper vertical autoplay circular touchable="false" class="center">
        <swiper-item v-for="item in 3" :key="item" class="flex-center">
          <view class="content">消息通知消息通知消息通知消息通知消息通知</view>
        </swiper-item>
        
      </swiper>
      <uni-icons class="right" type="right" size="20"></uni-icons>
    </view>
    
    <common-section title="每日推荐" class="daily-recommend">
      <template #right>
        <view class="right">
          <view class="icon primary">
            <uni-icons type="calendar" size="20"></uni-icons>
          </view>
          <uni-dateformat :date="new Date()" format="dd号"></uni-dateformat>
        </view>
      </template>
      <template #default>
        <scroll-view scroll-x class="image-list">
          <image class="image" v-for="item in 8" :key="item" src="../../common/images/preview_small.webp" mode="aspectFill"></image>
        </scroll-view>
      </template>
    </common-section>
    
    <common-section title="专题精选" class="theme-handpick">
      <template #right>
        <text class="right">More+</text>
      </template>
      <template #default>
        <view class="theme-list">
          <theme-item v-for="item in 8" :key="item" @tap="toDetail"></theme-item>
          <theme-item :status="false" @tap="goClassify"></theme-item>
        </view>
      </template>
    </common-section>
  </view>
</template>

<script setup>
const goClassify = () => {
  uni.switchTab({
    url: '/pages/classify/classify'
  })
}
	const toDetail = () => {
  uni.navigateTo({
    url: '/pages/classify/detail'
  })
}
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 344rpx;
  margin: 30rpx 0;
  swiper {
    width: 100%;
    height: 100%;
    swiper-item {
      width: 100%;
      height: 100%;
      padding: 0 30rpx;
      image {
        width: 100%;
        height: 100%;
        border-radius: 10rpx;
        overflow: hidden;
      }
    }
  }
}
.notice {
  display: flex;
  padding: 0 24rpx;
  margin: 0 15px;
  height: 80rpx;
  border-radius: 80rpx;
  align-items: center;
  justify-content: space-between;
  background-color: #f9f9f9;
  .left {
    color: $brand-primary-color;
    .title {
      display: inline-block;
      margin-left: 5rpx;
    }
  }
  .center {
    flex: 1;
    height: 100%;
    overflow: hidden;
    padding: 0 15px;
    .content {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    
  }
}
.daily-recommend {
  .right {
    display: flex;
    align-items: center;
    gap: 5rpx;
    color: $brand-primary-color;
  }
  .image-list {
    display: flex;
    white-space: nowrap;
    .image {
      display: inline-block;
      width: 200rpx;
      height: 445rpx;
      border-radius: 10rpx;
    }
    .image + .image {
      margin-left: 15rpx;
    }
  }
}
.theme-handpick {
  .right {
    color: #858585;
    font-size: 30rpx;
  }
  .theme-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15rpx;
  }
}
</style>
