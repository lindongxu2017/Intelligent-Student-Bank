<template>
	<div class="sectionThree">
		<div class="content">
			<div class="cell-title">
				<div class="en">our teacherers</div>
				<div class="cn">我们的老师</div>
			</div>
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="(item, index) in list" :key="index">
						<div class="swiper-slide-content">
							<img :src="item.avatar">
							<div class="info">
								<div class="username">
									<el-row>
										<el-col :span="12" class="username">
											<span v-html="item.name"></span>
										</el-col>
										<el-col class="occupation" :span="12">
											<svg t="1564829970314" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
											 p-id="5690" width="20" height="20">
												<path d="M512 251.733333a89.6 89.6 0 1 1 0.021333 179.178667A89.6 89.6 0 0 1 512 251.733333m0 384c126.933333 0 260.266667 62.08 260.266667 89.6v46.933334H251.733333V725.333333c0-27.52 133.333333-89.6 260.266667-89.6M512 170.666667c-94.293333 0-170.666667 76.373333-170.666667 170.666666 0 94.08 76.373333 170.666667 170.666667 170.666667s170.666667-76.586667 170.666667-170.666667c0-94.293333-76.373333-170.666667-170.666667-170.666666z m0 384c-113.706667 0-341.333333 56.96-341.333333 170.666666v128h682.666666v-128c0-113.706667-227.626667-170.666667-341.333333-170.666666z"
												 fill="#072A40" p-id="5691"></path>
											</svg>
											<span style="margin-left: 5px;" v-html="item.occupation"></span>
										</el-col>
									</el-row>
								</div>
								<div class="intro" v-html="item.intro"></div>
							</div>
						</div>
					</div>
				</div>
				<!-- 如果需要导航按钮 -->
				<!-- <div class="swiper-button-prev">
					<icon name="chevron-left"></icon>
				</div> -->
				<div class="swiper-button-next">
					<icon name="chevron-right"></icon>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'sectionThree',
		data() {
			return {
				list: [{
						avatar: require('@/assets/banner.png'),
						name: 'dannery',
						intro: '国际资深外教，毕业于斯坦福大学，从事教育事业10年',
						occupation: '英语老师'
					},
					{
						avatar: require('@/assets/banner.png'),
						name: 'dannery',
						intro: '国际资深外教，毕业于斯坦福大学，从事教育事业10年',
						occupation: '英语老师'
					},
					{
						avatar: require('@/assets/banner.png'),
						name: 'dannery',
						intro: '国际资深外教，毕业于斯坦福大学，从事教育事业10年',
						occupation: '英语老师'
					},
					{
						avatar: require('@/assets/banner.png'),
						name: 'dannery',
						intro: '国际资深外教，毕业于斯坦福大学，从事教育事业10年',
						occupation: '英语老师'
					},
					{
						avatar: require('@/assets/banner.png'),
						name: 'dannery',
						intro: '国际资深外教，毕业于斯坦福大学，从事教育事业10年',
						occupation: '英语老师'
					},
					{
						avatar: require('@/assets/banner.png'),
						name: 'dannery',
						intro: '国际资深外教，毕业于斯坦福大学，从事教育事业10年',
						occupation: '英语老师'
					}
				]
			}
		},
		mounted() {
			var swiper = new Swiper('.swiper-container', {
				slidesPerView: 3,
				centeredSlides: true,
				loop: true,
				navigation: {
					nextEl: '.swiper-button-next',
					// prevEl: '.swiper-button-prev',
				},
			});

		},
		methods: {
			callback(e) {
				console.log(e)
			}
		}
	}
</script>

<style>
	.swiper-wrapper {
		height: 556px;
	}

	.swiper-container {
		width: 100%;
		height: 100%;
	}

	.swiper-slide {
		text-align: center;
		font-size: 18px;
		background: #fff;

		/* Center slide text vertically */
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		align-items: center;
		transition: 300ms;
		transform: scale(0.9) translateY(-14px);
	}

	.swiper-slide-active,
	.swiper-slide-duplicate-active {
		transform: scale(1);
	}

	.swiper-button-prev,
	.swiper-button-next {
		width: 100px;
		height: 100px;
		background-color: #77EAEA;
		background-image: none;
		line-height: 100px;
		text-align: center;
		font-size: 30px;
		color: #fff;
	}

	.swiper-button-prev {
		left: 0;
	}

	.swiper-button-next {
		right: 0;
	}
</style>

<style scoped>
	.sectionThree {
		padding-bottom: 97px;
	}

	.cell-title {
		margin-bottom: 60px;
	}

	.en {
		font-size: 15px;
		font-weight: 400;
		color: rgba(0, 0, 0, 1);
		opacity: 1;
		margin-bottom: 15px;
		letter-spacing: 5px;
	}

	.cn {
		font-size: 50px;
		font-weight: bold;
		line-height: 66px;
		color: rgba(0, 0, 0, 1);
		opacity: 1;
	}

	.swiper-slide img {
		width: 100%;
	}

	.swiper-slide-content {
		box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.16);
		font-size: 0;
	}

	.info {
		padding: 30px;
	}

	.username {
		font-size: 15px;
		margin-bottom: 10px;
		text-align: left;
	}

	.occupation {
		text-align: right;
		vertical-align: middle;
		display: flex;
		justify-content: flex-end;
	}

	.intro {
		font-size: 30px;
		text-align: left;
		font-weight: bold;
		line-height: 40px;
		color: rgba(0, 0, 0, 1);
		opacity: 1;
		display: -webkit-box;
		word-break: break-all;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.fa-icon {
		width: 20px;
		height: 20px;
	}
</style>
