<template>
	<div class="sectionThree">
		<div class="content">
			<el-row type="flex" align="middle">
				<el-col :span="12" class="center">
					<div class="cell-title">合作平台</div>
					<div class="cell-brand">童星汇</div>
				</el-col>
				<el-col :span="12" class="center">
					<div class="scanning">扫码关注</div>
					<img src="../assets/qr-code.png" class="qr-code">
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	
</script>

<style scoped>
	.sectionThree {
		background-color: #1B7FBD;
		height: 213px;
	}
	.center {
		text-align: center;
		vertical-align: middle;
		margin-top: 57px;
	}
	.cell-title {
		font-size:14px;
		font-family:Microsoft YaHei;
		font-weight:bold;
		line-height:19px;
		color:rgba(245,241,241,1);
		opacity:1;
		display: inline-block;
		margin-right: 68px;
	}
	.cell-brand {
		display: inline-block;
		width:154px;
		height:58px;
		background:rgba(119,234,234,1);
		opacity:1;
		color: #fff;
		font-size: 22px;
		line-height: 58px;
	}
	.scanning {
		font-size:15px;
		color:rgba(248,248,248,1);
		opacity:1;
		display: inline-block;
		margin-right: 58px;
	}
	.qr-code {
		width: 103px;
		height: 103px;
		vertical-align: middle;
	}
</style>
