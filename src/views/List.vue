<template>
	<div class="container">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
	     type="index"
	     width="50">
      </el-table-column>
      <el-table-column
        prop="name"
        label="功能"
        width="180">
      </el-table-column>
      <el-table-column
        prop="des"
        label="说明"
        >
      </el-table-column>
      <el-table-column
        label="操作"
        width="240">
         <template slot-scope="scope">
	       <el-button size="small" type="default"> <router-link :to=scope.row.url  target="_blank">查看页面</router-link></el-button>
         <el-button size="small" type="default" @click="goInstr(scope.row.instr)"> 阅读说明</el-button>
	     </template>
      </el-table-column>
    </el-table>
    </div>
  </template>
  <script>
    export default {
      data() {
        return {
          tableData: [
          {
            name: 'html导出pdf文件',
            des: '先把html利用html2canvas生成图片，然后用jspdf将图片转换成pdf',
            instr:'http://www.zjcopy.com/05/12/2019464.html',
            url: '/html2pdf'
          }, {
            name: 'vue左滑显示菜单',
            des: '利用vue的transition和v-show属性，菜单从左侧滑动显示隐藏',
            url: '/sidebarMenu',
            instr:'http://www.zjcopy.com/05/09/2019467.html'
          }
          ]
        }
      },
      methods:{
        goInstr(x){
          window.open(x, '_blank');      
        }
      }
    }
  </script>
  <style scoped>
  .container{ width: 90%; margin: 0 auto; }
  a{color:#333; text-decoration: none;}
  </style>