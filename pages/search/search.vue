<template>
  <view class="search-layout">
    <uni-search-bar class="search" v-model="keyword" @confirm="search"></uni-search-bar>
    <view class="recent">
      <view class="header">
        <text class="title">最近搜索</text>
        <uni-icons type="trash" size="30" @click="clear"></uni-icons>
      </view>
      <view class="keyword-list">
        <view v-for="item in recentList" :key="item" class="keyword" @click="search({value: item})">{{item}}</view>
      </view>
    </view>
    <view class="hot">
      <text class="title">热门搜索</text>
      <view class="keyword-list">
        <view v-for="item in hotList" :key="item" class="keyword" @click="search({value: item})">{{item}}</view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';
const keyword = ref('');

const recentList = ref(['孟子义', '大海边', '美女', '帅哥', '宠物', '卡通', '刘诗诗', '热巴']);
const hotList = ref(['美女', '帅哥', '宠物', '卡通']);

const search = (e) => {
  keyword.value = e.value;
  if(!recentList.value.includes(e.value)) {
    recentList.value.unshift(e.value);
  }
  uni.navigateTo({
    url: '/pages/classify/detail'
  })
}

const clear = () => {
  recentList.value = [];
}
</script>

<style lang="scss" scoped>
.search-layout {
  padding: 30rpx;
  .search {
        padding: 0;
  }
  .recent,.hot {
    margin-top: 30rpx;
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .title {
      font-size: 30rpx;
      color: #a5a5a5;
    }
    .keyword-list {
      display: flex;
      flex-wrap: wrap;
      gap: 15rpx;
      margin: 50rpx 0;
      .keyword {
        padding: 20rpx 24rpx;
        font-size: 26rpx;
        color: #2a2a2a;
        border-radius: 100vmax;
        background-color: #f4f4f4;
      }
    }
  }
}
</style>
