<template>
  <div>
    <div class="nav">
         <img src="../assets/logo.jpg" alt=""><input class="inp" type="text" value="" placeholder="好宝贝 等你搜" v-model="inputs"><input type="button" value="搜索" class="inp2" @click="ss()"> <span class="fenlei" @click="showhide()">分类</span> <router-link to="/denglu"><span class="denglu">登录</span></router-link>
    </div>
   
  <swiper :options="swiperOption" ref="mySwiper" style="margin-top: 49px;">
          <!-- slides -->
          <swiper-slide><img src="../assets/lun1.jpg" alt="" class="lun"></swiper-slide>
          <swiper-slide><img src="../assets/lun2.jpg" alt=""  class="lun"></swiper-slide>
          <swiper-slide><img src="../assets/lun3.jpg" alt="" class="lun"></swiper-slide>
          <swiper-slide><img src="../assets/lun4.jpg" alt="" class="lun"></swiper-slide>
          
          <!-- Optional controls -->
         <!--  <div class="swiper-pagination"  slot="pagination"></div> -->
       </swiper>
    <leader></leader>
    <fontlunbo></fontlunbo>
    <dongdongqiang></dongdongqiang>
    <listsshow></listsshow>
    <sousuo v-show="isfalse" class="sss"></sousuo>
 </div>


</template>
<script>

  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import leader from './leader'
  import fontlunbo from './fontlunbo'
  import dongdongqiang from './dongdongqiang'
  import listsshow from './listsshow'
  import sousuo  from './sousuo'
  import sousuo2  from './sousuo2'
  import denglu from './denglu'
  import zhuce from './zhuce'

  export default {
  	name :'home',
  	data () {
  	   return {
          inputs:this.value,
          isfalse:false,
  	      	swiperOption: {
            autoplay : 3000,
            loop : true,
            // pagination : '.swiper-pagination',
            autoplayDisableOnInteraction:true
        }

  	   }
  	},
    components:{
        leader,
        fontlunbo,
        dongdongqiang,
        listsshow,
        sousuo,
        denglu,
        zhuce
       
    },methods:{
        showhide:function(bol){
          this.isfalse = !this.isfalse
    },
        ss:function(){
         console.log(this.inputs)
         this.$router.push({path:'/sousuo2',query:{id2:this.inputs}}) 
        
        
         
        }

  }

  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  *{
    margin:0;
    padding: 0;
  }
  .nav{
    width:100%;
    height: 49px;
    display: flex;
    align-items: center;
    background-color: rgb(254,74,101);
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 999
  }
  .nav img{
    height: 25px;
  }
  .nav .inp{
    height: 25px;
    width: 170px;
    border-radius: 4px;
    box-sizing: border-box;
  }
  .nav .inp2{
    height: 25px;
    width: 35px;
    box-sizing: border-box;
    border-radius: 4px;
    background-color: rgb(254,74,101);
  }
  .fenlei{
    margin-left: 10px;
    margin-right: 10px; 
  }
  .fenlei,.denglu{
    font-size: 14px;
  }
  .lun{
    width: 100%;
    height: 130px;
  }


</style>
