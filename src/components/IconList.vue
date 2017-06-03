<template>
	<div class="user_fav">
		<ul>
			<li v-for="(item,index) in iconList"
				v-bind:style="{background:'url('+item.bgUrl+') no-repeat',backgroundSize:'30% auto',backgroundPosition:'center 0'}"
				v-bind:class="'user_icon'+(index+1)">
				<span>{{item.text}}</span>
			</li>
		</ul>
	</div>
</template>
<script>
export default{
	name:"icon-list",
	props:['iconList']
}
</script>
<style>
	.user_fav ul{
		display: flex;
		padding: 4% 0;
		background-color: #fff;
	}
	.user_fav ul li{
		flex:1;
		padding-top: 8%;
	}
	.user_fav ul li span{
		font-size: 1.2rem;
	}
	.user_fav .user_icon2{
		border-left: 1px solid #ddd;
		border-right: 1px solid #ddd;
	}
	.user_fav .user_icon3{
		background-size: 30% auto;
		background-position:center 0;
		border-right: 1px solid #ddd;
	}
</style>