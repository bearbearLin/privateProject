<template>
	<div class="header clearfix">
		<header>
			<div class="left" @click="cityFlag=!cityFlag" v-cloak>
				{{area}}
				<!-- 向下箭头 -->
				<span></span>
			</div>
			<div class="mid">
				<div v-for="(item,index) in topList"
					 @click="active(index)"
					 v-bind:class="{active:activeIndex===index}"
					 v-on:click="tab(index)"
					 >
					{{item}}
				</div>
			</div>
			<div class="right"></div>
		</header>
		<section class="select_city" v-bind:style="{display:(cityFlag)?'block':'none'}">
			<search-banner 
			v-bind:searchTips="'请输入城市名'"
			@test="getVal"></search-banner>
			<h4>定位城市</h4>
			<p>{{area}}</p>
			<h4>热门城市</h4>
			<div class="hitcity">
				<span v-for="city in hitCity" @click="getCity(city)">{{city}}</span>
			</div>
		</section>
	</div>
</template>
<script>
import SearchBanner from "@/components/SearchBanner";
	export default{
		props:["topList"],
		name:"header-banner",
		data:function(){
			return {
				activeIndex:0,//头部中间按钮下标值
				cityFlag:false,//城市选择列表标识符
				hitCity:["上海","北京","广州","深圳","武汉","天津","西安","南京","杭州","成都","重庆","厦门"],
				area:""
			}
		},
		components:{
			SearchBanner
		},
		methods:{
			active:function(index){
				this.activeIndex=index
			},
			tab:function(index){
				this.$emit("tab",index)
			},
			getArea:function(){
				var ip=returnCitySN["cip"];
				this.$http.jsonp("http://api.map.baidu.com/location/ip?ak=q8e94pdMGeXHRyOeb49wDMkHWqkW6oiP&ip="+ip).then((res)=>{
					var city=res.body.content.address_detail.city
					city=city.substr(0,city.length-1)//将最后一个市字去除
					this.$store.commit("getCity",city)
					this.area=city
				})
			},
			getCity:function(city){
				this.$store.commit("getCity",city)
				this.area=city;
				this.cityFlag=!this.cityFlag;
			},
			getVal:function(city){
				if(isNaN(city)){
					this.$store.commit("getCity",city)
					this.area=city;
					this.cityFlag=!this.cityFlag;
				}else{
					alert("请输入正确的城市名")
				}
				
			}
		},
		created:function(){
			this.getArea()
		}
	}
</script>
<style>
	.header header{
		display: flex;
		position: fixed;
		width: 100%;
		top: 0;
		background-color: #d63c31;
		height: 48px;
		font-size: 1.5rem;
		color:#fffbff;
		z-index: 3;
	}
	.header .left,.header .right{
		flex:1;
		line-height: 48px;
	}
	.left span{
		margin-left: 4px;
		/*display: inline-block;*/
		display: inline-block;
		width: 8px;
		height: 8px;
		border-top: 2px solid #fff;
		border-left:2px solid #fff;
		transform:rotate(-135deg);
		position: relative;
		top:-2px;
	}
	.mid{
		flex:2;
		display: flex;
		align-items:center;
	}
	.mid div{
		background-color: #b51c18;
		flex:1;
		height: 32px;
		line-height: 32px;
		border-radius: 4px;
		transition:all .5s;
	}
	.mid .active{
		background-color: #ffffff;
		color:#d6494a;
	}
</style>