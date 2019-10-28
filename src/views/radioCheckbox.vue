<template>
  <div class="zjcopy">
    <div class="box">
      <div v-for="(item,index) in radioList" :key="index" class="radioCss" >
        <input v-show="false" type="radio" name="gender" :value="item.value" :id="item.value" :checked="sex==item.value" @click="clickRadio(item.value)" />
        <label :for="item.value">
	        <div v-show="sex==item.value" class="a4" alt="选中"></div>
	        <div v-show="sex!=item.value" class="a3" alt="未选中"></div>
          {{item.label}}
        </label>
      </div>
    </div>

    <!-- 复选框 -->
    <div class="box">
      <div v-for="item in checkBoxList" :key="item.value" >
        <label>
          <div v-show="fruit.includes(item.value)" class="a2">{{item.label}} </div>
          <div  v-show="!fruit.includes(item.value)"  class="a1">{{item.label}} </div>
          <input v-show="false" @click="clickCheckBox(item.value)" name="Fruit" type="checkbox" :value="item.value" :checked="fruit.includes(item.value)"  />          
        </label>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return {
      radioList:[
        {value:"男",label:"男"},
        {value:"女",label:"女"},
      ],
      sex:"",
      checkBoxList:[
        {value:"苹果",label:"苹果"},
        {value:"香蕉",label:"香蕉"},
        {value:"梨",label:"梨"},
        {value:"西瓜",label:"西瓜"}
      ],
      fruit:[]
    }
  },
  methods:{
    clickRadio(val){
      this.sex=val;
    },
    clickCheckBox(val){
      if(this.fruit.includes(val)){
        this.fruit.splice(this.fruit.indexOf(val),1);
      }else{
        this.fruit.push(val);
      }
    }
  }
}
</script>

<style scoped>
.box{ width: 90%; border:1px solid #ddd; padding:20px 5%; clear: both; overflow: hidden; margin: 20px auto;}
.radioCss{ width: 50%; float: left;  }
.a1{display:inline-block;padding:7px 13px; font-size: 13px; background-color:#ddd;margin:0px 20px 10px 0; float: left;color:#444;}
.a2{display:inline-block;padding:7px 13px;  font-size: 13px; background-color:#799EDC;margin:0px 20px 10px 0; float: left; color:#fff;  }
.a3{display:inline-block;padding:10px;border-radius:10px; font-size: 13px; background-color:#ddd;margin:0px 10px 10px 0; float: left;color:#444;}
.a4{display:inline-block;padding:10px;border-radius:10px; font-size: 13px; background-color:#799EDC;margin:0px 10px 10px 0; float: left; color:#fff;}
</style>