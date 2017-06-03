import Vue from "vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router"; 
import Vuex from 'vuex';
Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(VueRouter)
export default new Vuex.Store({
	name:"film",
	state:{
		loadFlag:false,//加载蒙层标记
		searchKey:"tag=搞怪",//搜索关键词q
		selectVal:"",//下拉列表选项的值
		searchUrl:"https://api.douban.com/v2/movie/search?",
		// searchQ:"http://miaoeyes.duapp.com/searchQ.php?",
		// searchTag:"http://miaoeyes.duapp.com/searchTag.php?",
		filmUrl:"https://api.douban.com/v2/movie/subject/",//电影详情请求接口
		bodyUrl:"https://api.douban.com/v2/movie/celebrity/",//影人详情请求接口
		filmId:'',//电影详情id
		bodyId:'',//影人id
		filmList:{},//电影列表
		filmDetail:{},//电影详情信息
		bodyDetail:{},//影人信息
		lastDetail:{}//存储上一条记录，在用户点击返回按钮时调出来
	},
	mutations:{
		showLoad:function(state){
			state.loadFlag=true;
		},
		hideLoad:function(state){
			state.loadFlag=false;
		},
	},
	actions:{
		getFilm:function(film){//页面加载前初始化电影列表
			var films=require("../assets/json/film.json")
			// console.log(film)
			film.state.filmList=films.subjects;
		},
		getFilmList:function(film){//请求电影列表
			film.state.filmList={}//请求前把原来的数据清空
			Vue.http.jsonp(film.state.searchUrl+film.state.searchKey).then((res)=>{
					film.state.filmList=res.body.subjects
				},
				(err)=>{
					alert("接口维护中，请过一段时间后再尝试")
				})
		},
		getFilmDetail:function(film){//请求电影详情
			Vue.http.jsonp(film.state.filmUrl+film.state.filmId).then((res)=>{
				film.state.filmDetail=res.body
			},(err)=>{
					alert("接口维护中，请过一段时间后再尝试")
				})
		},
		getBodyDetail:function(film){//请求影人详情
			Vue.http.jsonp(film.state.bodyUrl+film.state.bodyId).then((res)=>{
				film.state.bodyDetail=res.body
			},(err)=>{
					alert("接口维护中，请过一段时间后再尝试")
				})
		},
		getSelectVal:function(film,val){//获取下拉列表选项的值
			var f=film.state.filmList;
			if(val=='评分最高'){
				for(var i=0;i<f.length;i++){//冒泡排序，由高到低排序
					for(var j=i;j<f.length;j++){
						if(f[i].rating.average<f[j].rating.average){
							var temp=f[i];
							Vue.set(f, i, f[j]);
							Vue.set(f, j, temp);
						}
					}
				}
			}else if(val=='评分最低'){
				for(var i=0;i<f.length;i++){//冒泡排序，由低到高排序
					for(var j=i;j<f.length;j++){
						if(f[i].rating.average>f[j].rating.average){
							var temp=f[i];
							Vue.set(f, i, f[j]);
							Vue.set(f, j, temp);
						}
					}
				}
			}else{
				// 发起新的请求
				film.state.searchKey="tag="+val;
				film.dispatch("getFilmList")
			}
		}
	}
})