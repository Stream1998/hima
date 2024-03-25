<template>
  <view class="preview-layout">
    <swiper circular  :current="current" @change="changeCurrent">
      <swiper-item v-for="item in 5" :key="item">
        <image class="image" src="../../common/images/preview2.jpg"   @click="toggleMask" mode="aspectFill"></image>
      </swiper-item>
    </swiper>
      
    <view class="mask" v-show="showMask" @click="toggleMask">
      <view 
        class="back flex-center"
        :style="{
          top: getStatusBarHeight() + 'px', 
          width: getMenuButtonHeight() + 'px', 
          height: getMenuButtonHeight() + 'px'
        }"
        @click.stop="goBack"
      >
        <uni-icons type="left" size="30" color="#fff"></uni-icons>
      </view>
      <view class="indicator">{{current}} / 5</view>
      <view class="time">
        <uni-dateformat :date="new Date()" format="hh:mm"></uni-dateformat>
      </view>
      <view class="date">
        <uni-dateformat :date="new Date()" format="MM月dd日"></uni-dateformat>
      </view>
      <view class="box">
        <view class="item flex-center" @click.stop="showInfoPopup">
          <uni-icons type="info" size="30"></uni-icons>
          <text>信息</text>
        </view>
        <view class="item flex-center" @click.stop="showRatePopup">
          <uni-icons type="star" size="30"></uni-icons>
          <text>{{rate}}分</text>
        </view>
        <view class="item flex-center">
          <uni-icons type="download" size="30"></uni-icons>
          <text>下载</text>
        </view>
      </view>
    </view>
    <uni-popup ref="infoPopup" type="bottom">
    	<popup-wrapper type="bottom" title="壁纸信息" @close="infoPopup.close()">
        <template #default>
          <view class="info-popup">
            <view class="row">
              <view class="label">壁纸ID：</view>
              <text class="value" selectable>658bc0d56e5d2d7187185309</text>
            </view>
            <view class="row">
              <view class="label">发布者：</view>
              <text class="value" selectable>小猫爱吃鱼</text>
            </view>
            <view class="row">
              <view class="label">评分：</view>
              <view class="value">
                <uni-rate v-model="rate" readonly allowHalf :touchable="false" size="16" /> 
                <text class="rate">{{rate}}分</text>
              </view>
            </view>
            <view class="row">
              <view class="label">摘要：</view>
              <text class="value">张婧仪一袭金色礼服端庄大气。图源：微博@张婧仪</text>
            </view>
            <view class="row">
              <view class="label">标签：</view>
              <view class="value">
                <uni-tag v-for="(item, index) in labels" :key="index" :text="item" circle inverted custom-style="border-color: #27b48d;color: #27b48d;"></uni-tag>
              </view>
            </view>
          </view>
        </template>
      </popup-wrapper>
    </uni-popup>
    <uni-popup ref="ratePopup">
      <popup-wrapper type="center" title="评分" @close="ratePopup.close()">
        <view class="rate-popup">
          <view class="rate flex-center">
            <uni-rate v-model="selfRate" allowHalf size="32" /> 
            <text class="score">{{selfRate}}分</text>
          </view>
          <button class="confirm" @click="confirmRate">确认评分</button>
        </view>
      </popup-wrapper>
    </uni-popup>
  </view>
</template>

<script setup>
import {getMenuButtonHeight,getStatusBarHeight} from '@/utils/system.js'; 
import { ref } from 'vue';
const showMask = ref(false);
const current = ref(1);
const rate = ref(5);
const selfRate = ref(5);
const infoPopup = ref(null);
const ratePopup = ref(null);
const labels = ref(['张婧仪', '女神']);

const toggleMask = () => {
  showMask.value = !showMask.value;
}

const goBack = () => {
  uni.navigateBack();
}

const changeCurrent = (e) => {
  current.value = e.detail.current;
}

const showInfoPopup = () => {
  infoPopup.value.open()
}

const showRatePopup = () => {
  ratePopup.value.open()
}

const confirmRate = () => {
  rate.value = selfRate.value;
  ratePopup.value.close();
}
</script>

<style lang="scss" scoped>
.preview-layout {
  position: relative;
  width: 100%;
  height: 100vh;
  swiper {
    width: 100%;
    height: 100%;
    swiper-item {
      width: 100%;
      height: 100%;
      .image {
        width: 100%;
        height: 100%;
      }
    }
  }
  
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    & > view {
      position: absolute;
      left: 0;
      right: 0;
      width: fit-content;
      margin: 0 auto;
      color: #fff;
    }
    .back {
      position: absolute;
      left: 30rpx;
      right: unset;
      border: 1px solid #999;
      border-radius: 50%;
    }
    .indicator {
      top: 10vh;
      padding: 12rpx 15rpx;
      border-radius: 100vmax;
      background-color: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(20rpx);
      text-align: center;
      font-size: 24rpx;
    }
    .time {
      top: calc(10vh + 80rpx);
      font-size: 105rpx;
    }
    .date {
      top: calc(10vh + 220rpx);
      font-size: 30rpx;
    }
    
    .box {
      bottom: 10vh;
      width: 490rpx;
      height: 120rpx;
      display: flex;
      align-items: center;
      justify-content: space-around;
      border-radius: 120rpx;
      background-color: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(20rpx);
      .item {
        flex-direction: column;
        color: #766f69;
        padding: 0 15rpx;
      }
    }
  }
  
  .info-popup {
    .row {
      display: flex;
      .label {
        width: 140rpx;
        text-align: right;
      }
      .value {
        display: flex;
        flex: 1;
        align-items: center;
        gap: 10rpx;
        line-height: 1.7em;
      }
    }
    .row + .row {
      margin-top: 20rpx;
    }
    .rate {
      font-size: 30rpx;
    }
  }
  .rate {
    color: #ffca3e;
  }
  .rate-popup {
    min-width: 60vw;
    padding: 20rpx;
    .rate {
      gap: 20rpx;
      font-size: 40rpx;
      margin-bottom: 40rpx;
      .score {
        width: 100rpx;
      }
    }
  }
}
</style>
