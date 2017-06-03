<template>
	<div class="body_page" v-if="flag" @click.stop="hidePop">
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
				@click="showFilmDetail(film)">
				<img v-bind:src="film.subject.images.large">
				<h4>{{film.subject.title}}</h4>
			</div>
		</div>
	</div>
</template>
<script>
import FilmList from "@/components/FilmList"
export default{
	name:"body-detail",
	components:{
		FilmList
	},
	methods:{
		hidePop:function(){
			this.$store.commit("hideBody")
			this.showFlag=false;
		},
		showFilmDetail:function(film){
			window.scrollTo(0,0)
			this.$store.commit("showFilm");
			this.$store.state.filmId=film.subject.id
			this.$store.dispatch("getFilmDetail")
		}
	},
	computed:{
		flag:function(){//动态返回store state里的数据
			return this.$store.state.bodyFlag;
		},
		bodyInfo:function(){
			return this.$store.state.bodyDetail
		}
	}
}
</script>
<style>
	.body_page{
		position: absolute;
		top:89px;
		background-color: rgba(0,0,0,0.8);
		width: 100%;
		padding-bottom: 100%;
	}
	.body_detail{
		display: flex;
		flex-wrap:wrap;
	}
	.body_detail{
		color: #ddd;
		padding-top: 16px;
	}
	.body_detail .body_img{
		flex:1;	
	}
	.body_detail .body_img img{
		width: 80%;
		height: auto;
		margin: 0 auto;
	}
	.body_detail .body_info{
		flex:2;
		text-align: left;
		display: flex;
		flex-direction:column;
		justify-content:center;
	}
	.body_detail .body_info h2{
		font-size: 2.4rem;
	}
	.body_detail .body_info h3{
		font-size: 1.8rem;
		margin-top: 8px;
	}
	.body_detail .body_info a{
		font-size: 1.6rem;
		margin-top: 8px;
	}
	.body_page .body_film li{
		/*display: flex;*/
		height: 180px;
	}
	.body_page .body_film li img{
		float: left;
		/*width: 120px;
		height: 180px;*/
		height: 80%;
		width: auto;
	}
	.body_page .body_film li h3{
		float: left;
	}
	.body_page >h3{
		color:#ddd;
		font-size: 1.6rem;
	}
	.body_page .body_filmBox{
		display: flex;
		flex-wrap:wrap;
		justify-content:space-around;
		align-items:space-around;
		color:#ddd;
	}
	.body_page .body_filmBox img{
		width: 100%;
		height: 80%;
	}
	.body_page .body_filmBox h4{
		font-size: 1.4rem;
	}
	.body_page .body_filmBox .body_film{
		flex:30%;
		flex-grow:0;
		margin-top: 6px;
	}
</style>