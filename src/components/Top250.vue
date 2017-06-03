<template>
	<div id="topFilm">
		<ul class="topfilmList">
			<li v-for='film in filmList'>
				<div>
					<img v-bind:src="film.images.medium">
				</div>
				<h3>{{film.title}}</h3>
				<p>
					豆瓣评分:<span class="average">{{film.rating.average}}</span>
				</p>
			</li>
		</ul>
		<div class="top_type">
			<img src="../assets/img/type_icon.png" @click="flag=!flag">
			<ul v-show="flag" class="navBanner clearfix">
				<li v-for="item in typeList" @click="getType(item)">{{item}}</li>
			</ul>
		</div>
		<go-top></go-top>
	</div>
</template>

<script>
import GoTop from "@/components/GoTop"
	export default{
		name:"top-250",
		components:{
			GoTop
		},
		data:function(){
			return {
				filmList:[],
				start:0,
				flag:false,
				num:20,
				scrollable:true,//分类之后不再触发滚动条加载数据
				typeList:["全部","剧情","喜剧","爱情","动作","科幻","音乐","犯罪","惊悚","战争","历史","奇幻","同性"]
			}
		},
		methods:{
			scroll:function(){
				if(this.scrollable){//判断是否可触发瀑布流加载
					var topFilm=document.getElementById("topFilm")
					var boxB=topFilm.getBoundingClientRect().bottom;//电影列表底部距离窗口的高度
					var cB=document.documentElement.clientHeight//屏幕高度
					if(boxB<cB+5){//判断底部栏高度是否小于可是窗口高度，是则加载数据
						this.num+=20
						this.getFilm()
					}
				}
			},
			getFilm:function(){
				//记载电影
				this.filmList.length=0;
				var film=require("../assets/json/filmTop250.json").subjects;
				for(var i =0;i<this.num;i++){
					if(i>248){
						return
					}
					this.filmList.push(film[i])
				}	
			},
			getType:function(type){
				var that=this
				var newList=[]
				if(type==="全部"){//点击全部加载数据
					this.scrollable=true;
					this.getFilm()
				}else{
					this.scrollable=false;
					this.filmList.forEach(function(key,index){
						var film=key;
						key.genres.forEach(function(key){
							if(key===type){//如果类别存在插入数据到新数组
								newList.push(film)
							}
						})
					})
					this.filmList.length=0//清空原数组
					newList.forEach(function(key){//将新数组拷贝给filmList
						that.filmList.push(key)
					})
				}	
			}
		},
		created:function(){
			this.getFilm()
		},
		mounted:function(){
			window.addEventListener("scroll",this.scroll)//给window添加滚动条监听
		},
		beforeDestroy:function(){
			window.removeEventListener("scroll",this.scroll)//该组件毁灭时移除滚动条事件
		}
	}
</script>
<style>
	#topFilm .topfilmList{
		/*display: flex;*/
		text-align: left;
		display: flex;
		flex-wrap:wrap;
		justify-content:space-around;
		padding: 3%;
		margin-bottom: 66px;
	}
	#topFilm .topfilmList li {
		flex:27%;
		flex-grow:0;
		text-align: center;
		margin-top: 16px;
		border: 1px solid #ddd;
		border-radius: 4px;
		padding-bottom:1%;
	}
	#topFilm .topfilmList li > div{
		height: 80%;
	}
	#topFilm .topfilmList li > div img{
		height: 100%;
	}
	#topFilm .topfilmList li h3{
		color: #333;
		font-size: 1.4rem;
		width: 100%;
		overflow: hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-line-clamp: 1;
	    -webkit-box-orient: vertical;
	}
	#topFilm .topfilmList p{
		font-size: 1.2rem;
	}
	#topFilm .topfilmList .average{
		font-size: 1.4rem;
		color: #f5a623;
	}
	#topFilm .down_arrow img{
		width: 24px;
		height: 24px;
		margin: 0 auto;
	}
	#topFilm .navBanner{
		transition: all 1s;
		display: flex;
		flex-direction:column;
		position: absolute;
		top: 24px;
	}
	#topFilm .navBanner li{
		border-radius: 4px;
		margin-top: 4px;
		background-color:rgba(122,122,122,0.6);
		color:#fff;
		flex:1;
		width: 36px;
	}
	#topFilm .top_type{
		position: fixed;
	    right: 4%;
	    top: 22%;
	    width: 36px;
	    height: 32px;
	}
	#topFilm .top_type img{
		opacity: 0.8;
	}
</style>