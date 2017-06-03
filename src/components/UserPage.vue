<template>
	<div class="user">
		<header id="user_page">
			<div class="user_left">
				<img src="../assets/img/user_icon.png">
			</div>
			<div class="user_mid">
				<span>立即登录</span>
			</div>
			<div class="user_right">
				<span class="right_arrow"></span>
			</div>
		</header>
		<footer-banner></footer-banner>
		<icon-list v-bind:iconList="iconList"></icon-list>
		<section id="user_order">
			<div class="title clearfix">
				<span>我的订单</span>
				<span>全部></span>
			</div>
			<icon-list v-bind:iconList="orderList"></icon-list>
		</section>
		<mess-list v-bind:messList="messList"></mess-list>
		<mess-list v-bind:messList="setList"></mess-list>
		
	</div>
</template>
<script>
import IconList from '@/components/IconList'
import MessList from '@/components/MessList'
import FooterBanner from "@/components/FooterBanner"
export default{
	name:"user-page",
	data:function(){
		return {
			iconList:[
				{
					bgUrl:require("../assets/img/user_icon1.png"),
					text:"想看"
				},
				{
					bgUrl:require("../assets/img/user_icon2.png"),
					text:"看过"
				},
				{
					bgUrl:require("../assets/img/user_icon3.png"),
					text:"影评"
				},
				{
					bgUrl:require("../assets/img/user_icon4.png"),
					text:"话题"
			}],
			orderList:[
				{
					bgUrl:require("../assets/img/user_icon5.png"),
					text:"为消费"
				},
				{
					bgUrl:require("../assets/img/user_icon6.png"),
					text:"待付款"
				},
				{
					bgUrl:require("../assets/img/user_icon7.png"),
					text:"待评价"
				},
				{
					bgUrl:require("../assets/img/user_icon8.png"),
					text:"退款"
			}],
			messList:["我的消息","我的收藏","会员中心","我的成就"],
			setList:["我的钱包","我的余额","优惠卷","设置"]
		}
	},
	components:{
		IconList,
		MessList,
		FooterBanner
	}
}
</script>
<style>
	#user_page{
		position: inherit;
		background-color: #de4139;
		color:#fff;
	}
	.user{
		background-color: #f7f7f7;
	}
	.spacebox{
		height: 100px;
	}
	#user_page{
		height: 100px;
		display: flex;
	}
	#user_page .user_left,#user_page .user_mid,#user_page .user_right{
		display: flex;
		align-items:center;
	}
	#user_page .user_left{
		flex:1;
		padding-left: 5%;
		position: relative;
	}
	#user_page .user_left img{
		height: 75%;
		width: auto;
		position: absolute;
	}
	#user_page .user_mid{
		flex:3;
		font-size: 1.6rem;
		margin-left: 4%;
	}
	#user_page .user_right{
		flex:0.5;
	}
	#user_page .right_arrow{
		display: inline-block;
		width: 10px;
		height: 10px;
		border-top: 2px solid #fff;
		border-right: 2px solid #fff;
		transform:rotate(45deg);
	}
	#user_order{
		margin-top: 20px;
		background-color: #fff;
	}
	#user_order .title{
		font-size: 1.6rem;
		padding: 2% 4%;
		border-bottom: 1px solid #e7e7e7;
	}
	#user_order .title span:first-child{
		float: left;
	}
	#user_order .title span:last-child{
		float: right;
		font-size: 1.4rem;
		color:#9c9a9c;
	}
	.user_mess:last-child ul li:last-child{
		margin-bottom: 60px;
	}
</style>