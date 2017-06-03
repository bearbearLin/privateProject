<template>
	<div class="load_gif" v-if="loadFlag" v-bind:style="{height:htmlHeight}">
		<img src="../assets/img/loading.gif">
	</div>
</template>
<script>
import Vue from "vue";
import film from "../router/film.js"
export default{
	name:"loading-pop",
	film,
	computed:{
		loadFlag:function(){
			return film.state.loadFlag;
		},
		htmlHeight:function(){
			return window.document.documentElement.offsetHeight;
		}
	},
	created:function(){
		Vue.http.interceptors.push((request, next) => {
			// 请求之前的逻辑代码
			film.commit("showLoad")
		   next((response) => {
		   		// 响应之后的逻辑代码
		   		film.commit("hideLoad")
		   });
		});
	}
}
</script>
<style>
	.load_gif{
		position: fixed;
		z-index: 5;
		top: 2px;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.8)
	}
	.load_gif img{
		width: 60px;
		height: 60px;
		position: absolute;
		top:50%;
		left: 50%;
		margin-left: -30px;
		margin-top: -30px;
	}
</style>