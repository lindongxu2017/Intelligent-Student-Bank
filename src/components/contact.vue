<template>
	<div class="contact">
		<div class="content">
			<el-breadcrumb separator="/">
				<el-breadcrumb-item class="your-route">您的位置</el-breadcrumb-item>
				<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
				<el-breadcrumb-item>联系我们</el-breadcrumb-item>
			</el-breadcrumb>
			<div class="cell-title">
				<div class="en">Educational concept</div>
				<div class="cn">联系我们</div>
			</div>
			<el-row>
				<el-col :span="11">
					<img class="map" src="../assets/banner.png">
				</el-col>
				<el-col :span="11" :offset="2">
					<div class="right">
						<div class="right-content">
							<div class="right-title">全部校区</div>
							<div class="area-list">
								<div class="area-text">
									<el-row class="addr" type="flex" align="middle">
										<el-col :span="14">
											<span class="addr-area">深圳校区</span>
											<span class="addr-text">广东深圳市南山区</span>
										</el-col>
										<el-col :span="10" class="right">
											<span class="addr-phone">+86-18812345678</span>
										</el-col>
									</el-row>
									<el-row class="addr" type="flex" align="middle">
										<el-col :span="14">
											<span class="addr-area">上海校区</span>
											<span class="addr-text">上海市浦东新区</span>
										</el-col>
										<el-col :span="10" class="right">
											<span class="addr-phone">021-54377032</span>
										</el-col>
									</el-row>
									<el-row class="addr" type="flex" align="middle">
										<el-col :span="14">
											<span class="addr-area">北京校区</span>
											<span class="addr-text">北京市朝阳区</span>
										</el-col>
										<el-col :span="10" class="right">
											<span class="addr-phone">010-59471668</span>
										</el-col>
									</el-row>
								</div>
								<div class="code">
									<img src="../assets/qr-code.png" class="qr-code">
									<div class="text">扫描关注微信二维码</div>
								</div>
							</div>
						</div>
					</div>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'contact',
		data() {
			return {
				
			}
		},
		methods: {
			select_cate (item, index) {
				this.active = index
			}
		},
		components: {
			
		}
	}
</script>

<style scoped>
	.contact {
		padding-top: 22px;
		padding-bottom: 100px;
	}
	.cell-title {
		margin-bottom: 50px;
		margin-top: 50px;
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
	.map {
		width: 100%;
	}
	.right {
		text-align: right;
	}
	.right-content {
		text-align: left;
		/* display: inline-block; */
	}
	.area-list {
		display: flex;
		padding: 20px;
		border: 1px solid #707070;
		box-sizing: border-box;
		margin-top: 35px;
	}
	.area-text {
		flex: 1;
		padding-right: 30px;
	}
	.area-list .addr:last-child {
		margin-bottom: 0;
	}
	.addr {
		font-size:12px;
		font-weight:400;
		line-height:16px;
		color:rgba(0,0,0,1);
		opacity:1;
		margin-bottom: 15px;
	}
	.addr-area {
		padding-right: 3px;
		border-right: 1px solid #707070;
	}
	.code {
		text-align: center;
		padding-left: 35px;
		border-left: 1px solid #707070;
	}
	.code .text {
		font-size:12px;
		font-weight:bold;
		line-height:16px;
		color:rgba(0,0,0,1);
		opacity:1;
	}
	.qr-code {
		width: 73px;
		height: 73px;
	}
</style>
