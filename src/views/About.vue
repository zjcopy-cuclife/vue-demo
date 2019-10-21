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
        width="180">
         <template slot-scope="scope">
	        <router-link :to=scope.row.url >查看</router-link>
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
            url: '/html2pdf'
          }, {
            name: 'html导出pdf文件',
            des: '先把html利用html2canvas生成图片，然后用jspdf将图片转换成pdf',
            url: '/html2pdf'
          }
          ]
        }
      }
    }
  </script>
  <style scoped>
  .container{ width: 90%; margin: 0 auto; }
  </style>