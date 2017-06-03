<template>
	<div class="seat">
		<i class="iconfont icon-danrenzuowei1"
		   v-bind:class="[{active:activeFlag},{selected:selectFlag}]"
		   @click="active"
		></i>
	</div>
</template>
<script>
export default{
	name:"seat-btn",
	props:['index'],
	data:function(){
		return {
			activeFlag:false
		}
	},
	methods:{
		active:function(){
			if(!this.selectFlag){
				this.activeFlag=!this.activeFlag
			}
		}
	},
	computed:{
		selectFlag:function(){
			if(this.index%3===0){
				return true
			}else{
				return false
			}
		}
	}
}
</script>
<style>	
	.seat{
		flex:8%;	
	}
	.seat .iconfont{
		font-size: 2.4rem;
	}
	.seat .selected{
		color:rgba(255,0,0,0.7);
		border-radius: 8px;
		font-weight: bold;
	}
	.seat .active{
		color:rgba(0,255,0,0.7);
		/*color:#fff;*/
		/*background-color: #de4139;*/
		border-radius: 8px;
		font-weight: bold;
	}
</style>