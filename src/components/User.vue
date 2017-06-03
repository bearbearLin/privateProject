<template>
	<div>
		123
	</div>
</template>
<script>
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
	export default{
		name:"user",
		created:function(){
			console.log(this.$route)
		}
	}
</script>