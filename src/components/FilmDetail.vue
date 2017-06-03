<template>
	<div class="detail_pop" 
		v-if="flag" 
		v-cloak
		v-on:click="hideFilm">
		<h3>{{filmDetail.title}}</h3>
		<p v-if="filmDetail.countries">地区:{{filmDetail.countries[0]}}</p>
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
				 @click="showBodyDetail(dir)">
				<img v-if="dir.avatars" v-bind:src="dir.avatars.medium">
				<img v-else src="../assets/img/unfindimg.jpg">
				<h5>{{dir.name}}[导演]</h5>
			</div>
			<div class="body_actor" 
				 v-for="actor in filmDetail.casts"
				 @click="showBodyDetail(actor)">
				<img v-if="actor.avatars" v-bind:src="actor.avatars.medium">
				<img v-else src="../assets/img/unfindimg.jpg">
				<h5>{{actor.name}}</h5>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:"film-detail",
		methods:{
			cancelBub:function(e){//取消演员链接的冒泡
				e.cancelBubble=true;
			},
			hideFilm:function(){
				this.$store.commit("hideFilm")
			},
			showBodyDetail:function(body){
				this.$store.commit("showBody");
				this.$store.state.bodyId=body.id
				this.$store.dispatch("getBodyDetail")
			}
		},
		computed:{
			flag:function(){
				return this.$store.state.filmFlag;
			},
			filmDetail:function(){
				return this.$store.state.filmDetail
			}
		}
	}
</script>
<style>
	.detail_pop{
		position: absolute;
		left: 0;
		top: 89px;
		text-align: left;
		background-color: rgba(0,0,0,0.7);
		padding: 2% 4%;
		padding-bottom: 200%;
		color: #ddd;
		margin-bottom: 66px;
	}
	.detail_pop h3{
		font-size: 2rem;
	}
	.detail_pop h5{
		text-align: center;
	}
	.detail_pop p{
		font-size: 1.6rem;
	}
	.detail_pop .detail_sum{
		margin-bottom: 4px;
	}
	.detail_pop .detail_sum h5{
		text-align: left;
		font-size: 1.6rem;
	}
	.detail_pop .detail_sum p{
		font-size: 1.4rem;
		text-indent: 2rem;
		/*color:#f26a1f;*/
	}
	.body_list{
		display: flex;
		flex-wrap:wrap;
		justify-content:space-around;
	}
	.body_list > div{
		flex-basis:30%;
		margin-top: 4%;
	}
	.body_list > div img{
		height: 80%;
	}
	.body_list > div h5{
		font-size: 1.6rem;
		color:#ddd;
	}
</style>
