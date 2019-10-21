<template>
<div >

	<main id="zjcopyPDF">
        <h1>vue路由传递参数的几种方式详细说明</h1>
        <p>&nbsp;vue-router传递参数分为两大类</p>
		<div><strong>编程式的导航 router.push</strong></div>
		<div><strong>声明式的导航 &lt;router-link&gt;</strong></div>
		<div>&nbsp;</div>
		<h2>编程式导航</h2>
		<div>1）编程式导航传递参数有两种类型：字符串、对象。</div>
		<div><u><strong>字符串</strong></u></div>
		<div>字符串的方式是直接将路由地址以字符串的方式来跳转，这种方式很简单但是不能传递参数：</div>
		<div>this.$router.push(&quot;home&quot;);</div>
		<div><u><strong>对象</strong></u></div>
		<div>想要传递参数主要就是以对象的方式来写，分为两种方式：<strong>命名路由、查询参数，</strong>下面分别说明两种方式的用法和注意事项。</div>
		<div>&nbsp;</div>
		<div><span style="color: rgb(255, 0, 0);">命名路由</span></div>
		<div>命名路由的前提就是在注册路由的地方需要给路由命名如：</div>
		<div>&nbsp;</div>
		<div>命名路由传递参数需要使用params来传递，这里一定要注意使用params不是query。目标页面接收传递参数时使用params。特别注意：命名路由这种方式传递的参数，如果在目标页面刷新是会出错的</div>
		<div>&nbsp;</div>
		<div>使用方法如下：</div>
		<div><span style="color: rgb(255, 0, 0);">this.$router.push({ name: 'news', params: { userId: 123 }})</span></div>
	</main>	
	<aside>
		<el-button type="primary" @click="getPdf(pdfTitle)"> 导出为pdf文件</el-button>
	</aside>
  </div>
</template>
<script>
	export default {
    data () {
      return {
         pdfTitle: '页面导出PDF文件名'
      }
    },
    methods:{
    }

 }
</script>
<style scoped>
	main{ width: 70%; float: left; border-right:1px solid #ccc;  box-sizing: border-box; padding:20px;}
    aside{width: 25%; float: right; }
</style>
