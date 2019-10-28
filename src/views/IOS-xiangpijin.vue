<template>
  <div class="home">
    <div class="qrcode2" >5555555</div> 
    <div>66666</div> 
  </div>
</template>
<script>

export default {
  mounted(){
	  	let ios = navigator.userAgent.indexOf('iphone');// 判断是否为ios
		// 获取触摸坐标
		let _this = this;
		document.body.addEventListener('touchstart', _this.touchstartFunction, { passive: false });
		//
		if (ios === -1) {
		let el = document.querySelector('.home');// 需要滑动的dom元素
		iosTrouchFn(el);
		}

		function iosTrouchFn(el) {
		// el需要滑动的元素
		el.addEventListener('touchmove', function(e) {
		e.isSCROLL = true;
		});
		document.body.addEventListener('touchmove', _this.touchmoveFunction, { passive: false }); // passive防止阻止默认事件不生效
		}
    },
    beforeDestroy(){
		let _this = this;
		document.body.removeEventListener('touchstart', _this.touchstartFunction, { passive: false });
		document.body.removeEventListener('touchmove', _this.touchmoveFunction, { passive: false });
    },
    methods:{
// 滑动开始获取初始位置坐标
	touchstartFunction(e) {
	this.startY = e.touches[0].pageY;
	},

// 监听手指滑动事件
	touchmoveFunction(e) {
		let el = document.querySelector('.home');// 需要滑动的dom元素这个为包裹滑动元素的父元素
		if (!e.isSCROLL) {
	  	  e.preventDefault(); // 阻止默认事件(上下滑动)
		// alert("阻止了");
		} else {
		// 需要滑动的区域
		let moveY = e.touches[0].pageY;
		let top = el.scrollTop;
		let ch = el.clientHeight;// 对象最顶端和窗口最顶端之间的距离
		let scrollH = el.scrollHeight; // 含滚动内容的元素大小
		if ((top === 0 && moveY > this.startY) || (top + ch === scrollH && moveY < this.startY)) {
		e.preventDefault();
		// alert("阻止了");
		} else {
		alert('开启了');
		}
		}
	},
  }

}
</script>
<style scoped>
.qrcode2{ width: 100%; height: 100vh; margin:0 auto; background-color: #444; }
</style>
