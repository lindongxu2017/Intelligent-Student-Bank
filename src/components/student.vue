<template>
	<div class="student">
		<div class="content">
			<el-breadcrumb separator="/">
				<el-breadcrumb-item class="your-route">您的位置</el-breadcrumb-item>
				<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
				<el-breadcrumb-item>学员库</el-breadcrumb-item>
			</el-breadcrumb>
			<div class="list">
				<div class="cell-title">
					<div class="en">Educational concept</div>
					<div class="cn">学员库</div>
				</div>
				<el-row>
					<el-col :span="8" v-for="(item, index) in list" :key="index" class="item">
						<div class="student-info">
							<div class="img-wrapper">
								<img :src="item.avatar">
							</div>
							<div class="detail">
								<div class="name-attr">
									<div class="name" v-html="item.name"></div>
									<div class="attr">
										<span v-html="item.height + 'cm|'"></span>
										<span v-html="item.weight + 'kg|'"></span>
										<span v-html="item.age + '岁'"></span>
									</div>
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
		name: 'student',
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
				]
			}
		},
		methods: {

		},
		components: {
			sectionSix
		}
	}
</script>

<style scoped>
	.student {
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
		font-size:50px;
		font-weight:bold;
		line-height:66px;
		color:rgba(0,0,0,1);
		opacity:1;
	}
	.list {
		margin-top: 60px;
	}
	.item {
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
		color:rgba(0,0,0,1);
		opacity:1;
		display: -webkit-box;
		word-break: break-all;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
