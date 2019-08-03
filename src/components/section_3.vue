<template>
	<div class="sectionThree">
		<div class="content">
			<div class="cell-title">
				<div class="en">HUMAN BEINGS</div>
				<div class="cn">我们的学员库</div>
			</div>
			<el-row class="panel-list">				
				<el-col class="panel-item" :span="12" v-for="(item, index) in list" :key="index">
					<div class="panel-content">
						<img :src="item.avatar" class="avatar">
						<div class="info">
							<div class="panel-title" v-html="item.name"></div>
							<div class="panel-intro" v-html="item.intro"></div>
						</div>
					</div>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'sectionThree',
		data() {
			return {
				list: [
					{avatar: require('@/assets/banner.png'), name: '李菲儿', intro: '国际国标舞冠军；象棋大师；全国青少年演讲大赛二等奖'},
					{avatar: require('@/assets/banner.png'), name: '李菲儿', intro: '国际国标舞冠军；象棋大师；全国青少年演讲大赛二等奖'},
					{avatar: require('@/assets/banner.png'), name: '李菲儿', intro: '国际国标舞冠军；象棋大师；全国青少年演讲大赛二等奖'},
					{avatar: require('@/assets/banner.png'), name: '李菲儿', intro: '国际国标舞冠军；象棋大师；全国青少年演讲大赛二等奖'},
					{avatar: require('@/assets/banner.png'), name: '李菲儿', intro: '国际国标舞冠军；象棋大师；全国青少年演讲大赛二等奖'},
					{avatar: require('@/assets/banner.png'), name: '李菲儿', intro: '国际国标舞冠军；象棋大师；全国青少年演讲大赛二等奖'}
				]
			}
		}
	}
</script>

<style scoped>
	.sectionThree {
		padding-bottom: 97px;
	}
	.cell-title {
		margin-bottom: 60px;
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
	.panel-item {
		padding-right: 20px;
		margin-bottom: 20px;
	}
	.panel-content {
		border: 1px solid rgba(0,0,0,0.1);
		display: flex;
	}
	.panel-content:hover {
		box-shadow:0px 3px 39px rgba(221,227,245,1);
	}
	.panel-content:hover .info {
		background-color: #1B7FBD;
	}
	.panel-content:hover .panel-title, .panel-content:hover .panel-intro {
		color: #fff;
	}
	.info {
		padding: 30px 40px;
	}
	.avatar {
		width: 170px;
		height: 170px;
		border-right: 1px solid rgba(0,0,0,0.1);
		box-sizing: border-box;
	}
	.panel-title {
		font-size:20px;
		font-weight:bold;
		line-height:26px;
		color:rgba(0,0,0,1);
		opacity:1;
		margin-bottom: 10px;
	}
	.panel-intro {
		font-size:14px;
		font-weight:400;
		line-height:19px;
		color:rgba(0,0,0,1);
		opacity:0.6;
	}
</style>