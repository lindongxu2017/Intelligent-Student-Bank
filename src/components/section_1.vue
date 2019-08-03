<template>
	<div class="sectionOne">
		<div class="content">
			<el-row type="flex">
				<el-col :span="8">
					<div class="left-info">						
						<div class="title-cn">智能学习系统</div>
						<div class="title-en">Intelligent learning system</div>
						<div class="intro">线上智能学习统统整合方案，全新沉浸式体验服务</div>
						<div class="check-more">
							<el-row>
								<el-col :span="19">
									<div class="text">了解详情</div>
								</el-col>
								<el-col :span="5">
									<div class="arrow">
										<icon name="arrow-right"></icon>
									</div>
								</el-col>
							</el-row>
						</div>
					</div>
				</el-col>
				<el-col :span="15" :offset="1">
					<div class="carousel-wrapper">
						<el-carousel :interval="3000" arrow="never" :height="'563px'">
							<el-carousel-item v-for="item in 3" :key="item">
								<img class="banner-img" src="../assets/banner.png">
							</el-carousel-item>
						</el-carousel>
					</div>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'sectionOne',
		data() {
			return {

			}
		}
	}
</script>

<style scoped>
	.sectionOne {
		padding: 160px 0 155px;
	}
	.left-info {
		padding-top: 55px;
		position: relative;
		height: 100%;
	}
	.check-more {
		position: absolute;
		width: 130%;
		left: 0;
		bottom: 37%;
		background-color: #1B7FBD;
		z-index: 101;
		line-height: 59px;
		text-align: center;
		box-shadow:0px 3px 31px rgba(0,0,0,0.16);
		cursor: pointer;
	}
	.check-more:hover {
		opacity: 0.8;
	}
	.check-more .text {
		font-size:18px;
		font-weight:bold;
		color:rgba(255,255,255,1);
		opacity:1;
	}
	.arrow {
		background-color: #fff;
		font-size: 20px;
	}
	.banner-img {
		width: 100%;
	}
	.title-cn {
		font-size:15px;
		font-weight:400;
		line-height:1;
		color:rgba(0,0,0,1);
		opacity:1;
		margin-bottom: 15px;
	}
	.title-en {
		font-size:52px;
		font-weight:bold;
		line-height:1.5;
		color:rgba(0,0,0,1);
		opacity:1;
	}
	.intro {
		font-size:12px;
		color:rgba(0,0,0,1);
		line-height:1;
		opacity:1;
	}
</style>
