<template>
	<div id="film_container">
		<!-- <loading-pop></loading-pop> -->
		<div class="film_box" v-for="(item,index) in filmList">
			<div class="film_list">
				<div class="left">
					<img v-bind:src="item.images.large">
				</div>
				<div class="right">
					<p class="film_title">
						<!-- <span @click.stop="showFilm(index)">{{item.title}}</span> -->
						<router-link v-bind:to="{name:'detail',params:{filmId:item.id}}">
							{{item.title}}
						</router-link>	
					</p>
					<p>
					<!-- 导演 -->
					<span>导演:</span>
					<router-link
					v-for="dir in item.directors"
					v-bind:to="{name:'detail',params:{bodyId:dir.id}}"
					>
						{{dir.name}}&nbsp&nbsp
					</router-link>
					</p>
		
					<!-- 主演 -->
					<p>
					<span>主演:</span>
					<router-link 
					v-for="cast in item.casts"
					v-bind:to="{name:'detail',params:{bodyId:cast.id}}"
					>
						{{cast.name}}&nbsp&nbsp
					</router-link>
					</p>
		
					<!-- 豆瓣评分 -->
					<p class="film_score">豆瓣评分:<span>{{item.rating.average}}</span></p>
		
					<!-- 电影类型 -->
					<p>
					<span>类型:</span>
					<span
					v-for="type in item.genres">
						{{type}}
					</span>
					</p>
				</div>
			</div>
		</div>
		<!-- <film-detail></film-detail> -->
	</div>
</template>
<script>
import Vue from "vue"
import VueResource from "vue-resource";
import Router from 'vue-router'
import LoadingPop from "@/components/LoadingPop"
import Vuex from "vuex";
import film from "../router/film"
Vue.use(Vuex)
Vue.use(Router)
export default{
	name:"film-list",
	film,
	data:function(){
		return {
			url:"/douban/search?",
			filmDetail:{},
		}
	},
	components:{
		LoadingPop,
	},
	computed:{
		filmList:function(){
			return film.state.filmList
		}
	},
	methods:{
		showFilm:function(index){//显示蒙层
			window.scrollTo(0,0);
			var id=this.filmList[index].id
			film.state.filmId=id;
			film.dispatch("getFilmDetail")//发送点击的电影id并请求数据
			film.commit("showFilm")//显示电影蒙层
		},
		showBody:function(cast){
			window.scrollTo(0,0);
			film.state.bodyId=cast.id
			film.dispatch("getBodyDetail")//发送点击的影人id并请求数据
			film.commit("showBody")//显示影人蒙层
		}
	},
}
</script>
<style>
	#app{
		margin-top: 0;
	}
	.film_box{
		width: 80%;
		margin: 1% auto 0 auto;
		border: 1px solid #ddd;
		border-radius: 4px;
		padding: 3% 3%;
	}
	.film_list{
		display: flex;
	}
	.film_box:last-child{
		margin-bottom: 66px;
	}
	.film_box .left{
		flex:1.2;
		display: flex;
		align-items:center;
	}
	.film_box .left img{
		width: 100%;
		height: auto;
	}
	.film_box .right{
		padding-top: 1%;
		padding-left: 10px;
		flex:3;
	}
	.film_box .right p{
		text-align: left;
		font-size: 1.4rem;
		color:#636563;
		margin-top: 2px;
	}
	.film_box .right .film_title a{
		color:#212021;
		font-size: 1.8rem;
	}
	.film_box .right .film_score span{
		color:#de4139;
		font-size: 1.6rem;
		margin-left: 2px;
	}
</style>