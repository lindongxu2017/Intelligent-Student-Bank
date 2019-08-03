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
</style>
