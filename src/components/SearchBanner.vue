<template>
	<div class="search_banner">
		<input type="text" v-bind:placeholder="searchTips" v-model="keyWord" v-on:keyup.13="sendKey">
		<img src="../assets/img/search_icon.png">
	</div>
</template>
<script>
	export default{
		name:"search-banner",
		props:["searchTips"],
		data:function(){
			return {
				keyWord:''
			}
		},
		methods:{
			sendKey:function(){
				this.$emit("test",this.keyWord);
				this.keyWord=""
			}
		},
		updated:function(){
			this.$emit("sendData",this.keyWord);
		}
	}
</script>
<style>
	.search_banner{
		margin-top: 2px;
		position: relative;
	}
	.search_banner input{
		height: 32px;
		width: 100%;
		padding-left: 15%;
		border:none;
		border-radius: 4px;
	}
	.search_banner img{
	    height: 24px;
	    width: auto;
	    position: absolute;
	    top: 50%;
	    left: 5%;
	    margin-top: -12px;
	}
</style>