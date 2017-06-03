<template>
	<!-- 搜索页面 -->
	<div class="search_page">
		<div id="search_banner">
			<input type="text" v-model="keyWord" placeholder="请输入要搜索的电影相关内容">
			<ul>
				<li class="search_btn" @click="sendQ"><i class="iconfont icon-yingpian"></i>电影名搜索</li>
				<li class="search_btn" @click="sendQ"><i class="iconfont icon-dianyingzhiye-yingrenbang"></i>影人搜索</li>
				<li class="search_btn" @click="sendTag"><i class="iconfont icon-biaoqian"></i>标签搜索</li>
			</ul>
		</div>
		<rank-banner></rank-banner>
		<film-list></film-list>
		<!-- <body-detail></body-detail> -->
		<go-top></go-top>
		<loading-pop></loading-pop>
		<footer-banner></footer-banner>
	</div>
</template>
<script>
import Vue from "vue";
import Vuex from "vuex";
import film from "../router/film"
Vue.use(Vuex)
import RankBanner from "@/components/RankBanner"
import FilmList from "@/components/FilmList"
import SearchBanner from "@/components/SearchBanner"
import GoTop from "@/components/GoTop"
import FooterBanner from "@/components/FooterBanner"
import LoadingPop from "@/components/LoadingPop"
export default{
	name:"search",
	film,
	data:function(){
		return {
			tips:"输入电影名/影人名/标签进行搜索",
			keyWord:"",
		}
	},
	components:{
		RankBanner,
		FilmList,
		SearchBanner,
		GoTop,
		FooterBanner,
		LoadingPop,
	},
	methods:{
		sendQ:function(){//按电影名影人名搜索
			if(this.keyWord=="") return;//为空终结
			film.state.searchKey="q="+this.keyWord;
			film.dispatch("getFilmList")
			this.keyWord="";
			film.state.bodyFlag=false;
			film.state.filmFlag=false;
		},
		sendTag:function(){//按标签搜索
			if(this.keyWord=="") return;
			film.state.searchKey="tag="+this.keyWord;
			film.dispatch("getFilmList")
			this.keyWord="";
			film.state.bodyFlag=false;
			film.state.filmFlag=false;
		}
	},
	created:function(){
		film.dispatch("getFilm");
		// console.log(film)
	}
}
</script>
<style>
	#search_banner{
		background-color: #d63c31;
		padding: 12px 0;
		height: 65px;
	}
	#search_banner  input{
		width: 90%;
		height: 24px;
		border-radius: 4px;
	}
	#search_banner ul{
		margin-top: 10px;
	}
	#search_banner .search_btn{
		width: 25%;
		display: inline-block;
		background-color: #fff;
		border-radius: 4px;
		padding: 0 4px;
		font-size: 1.4rem;
	}
	#search_banner .search_btn:active{
		background-color:#ffb600;
	}
	#search_banner .search_btn .iconfont{
		font-size: 1.8rem;
		margin-right: 4px;
		color:#d63c31;
	}
</style>