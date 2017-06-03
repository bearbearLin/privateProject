<template>
	<div id="film_detail">
		<header class="clearfix">
			<a @click="goback()">
				<i v-bind:class="'iconfont icon-taomiaomiao'"></i>	
			</a>
			<span>详情信息</span>
		</header>

		<!-- 电影详情 -->
		<div class="detail_box" v-if="isFilm">
			<h3>{{filmDetail.title}}</h3>
			<p v-if="filmDetail.countries">地区:{{filmDetail.countries[0]}}</p>
			<!-- <p>评分:<span class="get_score">{{filmDetail.rating.average}}</span></p> -->
			<p class="detail_type">类型:
				<span v-for="type in filmDetail.genres">{{type}} </span>
			</p>
			<div class="detail_sum">
				<h5>简介:</h5>
				<p>
					{{filmDetail.summary}}
				</p>
			</div>
			<div class="body_list">
				<div class="body_director" 
					 v-for="dir in filmDetail.directors"
					 @click="showBody(dir.id)">
					<img v-if="dir.avatars" v-bind:src="dir.avatars.medium">
					<img v-else src="../assets/img/unfindimg.jpg">
					<h5 class="ellipsis"
					>{{dir.name}}[导演]</h5>
				</div>
				<div class="body_actor" 
					 v-for="actor in filmDetail.casts"
					 @click="showBody(actor.id)">
					<img v-if="actor.avatars" v-bind:src="actor.avatars.medium">
					<img v-else src="../assets/img/unfindimg.jpg">
					<h5 class="ellipsis"
					>{{actor.name}}</h5>
				</div>
			</div>
		</div>

		<!-- 影人详情 -->
		<div v-else class="body_page">
			<div class="body_detail">
				<div class="body_img">
					<img v-bind:src="bodyInfo.avatars.large">
				</div>
				<div class="body_info">
					<h2>{{bodyInfo.name}}</h2>
					<h3>性别:{{bodyInfo.gender}}</h3>
					<h3>出生地:{{bodyInfo.born_place}}</h3>
					<a href="https://movie.douban.com/celebrity/1274242/mobile">豆瓣详情</a>
				</div>
			</div>
			<h3>主要作品:</h3>
			<div class="body_filmBox">
				<div class="body_film" v-for="(film,index) in bodyInfo.works" 
					@click="showFilm(film.subject.id)">
					<img v-bind:src="film.subject.images.large">
					<h4>{{film.subject.title}}</h4>
				</div>
			</div>
		</div>
		<loading-pop></loading-pop>
	</div>
</template>
<script>
import Vue from "vue"
import film from "../router/film.js"
import Router from 'vue-router'
import LoadingPop from "@/components/LoadingPop"
Vue.use(Router)
export default{
	name:"film-detail",
	film,//将名字为film的vuex store对象注入
	// props:["item"],
	data:function(){
		return {
			isFilm:false,//显示电影详情或者影人详情
		}
	},
	components:{
		LoadingPop,
	},
	methods:{
		goback:function(){
			history.back();
		},
		showFilm:function(filmId){
			film.state.filmId=filmId
			this.isFilm=true;
			film.dispatch("getFilmDetail")
		},
		showBody:function(bodyId){
			this.isFilm=false;
			film.state.bodyId=bodyId;
			film.dispatch("getBodyDetail")
		}
	},
	computed:{
		filmId:function(){
			return this.$route.params.filmId//从路由传过来的参数对象params里获取id
		},
		bodyId:function(){
			return this.$route.params.bodyId
		},
		filmDetail:function(){
			return film.state.filmDetail
		},
		bodyInfo:function(){
			return film.state.bodyDetail
		},
		heightLess:function(){
			return window.document.documentElement.offsetHeight
		}
	},
	watch:{
		heightLess:function(){
			if(window.document.documentElement.offsetHeight<window.document.documentElement.clientHeight){
				window.document.documentElement.style.height=window.document.documentElement.clientHeight+'px'
			}
		}
	},
	created:function(){
		if(this.filmId){
			this.showFilm(this.filmId)
		}else if(this.bodyId){
			this.showBody(this.bodyId)
		}else{
			alert("页面加载错误，返回上一页")
			this.$router.go(-1);//返回上一级路径
		}

	},
}
</script>
<style>
	#film_detail header{
		height: 48px;
		background-color: #d63c31;
		line-height: 48px;
		text-align: center;
		position: relative;
	}
	#film_detail header span{
		color: #fff;
		font-size: 1.8rem;
	}
	#film_detail header a{
		position: absolute;
    	left: 5%;
	}
	#film_detail header a i{
		color: #fff;
    	font-size: 3.5rem;
	}
	/*#film_detail header a img{
		height: 36px;
		width: auto;
	}*/
	#film_detail .detail_box{
		left: 0;
		top: 48px;
		text-align: left;
		background-color: rgba(122,122,122,0.1);
		/*background-color: #fff;*/
		padding: 2% 4%;
		color: #000;
	}
	#film_detail .get_score{
		color: orange;
		font-size: 2rem;
		margin-left: 4px;
	}
	#film_detail .detail_box h3{
		font-size: 2rem;
	}
	#film_detail .detail_box h5{
		text-align: center;
	}
	#film_detail .detail_box p{
		font-size: 1.6rem;
	}
	#film_detail .detail_type span{
		color: #333	;
	}
	#film_detail .detail_box .detail_sum{
		margin-bottom: 4px;
	}
	#film_detail .detail_box .detail_sum h5{
		text-align: left;
		font-size: 1.6rem;
	}
	#film_detail .detail_box .detail_sum p{
		font-size: 1.4rem;
		text-indent: 2rem;
		/*color:#f26a1f;*/
	}
	#film_detail .body_list{
		display: flex;
		flex-wrap:wrap;
		justify-content:space-around;
	}
	#film_detail. .body_list > div{
		flex-basis:30%;
		margin-top: 4%;
	}
	#film_detail .body_list > div img{
		height: 80%;
	}
	#film_detail .body_list > div h5{
		font-size: 1.6rem;
		color: #000;
	}
	#film_detail .body_page{
		top:48px;
		background-color: rgba(122,122,122,0.1);
		width: 100%;
		padding-bottom: 5%;
	}
	#film_detail .body_detail{
		display: flex;
		flex-wrap:wrap;
	}
	#film_detail .body_detail{
		color: #ddd;
		padding-top: 16px;
	}
	#film_detail .body_detail .body_img{
		flex:1;	
	}
	#film_detail .body_detail .body_img img{
		width: 80%;
		height: auto;
		margin: 0 auto;
	}
	#film_detail .body_detail .body_info{
		flex:2;
		text-align: left;
		display: flex;
		flex-direction:column;
		justify-content:center;
		color:#333;
	}
	#film_detail .body_detail .body_info h2{
		font-size: 2.4rem;
	}
	.body_detail .body_info h3{
		font-size: 1.6rem;
		margin-top: 8px;
	}
	#film_detail .body_detail .body_info a{
		font-size: 1.6rem;
		margin-top: 8px;
	}
	.body_page .body_film li{
		/*display: flex;*/
		height: 180px;
	}
	#film_detail .body_page .body_film li img{
		float: left;
		/*width: 120px;
		height: 180px;*/
		height: 80%;
		width: auto;
	}
	#film_detail .body_page .body_film li h3{
		float: left;
	}
	#film_detail .body_page >h3{
		color:#333;
		font-size: 2rem;
		margin-top: 12px;
		text-align: left;
		padding-left: 8px;
	}
	#film_detail .body_page .body_filmBox{
		display: flex;
		flex-wrap:wrap;
		justify-content:space-around;
		align-items:space-around;
		color:#333;
	}
	#film_detail .body_page .body_filmBox img{
		width: 100%;
		height: 80%;
	}
	#film_detail .body_page .body_filmBox h4{
		font-size: 1.4rem;
	}
	#film_detail .body_page .body_filmBox .body_film{
		flex:30%;
		flex-grow:0;
		margin-top: 16px;
	}
</style>