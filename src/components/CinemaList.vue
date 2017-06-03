<template>
	<div id="cinema_list">
		<div class="cinema_list" v-for="cinema in cinemaList">
			<div>
				<span class="cinema_name">{{cinema.cinemaName}}</span>
				<span class="cinema_price">{{cinema.price}}元起</span>
			</div>
			<div class="cinema_address">
				<span>{{cinema.address}}</span>
			</div>
			<div class="cinema_bottom">
				<span class="cinema_tel">{{cinema.telephone}}</span>
				<span class="cinema_distance">{{cinema.distance}}公里</span>
			</div>
		</div>
		
	</div>
</template>
<script>
export default{
	name:"cinema-list",
	data:function(){
		return {
			cinemaList:[]
		}
	},
	created:function(){
		var cinema=require("../assets/json/cinema.json")
		for(var i in cinema.result){
			if(cinema.result[i].distance>100){//将米为单位的转换为千米为单位的
				cinema.result[i].distance=(cinema.result[i].distance/1000).toFixed(2);
			}
			this.cinemaList.push(cinema.result[i])
		}
	}
}
</script>
<style>
	.cinema_list{
		text-align: left;
		padding-left: 5%;
		margin-top: 16px;
		border-bottom: 1px solid #dedbde;
	}
	.cinema_list > div{
		margin: 4px 0;
	}
	.cinema_name{
		color: #313031;
		font-size: 2rem;
	}
	.cinema_price{
		color: #f74d42;
		font-size: 1.6rem;
	}
	.cinema_address{
		color:#636563;
		font-size: 1.6rem;
		padding-right: 2%;
	}
	.cinema_tel{
		color: #ff9a00;
		font-size: 1.8rem;
	}
	.cinema_bottom{
		position: relative;
		height: 24px;
	}
	.cinema_distance{
		color: #f74d42;
		font-size: 2rem;
		position: absolute;
		right: 10%;
	}
	#cinema_list .cinema_list:last-child{
		margin-bottom: 60px;
	}
</style>