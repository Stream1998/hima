<template>
	<view>
		<view class="menu">
			<uni-segmented-control :current="current" :values="values" @clickItem="onClickItem" styleType="button"
				activeColor="#4cd964"></uni-segmented-control>
		</view>
		<view class="animal-list">
			<view class="animal-item" v-for="(item, index) in animals" :key="item._id" @click="preview(index)">
				<image :src="item.url" lazy-load mode="widthFix"></image>
				<view class="info">
					<view class="content">{{item.content}}</view>
					<view class="author">——{{item.author}}</view>
				</view>
			</view>
		</view>
		<view class="float">
			<view class="item" @click="onRefresh">
				<uni-icons type="refreshempty" size="26"></uni-icons>
			</view>
			<view class="item" @click="onTop">
				<uni-icons type="arrow-up" size="26"></uni-icons>
			</view>
		</view>
		<view class="loadMore">
			<uni-load-more status="more"></uni-load-more>
		</view>
	</view>
</template>

<script setup>
	import {
		computed,
		ref
	} from 'vue';
	import {
		onPullDownRefresh,
		onLoad,
		onReachBottom
	} from '@dcloudio/uni-app'

	const animals = ref([]);
	const current = ref(0);
	const menuItems = [{
			key: 'all',
			value: '全部'
		},
		{
			key: 'cat',
			value: '猪咪'
		},
		{
			key: 'dog',
			value: '修狗'
		},
	]
	const values = computed(() => menuItems.map(v => v.value));

	// 修改分类
	const onClickItem = (e) => {
		current.value = e.currentIndex;
		animals.value = [];
		getAnimals()
	}

	// 获取当前动物类型
	const getCurrentType = () => {
		return menuItems[current.value].key;
	}

	// 获取动物列表
	const getAnimals = () => {
		uni.showLoading();
		uni.showNavigationBarLoading();
		uni.request({
				url: "https://tea.qingnian8.com/tools/petShow",
				data: {
					size: 5,
					type: getCurrentType(),
				}
			}).then(res => {
				console.log(res)
				if (res && res.data.errCode !== 0) {
					uni.showToast({
						title: res.errMsg,
					})
					return;
				}
				animals.value.push(...res.data.data);
			}).catch(err => {
				uni.showToast({
					title: err
				})
			})
			.finally(() => {
				uni.hideLoading();
				uni.stopPullDownRefresh();
				uni.hideNavigationBarLoading();
			})
	}

	// 预览图片
	const preview = (current) => {
		const urls = animals.value.map(v => v.url);
		uni.previewImage({
			current,
			urls
		})
	}

	// 刷新
	const onRefresh = () => {
		uni.startPullDownRefresh();
	}

	// 回到顶部
	const onTop = () => {
		uni.pageScrollTo({
			scrollTop: 0,
			duration: 100
		})
	}

	onLoad(() => {
		getAnimals();
	})

	// 下拉刷新
	onPullDownRefresh(() => {
		current.value = 0;
		animals.value = [];
		getAnimals();
	})

	// 触底加载更多
	onReachBottom(() => {
		getAnimals();
	})
</script>

<style lang="scss">
	.menu {
		margin: 50rpx;
	}

	.animal-list {
		.animal-item {
			margin: 50rpx;
			box-shadow: 2rpx 2rpx 30rpx #999;
			border-radius: 20rpx;

			image {
				width: 100%;
			}

			.info {
				padding: 20rpx;
				font-size: 32rpx;
				background-color: rgba(255, 255, 255);

				.content {
					color: #333;
				}

				.author {
					color: #999;
					text-align: right;
					margin-top: 12rpx;
				}
			}
		}
	}

	.float {
		position: fixed;
		right: 50rpx;
		bottom: calc(env(safe-area-inset-bottom) + 50rpx);

		.item {
			width: 90rpx;
			height: 90rpx;
			background-color: #fff;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 50%;
			border: 1rpx solid #ccc;

		}

		.item+.item {
			margin-top: 20rpx;
		}
	}

	.loadMore {
		padding: calc(env(safe-area-inset-bottom) + 50rpx);
	}
</style>