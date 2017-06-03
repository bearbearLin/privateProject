<template>
	<footer>
		<ul>
			<li v-for="item in footerList"
				v-bind:class="{active:$route.path===item.path}"
				>
				<router-link v-bind:to="item.path">
					<span>{{item.text}}</span>
					<i v-bind:class="'iconfont icon-'+item.icon"></i>
				</router-link>
			</li>
		</ul>
	</footer>
</template>
<script>
	export default{
		name:"footer-banner",
		data:function(){
			return {
				footerList:[{
					path:"/",
					text:'电影',
					icon:"dianying"
				},{
					path:"/cinema",
					text:"影院",
					icon:"yingyuan"
				},{
					path:'/search',
					text:"喵影",
					icon:"taomiaomiao"
				},{
					path:'/user',
					text:"我的",
					icon:"wode"
				}]
			}
		},
	}
</script>
<style>
	footer{
		position: fixed;
		bottom: 0;
		width: 100%;
		border-top: 1px solid #ddd;
		background-color: #f7f7f7;
		z-index: 4;
	}
	footer ul{
		display: flex;
	}
	footer li{
		flex:1;
		font-size: 1.5rem;
		position: relative;
		padding-top: 36px;
	}
	footer li.active a{
		color:#de4139;
	}
	footer .iconfont{
		font-size: 3rem;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}
</style>