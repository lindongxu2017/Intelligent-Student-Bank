<template>
	<div class="hearder">
		<div class="content">
			<el-row type="flex" align="middle">
				<el-col :span="8">
					<div class="logo">
						<span class="text">Learning system</span>
					</div>
				</el-col>
				<el-col :span="16">
					<div class="nav-wrapper">
						<div :class="['nav-items', active == index ? 'active' : '']" @click="route(item, index)" v-for="(item, index) in link" v-html="item.name" :key="index" ></div>
					</div>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'hearder',
		data () {
			return {
				link: [					
					{name: '首页', path: '/'},
					{name: '学员库', path: '/student'},
					{name: '师资力量', path: '/teach'},
					{name: '机构特色', path: '/'},
					{name: '联系我们', path: '/contact'}
				],
				active: 0
			}
		},
		mounted() {
			this.highlight()
		},
		methods: {
			route (item, index) {
				this.active = index
				this.$router.push({path: item.path})
			},
			highlight () {
				let path = this.$route.path
				console.log(path)
				for (var i = 0; i < this.link.length; i++) {
					if (path == this.link[i].path) {
						this.active = i
						break
					}
				}
			}
		}
	}
</script>

<style scoped>
	.hearder {
		padding: 20px 0;
	}
	.logo .text {
		font-size:41px;
		font-family:Microsoft YaHei;
		font-weight:bold;
		line-height:54px;
		color:rgba(0,0,0,1);
		opacity:1;
		line-height: 1;
	}
	.nav-wrapper {
		font-size: 0;
		text-align: right;
	}
	.nav-items {
		display: inline-block;
		font-size:14px;
		font-weight:bold;
		line-height:19px;
		opacity:1;
		margin-left: 50px;
		cursor: pointer;
		user-select: none;
	}
	.nav-items.active, .nav-items:hover {
		color: #1B7FBD;
	}
</style>
