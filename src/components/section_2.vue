<template>
	<div class="sectionTwo">
		<div class="content">
			<div class="cell-title">
				<div class="en">Educational concept</div>
				<div class="cn">我们的教育理念</div>
			</div>
			<el-row class="panel-list">				
				<el-col class="panel-item" :span="8" v-for="(item, index) in list" :key="index">
					<div class="panel-content">
						<div class="panel-title" v-html="item.title"></div>
						<div class="panel-intro" v-html="item.intro"></div>
					</div>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'sectionTwo',
		data() {
			return {
				list: [
					{title: '环境改变未来', intro: '独特的核心教育价值，贯穿整个智能教学体系，坚信信任、尊重、热情、协作、韧性、奉献、创新等信念的力量，对孩子人格塑造的深远价值'},
					{title: '环境改变未来', intro: '独特的核心教育价值，贯穿整个智能教学体系，坚信信任、尊重、热情、协作、韧性、奉献、创新等信念的力量，对孩子人格塑造的深远价值'},
					{title: '环境改变未来', intro: '独特的核心教育价值，贯穿整个智能教学体系，坚信信任、尊重、热情、协作、韧性、奉献、创新等信念的力量，对孩子人格塑造的深远价值'},
					{title: '环境改变未来', intro: '独特的核心教育价值，贯穿整个智能教学体系，坚信信任、尊重、热情、协作、韧性、奉献、创新等信念的力量，对孩子人格塑造的深远价值'},
					{title: '环境改变未来', intro: '独特的核心教育价值，贯穿整个智能教学体系，坚信信任、尊重、热情、协作、韧性、奉献、创新等信念的力量，对孩子人格塑造的深远价值'},
					{title: '环境改变未来', intro: '独特的核心教育价值，贯穿整个智能教学体系，坚信信任、尊重、热情、协作、韧性、奉献、创新等信念的力量，对孩子人格塑造的深远价值'},
				]
			}
		}
	}
</script>

<style scoped>
	.sectionTwo {
		padding-bottom: 133px;
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
	.panel-item {
		padding-right: 24px;
	}
	.panel-content {
		padding: 60px;
	}
	.panel-content:hover {
		box-shadow:0px 3px 31px rgba(234,238,251,1);
	}
	.panel-title {
		font-size:18px;
		font-weight:bold;
		line-height:24px;
		color:rgba(0,0,0,1);
		opacity:1;
		margin-bottom: 18px;
	}
	.panel-intro {
		font-size:12px;
		font-weight:400;
		line-height:20px;
		color:rgba(0,0,0,1);
		opacity:0.8;
	}
</style>