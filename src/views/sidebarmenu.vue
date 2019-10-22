<template>
	<div class="sildebar">
        <el-button type="info"  @click="showSideMenu">开启右侧边栏 </el-button>
		<div class="mask" v-show="isMask" @click="showSideMenu"></div>
		<transition name="slide-fade">
			<div class="zjcopyMenu" v-show="isSide">
				菜单内内容
			</div>
		</transition>
	</div>
</template>
 
<script>
	export default {
		data () {
			return {
				isSide: false,
				isMask: false
			}
		},
		methods: {
			showSideMenu () {
				if (this.isSide) {
					this.isSide = false
					this.isMask = false
				} else {
					this.isSide = true
					this.isMask = true
				}
				
			},
		}
	}
</script>
 
<style>
	.zjcopyMenu{
	color: #fff;
	position: fixed;
    width: 286px;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 11;
    overflow-y: auto;
    background: #000;
	}
	.slide-fade-enter-active {
	  transition: all .5s ease;
	}
	.slide-fade-leave-active {
	  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	.slide-fade-leave-to,.slide-fade-enter{
	  transform: translateX(286px);
	  opacity: 0;
	}
	.mask {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 1;
    z-index: 10;
    background: rgba(0,0,0,0.5);
	}
</style>
