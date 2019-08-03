<template>
	<div class="index">
		<sectionOne></sectionOne>
		<sectionTwo></sectionTwo>
		<sectionThree></sectionThree>
		<sectionFour></sectionFour>
	</div>
</template>

<script>
	import sectionOne from '@/components/section_1.vue'
	import sectionTwo from '@/components/section_2.vue'
	import sectionThree from '@/components/section_3.vue'
	import sectionFour from '@/components/section_4.vue'
	export default {
		
		name: 'index',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		components: {
			sectionOne, sectionTwo, sectionThree, sectionFour
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
</style>
