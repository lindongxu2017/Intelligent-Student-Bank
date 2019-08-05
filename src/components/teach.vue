<template>
	<div class="teach">
		<div class="content">
			<el-breadcrumb separator="/">
				<el-breadcrumb-item class="your-route">您的位置</el-breadcrumb-item>
				<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
				<el-breadcrumb-item>师资力量</el-breadcrumb-item>
			</el-breadcrumb>
			<div class="list">
				<div class="cell-title">
					<div class="en">Educational concept</div>
					<div class="cn">
						<div class="text">师资力量</div>
						<div class="cate">
							<div :class="['item', active == index ? 'active' : '']" v-for="(item, index) in cate" :key="index" v-html="item.name" @click="select_cate(item, index)"></div>
						</div>
					</div>
				</div>
				<el-row class="teach">
					<el-col :span="8" v-for="(item, index) in list" :key="index" class="teach-item">
						<div class="student-info">
							<div class="img-wrapper">
								<img :src="item.avatar">
							</div>
							<div class="detail">
								<div class="name-attr">
									<div class="name" v-html="item.name"></div>
								</div>
								<div class="intro" v-html="item.intro"></div>
							</div>
						</div>
					</el-col>
				</el-row>
			</div>
			<el-pagination  layout="prev, pager, next, sizes" :total="1000"></el-pagination>
		</div>
		<sectionSix></sectionSix>
	</div>
</template>

<script>
	import sectionSix from '@/components/section_6.vue'
	export default {
		name: 'teach',
		data() {
			return {
				list: [{
						avatar: require('@/assets/banner.png'),
						name: '李菲儿',
						intro: '国际舞蹈专业冠军，全国青少年儿童国标舞大赛冠军，资深学员，先后出国在全国各地进行舞蹈表演',
						height: '150',
						weight: '40',
						age: '12'
					},
					{
						avatar: require('@/assets/banner.png'),
						name: '李菲儿',
						intro: '国际舞蹈专业冠军，全国青少年儿童国标舞大赛冠军，资深学员，先后出国在全国各地进行舞蹈表演',
						height: '150',
						weight: '40',
						age: '12'
					},
					{
						avatar: require('@/assets/banner.png'),
						name: '李菲儿',
						intro: '国际舞蹈专业冠军，全国青少年儿童国标舞大赛冠军，资深学员，先后出国在全国各地进行舞蹈表演',
						height: '150',
						weight: '40',
						age: '12'
					},
					{
						avatar: require('@/assets/banner.png'),
						name: '李菲儿',
						intro: '国际舞蹈专业冠军，全国青少年儿童国标舞大赛冠军，资深学员，先后出国在全国各地进行舞蹈表演',
						height: '150',
						weight: '40',
						age: '12'
					},
					{
						avatar: require('@/assets/banner.png'),
						name: '李菲儿',
						intro: '国际舞蹈专业冠军，全国青少年儿童国标舞大赛冠军，资深学员，先后出国在全国各地进行舞蹈表演',
						height: '150',
						weight: '40',
						age: '12'
					},
					{
						avatar: require('@/assets/banner.png'),
						name: '李菲儿',
						intro: '国际舞蹈专业冠军，全国青少年儿童国标舞大赛冠军，资深学员，先后出国在全国各地进行舞蹈表演',
						height: '150',
						weight: '40',
						age: '12'
					}
				],
				cate: [
					{name: '舞蹈老师'},
					{name: '声乐老师'},
					{name: '回话老师'},
					{name: '播音老师'}
				],
				active: 0
			}
		},
		methods: {
			select_cate (item, index) {
				this.active = index
			}
		},
		components: {
			sectionSix
		}
	}
</script>

<style scoped>
	.teach {
		padding-top: 22px;
		/* padding-bottom: 100px; */
	}
	.cell-title {
		margin-bottom: 50px;
	}
	.en {
		font-size:15px;
		font-weight:400;
		color:rgba(0,0,0,1);
		opacity:1;
		margin-bottom: 15px;
		letter-spacing: 5px;
	}
	.cn {
		display: flex;
		align-items: center;
	}
	.cn .text {
		font-size:50px;
		font-weight:bold;
		line-height:66px;
		color:rgba(0,0,0,1);
		opacity:1;
	}
	.cate {
		display: flex;
		justify-content: space-between;
		padding-left: 145px;
		flex: 1;
	}
	.cate .item {
		padding: 14px 25px;
		font-size:14px;
		font-weight:bold;
		line-height:19px;
		color:rgba(0,0,0,1);
		opacity:1;
		cursor: pointer;
		user-select: none;
	}
	.cate .item.active {
		border-bottom: 1px solid #1B7FBD;
		color: #1B7FBD;
		position: relative;
	}
	.cate .item.active:before {
		content: '';
		position: absolute;
		border: 7px solid #1B7FBD;
		border-color: transparent transparent #1B7FBD;
		bottom: 0;
		left: 50%;
		margin-left: -7px;
	}
	.list {
		margin-top: 60px;
	}
	.teach-item {
		padding-right: 34px;
		margin-bottom: 65px;
	}
	.student-info:hover {
		box-shadow:0px 3px 31px rgba(206,211,230,1);
	}
	.student-info:hover .detail {
		border: 0;
	}
	.img-wrapper {
		padding-bottom: 76.87%;
		position: relative;
	}
	.img-wrapper > img {
		position: absolute;
		width: 100%;
		height: 100%;
	}
	.detail {
		box-sizing: border-box;
		padding: 20px 34px 43px;
		border: 1px solid #707070;
		border-top: 0;
	}
	.name-attr {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 30px;
	}
	.name {
		font-size:30px;
		font-weight:bold;
		line-height:40px;
		color:rgba(0,0,0,1);
		opacity:1;
	}
	.attr {
		font-size:12px;
		font-weight:400;
		line-height:16px;
		color:rgba(0,0,0,0.66);
	}
	.intro {
		font-size:14px;
		font-weight:400;
		line-height:19px;
		color:rgba(0,0,0,0.6);
		opacity:1;
		display: -webkit-box;
		word-break: break-all;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
