<template>
	<a href="javascript:void(0);" v-on:click="goTop" id="goTop">
		<img src="../assets/img/go_top.png" alt="">
	</a>
</template>
<script>
	export default{
		methods:{
			goTop: function() {
				// document.documentElement.scrollTop = document.body.scrollTop = 0;
				window.scrollTo(0,0)
			}
		}
	}
</script>
<style>
	#goTop{
	    position: fixed;
	    right: 1%;
	    bottom: 10%;
	    width: 50px;
	    height: 50px;
	}
	#goTop img{
		opacity: 0.8;
	}
</style>