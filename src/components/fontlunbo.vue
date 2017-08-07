<template>
   <div class="fontLun">
        <div class="imgR"><img src="static/wenzilunbo.jpg" alt=""></div>
         <swiper :options="swiperOption" ref="mySwiper" class="lunf">
          <!-- slides -->
          <swiper-slide class="lun1">
          
         <span style="margin-right: 5px;margin-bottom: 10px;">速来get</span><span>孩子长高的信号，宝妈切勿错过</span>
   
          </swiper-slide>
          <swiper-slide class="lun1">
         <span style="margin-right: 10px; margin-bottom: 10px;">惊人</span><span>原来空调一直都用错了，这样用才最省钱！</span>  
          </swiper-slide>
               
       </swiper>
   </div>
</template>
  <script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
  
   
    export default {
  	name :'fontlunbo',
  	data () {
  	   return {

  	   	swiperOption: {
            autoplay : 2000,
            loop : true,
            // pagination : '.swiper-pagination',
            //autoplayDisableOnInteraction:true ,
            direction: 'vertical'
        },
          // list2:[]

  	   }
  	},
  	// created(){

		 //    let _this = this;                            
		 //    axios.get('static/fontLunbo.json')
		 //    .then((response)=>{   
		        
		 //       let list2 = response.data.data[0].cms_wap_yhkb.data;
		 //       _this.list2 = list2;
		 //      console.log(list2)
		 //      })
		 //      .catch(function (err) {
		 //        console.log(err);
		 //      })
		    
   //  }
  
  }

  </script>
  <style>
  .fontLun{
  	width: 100%;
  	height: 35px;
  	display: flex;
  	justify-content: center;
  	align-items: center;
  	
  }
  .lunf{
  	width: 190px;
  	height: 35px;
  }
  .lun1 {
  	width: 200px;
  	height: 35px;
  
  }
  .lun1 span{
  	font-size: 14px;
  }
  .imgR{
  	margin-left: 20px;
  }
  </style>