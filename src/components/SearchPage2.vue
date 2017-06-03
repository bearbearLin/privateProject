<template>
	<div>
		<div id="search_banner">
			<search-banner 
			v-bind:searchTips="tips" 
			@test="test" 
			@sendData="receive"
			v-bind:keyVal="keyWord"
			></search-banner>
			<ul>
				<li class="search_btn" @click="sendQ"><i class="iconfont icon-yingpian"></i>电影名搜索</li>
				<li class="search_btn" @click="sendQ"><i class="iconfont icon-dianyingzhiye-yingrenbang"></i>影人搜索</li>
				<li class="search_btn" @click="sendTag"><i class="iconfont icon-biaoqian"></i>标签搜索</li>
			</ul>
		</div>
		<rank-banner></rank-banner>
		<film-list></film-list>
	</div>
</template>
<script>
import RankBanner from "@/components/RankBanner"
import FilmList from "@/components/FilmList"
import SearchBanner from "@/components/SearchBanner"
export default{
	name:"search",
	data:function(){
		return {
			tips:"输入电影名/影人名/标签进行搜索",
			keyWord:""
		}
	},
	components:{
		RankBanner,
		FilmList,
		SearchBanner
	},
	methods:{
		test:function(data){
			this.keyWord=data;

		},
		receive:function(data){
			this.keyWord=data;
		},
		sendQ:function(){
			console.log("q"+this.keyWord)
			this.keyWord=""
		},
		sendTag:function(){
			console.log("tag="+this.keyWord)
			this.keyWord=""
		}
	}
}
</script>
<style>
	#search_banner{
		background-color: #d63c31;
		padding: 3% 0;
	}
	#search_banner .search_banner input{
		width: 80%;
	}
	#search_banner ul{
		margin-top: 10px;
	}
	#search_banner .search_btn{
		width: 25%;
		display: inline-block;
		background-color: #fff;
		border-radius: 4px;
		padding: 4px;
		font-size: 1.4rem;
	}
	#search_banner .search_btn:active{
		background-color:#ffb600;
	}
	#search_banner .search_btn .iconfont{
		font-size: 2rem;
		margin-right: 4px;
		color:#d63c31;
	}
</style>