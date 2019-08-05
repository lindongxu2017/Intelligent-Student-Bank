<template>
	<div id="app">
		<headerNav></headerNav>
		<router-view />
	</div>
</template>

<script>
	import headerNav from './components/hearder'
	export default {
		name: 'App',
		components: {
			headerNav
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	ul, li {
		list-style: none;
	}
	a {
		text-decoration: none;
	}
	#app {
		font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
		color: #000;
	}
	.content {
		width: 1200px;
		margin: 0 auto;
	}
	.el-breadcrumb {
		padding-bottom: 15px;
		border-bottom: 1px solid rgba(27,127,189, 0.2);
	}
	.el-breadcrumb, .el-breadcrumb__item {
		vertical-align: text-bottom;
		float: inherit;
	}
	.your-route {
		font-size:18px;
		font-weight:bold;
		line-height:24px;
		color:rgba(0,0,0,1);
		opacity:1;
		margin-right: 20px;
		line-height: 1;
	}
	.your-route .el-breadcrumb__inner {
		color: #000000;
	}
	.your-route .el-breadcrumb__separator {
		display: none;
	}
	.el-pagination {
		text-align: center;
		margin-bottom: 100px;
	}
	.el-pagination .number, .el-pagination .more, .el-pagination .btn-prev, .el-pagination .btn-next {
		border: 1px solid #E8E9EC;
		width: 35px;
		height: 35px;
		line-height: 35px;
		color: #4D4F5C;
		font-size: 13px;
		font-weight: 400;
		margin-right: 8px;
		text-align: center;
	}
	.el-pagination .el-icon-arrow-left:before, .el-pagination .el-icon-arrow-right:before {
		font-size: 13px;
		line-height: 35px;
	}
	.el-pagination .el-icon-arrow-left:before {
		margin-left: 5px;
	}
	.el-pagination .el-icon-arrow-right:before {
		margin-right: 5px;
	}
	.el-pager .more::before {
		line-height: 35px;
	}
	.el-pagination__sizes .el-input__inner {
		height: 35px;
		line-height: 35px;
	}
</style>
