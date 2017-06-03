<template>
	<div>
		<header-banner v-bind:topList="topList" v-on:tab="getData"></header-banner>
		<article class="adv_banner">
			<img src="../assets/img/adv_banner.jpg">
		</article>
		<hit-film v-if="hitFlag"></hit-film>
		<top-250 v-if="topFlag"></top-250>
		<footer-banner></footer-banner>
	</div>
</template>
<script>
import Vue from 'vue'
import Vuex from "vuex";
Vue.use(Vuex)
import HeaderBanner from "@/components/HeaderBanner";
import HitFilm from "@/components/HitFilm";
import FooterBanner from "@/components/FooterBanner"
import Top250 from "@/components/Top250"
const store = new Vuex.Store({
	state:{
		filmList:[],//存放显示的电影
		city:""
	},
	mutations:{
		getCity:function(state,val){
			state.city=val;
		}
	}
})
export default{
	name:"film-page",
	store,
	data:function(){
		return {
			topList:["热映","待映","Top250"],
			hitFlag:true,
			topFlag:false
		}
	},
	computed:{
		city:function(){
			return this.$store.state.city;
		}
	},
	watch:{
		city:function(){
			this.getData(0)
		}
	},
	methods:{
		getData:function(index){
			var films=store.state.filmList
			films.splice(0,films.length)
			var area=this.city;
			this.$http.jsonp("http://op.juhe.cn/onebox/movie/pmovie?key=0d88a2f5970a4ac0d7a0473cdfa29574&city="+area).then((res)=>{
						// console.log(res)				
						if(index<=1){
						this.hitFlag=true;
						this.topFlag=false;
						var hitfilm=res.body.result.data[index].data
						hitfilm.forEach(function(key,index){
							films.push(key)
						})
					}else{
						this.hitFlag=false;
						this.topFlag=true;
					}
				})
		}
	},
	components:{
		HitFilm,
		HeaderBanner,
		FooterBanner,
		Top250
	}
}
</script>
<style>
	.adv_banner{
		margin-top: 48px;
	}
	.adv_banner img{
		height: 78px;
	}
	.select_city{
		font-size: 1.5rem;
		position: fixed;
		top: 48px;
		z-index:2;
		background-color: #fff;
		width: 100%;
		padding: 1% 0;
		border-bottom: 1px solid #ddd;
	}
	.select_city h4{	
		background-color:#f7f7f7;
		text-align: left;
		padding: 2% 0;
		padding-left: 2%;
		border-top:1px solid rgb(232,232,232);
		border-bottom: 1px solid  rgb(232,232,232);
	}
	.select_city p{
		text-align: left;
		font-size: 1.6rem;
		padding: 2% 0;
		padding-left: 2%;
	}
	.hitcity{
		display: flex;
		flex-wrap:wrap;
		font-size: 1.6rem;
		padding-top: 4px;
	}
	.hitcity span{
		flex:20%;
		margin: 2px 2px;
		border: 1px solid rgb(232,232,232);
		border-radius: 4px;
	}
	.hitcity span:hover{
		background-color: #d63c31;
		color:#fffbff;
	}
</style>