<template>
	<div class="index">
		<sectionOne></sectionOne>
		<sectionTwo></sectionTwo>
		<sectionThree></sectionThree>
		<sectionFour></sectionFour>
		<sectionFive></sectionFive>
		<sectionSix></sectionSix>
	</div>
</template>

<script>
	import sectionOne from '@/components/section_1.vue'
	import sectionTwo from '@/components/section_2.vue'
	import sectionThree from '@/components/section_3.vue'
	import sectionFour from '@/components/section_4.vue'
	import sectionFive from '@/components/section_5.vue'
	import sectionSix from '@/components/section_6.vue'
	export default {
		
		name: 'index',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		components: {
			sectionOne, sectionTwo, sectionThree, sectionFour, sectionFive, sectionSix
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
</style>
