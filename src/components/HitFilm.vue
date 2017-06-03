<template>
	<div id="hit_filmlist" v-cloak>
		<loading-pop></loading-pop>
		<div class="hit_film" v-for="film in hitfilmList">
			<div class="hit_left">
				<img v-bind:src="film.iconaddress">
			</div>
			<div class="hit_right">
				<p class="film_name">{{film.tvTitle}}</p>
				<p class="film_avg"><span>观众评分</span><span>{{film.grade}}</span></p>
				<p class="film_sum">{{film.story.data.storyBrief}}</p>
				<p class="film_time"><span>上映日期</span><span>{{film.playDate.data}}</span></p>
				<router-link :to="{path:'buy',name:'buy-ticket',params:{filmName:film.tvTitle}}" 
				id="buy_btn" 
				>购票</router-link>
			</div>
		</div>
	</div>
</template>
<script>
import Vue from "vue";
import BuyTicketPage from "@/components/BuyTicketPage"
import LoadingPop from "@/components/LoadingPop"
	export default{
		name:'hit-film',
		data:function(){
			return {
				hitfilmList:{},
				filmName:""
			}
		},
		components:{
			LoadingPop,
			BuyTicketPage
		},
		mounted:function(){
			this.hitfilmList={};
			this.hitfilmList=this.$store.state.filmList;
		}
	}
</script>
<style>
	#hit_filmlist > .hit_film:last-child{
		margin-bottom: 60px;
	}
	.hit_film{
		display: flex;
		padding: 4px 4px 4px 4%;
		height: 155px;
		border-bottom: 1px solid #ddd;
		position: relative;
	}
	.hit_left{
		flex:30%;
		display: flex;
		align-items:center;
	}
	.hit_right{
		flex:70%;
		padding-left: 2%;
	}
	.hit_left img{
		height: 90%;
	}
	.hit_right p{
		text-align: left;
		margin-top: 5px;
	}
	.hit_right p:nth-child(1){
		margin-top: 8px;
		overflow: hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-line-clamp: 1;
	    -webkit-box-orient: vertical;
	}
	.hit_right .film_name{
		font-size: 1.8rem;
		font-weight: bold;
		color: #4a494a；
	}
	.hit_right .film_avg span:first-child{
		color: #adaead;
		font-size: 1.4rem;
	}.hit_right .film_avg span:last-child{
		color: #ffb600;
		font-size: 1.8rem;
	}
	.hit_right .film_sum{
		font-size: 1rem;
		color: #7b7d7b
	}
	.hit_right .film_time{
		font-size: 1.4rem;		color: #7b7d7b
	}
	.hit_right .film_time span:last-child{
		font-size: 1.6rem;
		color: #ffb600;
		margin-left: 1%;
	}
	#buy_btn{
		display: inline-block;
		font-size: 1.5rem;
		border: 1px solid #f75940;
		color: #f75940;
		padding: 3px;
		width: 32px;
		position: absolute;
	    top: 22%;
    	right: 4%;
    	border-radius: 4px;
	}
</style>