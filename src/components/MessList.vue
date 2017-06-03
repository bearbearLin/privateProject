<template>
	<section class="user_mess">
			<ul>
				<li v-for="mess in messList" class="clearfix">
				<span>{{mess}}</span>
				<router-link to="/"></router-link>
				</li>
			</ul>
	</section>
</template>
<script>
export default{
	name:"mess-list",
	props:['messList']
}
</script>
<style>
	.user_mess{
		margin-top: 24px;
	}
	.user_mess ul li{
		background-color: #fff;
		text-align: left;
		font-size: 1.6rem;
		color:#212021;
		border-bottom: 1px solid #e7e7e7;
		padding: 3% 0 3% 4%;
		font-weight: 500;
		position: relative;
	}
	.user_mess ul li a{
		float: right;
		position: absolute;
		top: 40%;
		right: 15px;
		width: 12px;
		height: 12px;
		border-top: 2px solid #ddd;
		border-right: 2px solid #ddd;
		transform:rotate(45deg);
	}
</style>