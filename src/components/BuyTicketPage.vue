<template>
	<div id="buyticket_page">
		<header class="clearfix">
			<router-link to="/" class="left_box">
				<img src="../assets/img/left_arrow.png">
			</router-link>
			<div class="right_box">
				<h1>烽禾影城(祈福新邨店)</h1>
			</div>
			<div class="share_icon">
				<img src="../assets/img/share_icon.png">
			</div>
		</header>
		<div class="ticket_title">
			<h2>{{filmName}}</h2>
			<h3>今天5月26日 12:20 英语3D</h3>
			<div>
				<div class="select_icon clearfix">
					<img src="../assets/img/seaticon.png">
					<span>可选</span>
					<img src="../assets/img/unselect.png">
					<span>不可选</span>
					<img src="../assets/img/selected.png">
					<span>已选</span>
				</div>
			</div>
		</div>
		<div class="seat_list">
			<div class="screen">
				<img src="../assets/img/select_screen.png">
			</div>
			<seat-btn v-for="item in 92" v-bind:index="item"></seat-btn>
			<div class="ticket_buy">
				确认选座
			</div>
		</div>
		<footer-banner></footer-banner>
	</div>
</template>
<script>
import SeatBtn from "@/components/SeatBtn"
import FooterBanner from "@/components/FooterBanner"
export default{
	name:"buy-ticket",
	components:{
		SeatBtn,
		FooterBanner
	},
	computed:{
		filmName:function(){
			return this.$route.params.filmName
		}
	},
}
</script>
<style>
	#buyticket_page header{
		position: fixed;
		width: 100%;
		top: 0;
		background-color: #de4139;
		padding: 6px 0;
	}
	#buyticket_page header .left_box{
		float: left;
		width: 32px;
		height: 32px;
		position: relative;
		margin-left: 12px;
	}
	#buyticket_page header .left_box img{
		width: 100%;
		height: 100%;
	}
	#buyticket_page header .left_box:after{
		content: "";
		background-color: #9c2c29;
		width: 1px;
		height: 28px;
		position: absolute;
		top: 2px;
		left: 36px;
	}
	#buyticket_page header .right_box{
		float: left;
		height: 32px;
		line-height: 32px;
	}
	#buyticket_page header .right_box h1{
		color:#fff;
		font-size: 1.8rem;
		text-align: left;
		margin-left: 12px;
	}
	#buyticket_page header .share_icon{
		float: right;
		height: 32px;
	}
	#buyticket_page header .share_icon img{
		height: 24px;
		width: auto;
		margin-top: 4px;
		margin-right: 4px;
	}
	#buyticket_page .ticket_title{
		margin-top: 44px;
		text-align: left;
	}
	#buyticket_page .ticket_title h2{
		color: #000;
		padding-top: 8px;
		padding-left: 16px;
		font-size: 1.6rem;
		font-weight: 600;
	}
	#buyticket_page .ticket_title h3{
		border-bottom: 1px solid #ddd;
		color: #636563;
		padding-top: 4px;
		padding-left: 16px;
		padding-bottom: 8px;
		font-size: 1.2rem;
	}
	#buyticket_page .ticket_title > div{
		padding:8px;
		width: 250px;
		margin: 0 auto;
		color: #9c9a9c;
	}
	#buyticket_page .ticket_title .select_icon span{
		float: left;
		height: 32px;
		line-height: 32px;
		margin-left: 4px;
	}
	#buyticket_page .ticket_title > div img{
		width: 24px;
		height: 24px;
		float: left;
		margin-left: 16px;
	}
	#buyticket_page .seat_list{
		border-top: 1px solid #ddd;
		background-color: #f7f3f7;
		display: flex;
		flex-wrap:wrap;
		padding: 0 5%;
		padding-bottom: 30%;
		position: relative;
	}
	#buyticket_page .seat_list .screen{
		margin-bottom: 15%;
	}
	#buyticket_page .seat_list .screen img{
		width: 80%;
		margin: 0 auto;
	}
	#buyticket_page .ticket_buy{
		position: absolute;
		border-radius: 8px;
		width: 88px;
		height: 48px;
		text-align: center;
		line-height: 48px;
		font-size: 1.6rem;
		background-color: #fd9800;
		color: #fff;
		bottom: 10%;
		right: 12px;
	}
</style>