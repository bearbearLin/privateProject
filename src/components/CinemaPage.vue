<template>
	<div>
		<header-banner v-bind:topList="topList"></header-banner>
		<article class="adv_banner">
			<img src="../assets/img/adv_cinema.jpg">
		</article>
		<cinema-list></cinema-list>
		<footer-banner></footer-banner>
	</div>
</template>
<script>

import HeaderBanner from "@/components/HeaderBanner";
import CinemaList from "@/components/CinemaList";
import FooterBanner from "@/components/FooterBanner"
export default{
	name:"cinema-page",
	data:function(){
		return {
			topList:["影片"],
		}
	},
	components:{
		HeaderBanner,
		CinemaList,
		FooterBanner
	},
}
</script>
<style>
	.adv_banner{
		margin-top: 48px;
	}
</style>