<template>
	<div>
		<router-link v-bind:to="{name:'get',params:{id:123}}">User</router-link>
	</div>
</template>
<script>
import Vue from 'vue'
import VueResource from "vue-resource";
Vue.use(VueResource)
import Router from 'vue-router'
Vue.use(Router)
	export default{
		name:"test",
	}
</script>
<style>
	
</style>