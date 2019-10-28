<template>
  <div class="home">
    <div class="qrcode2" ref="zjcopy"></div>  
  </div>
</template>
<script>
import QRCode from 'qrcodejs2' 
export default {
  name: 'home',
  mounted(){
  	this.showQRCode();
  },
  methods:{
  	showQRCode(){  
    let url=window.location.href;		
    var qrcode = new QRCode(this.$refs.zjcopy, {  
        text: url,  
        width: 100,  
        height: 100,  
        colorDark: '#000000',  
        colorLight: '#ffffff',  
        correctLevel: QRCode.CorrectLevel.H  
      });  
    } 
  }

}
</script>
<style scoped>
.qrcode2{ width: 100px; height: 100px; margin:0 auto; }
</style>
