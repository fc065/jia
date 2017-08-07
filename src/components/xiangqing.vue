<template>
 <div>

	<div class="xiang">
	    <img :src="this.list9.thumbnail_pic" alt="" class="xiangPic">
          <p>{{this.list9.title}}</p>
          <p class="xiaobian">小编推荐：&nbsp;&nbsp;{{this.list9.title}}{{this.list9.title}}{{this.list9.title}}</p>
          <span>￥&nbsp;<span class="jiage">{{this.list9.coupon_price}}&nbsp;</span>劵后价</span><span class="ren">{{this.list9.buy}}</span><span>人已买</span><br>
          <img src="static/baoyou.jpg" alt="" class="xiangp"> <router-link to="/car"><span class="gouwu" @click="goCar">加入购物车</span></router-link>
    <div class="jingpin" @click="gouTo()">
	</div> 
         <img src="static/jingpin.jpg" alt="">
    </div>

    <div class="jingcai"> 
        <ul>
           <li v-for="x in listJingcai">
               <img :src="x.img" alt="" class="pic"  >
               <p class="jingcaiT">{{x.title}}</p>
               <p class="jingcaiP">券后￥{{x.yuan}}</p>

           </li>
        </ul>


    </div>
 </div>
</template>

<script>
 import axios from 'axios'
  import qs from 'qs';

export default {
  name:'xiangqing',
  data (){
  	 return {    
  	  list9:[] ,
  	  list10:[],
  	  bums:true,
  	  nums:1,
  	  rmb:{},
  	  title:{},
  	  pic:{},
  	  id:{},
  	  listXD:[],
  	 
  	  listJingcai:[
              {
              	title:"卡通透明通用触屏",
              	yuan:"7.9",
              	img:"https://img.alicdn.com/imgextra/i3/681240939/TB2CofCbE7iyKJjSszcXXavlpXa_!!681240939.jpg_240x240.jpg"
              },
              {
              	title:"解压发泄可爱猫咪",
              	yuan:"14.8",
              	img:"https://img.alicdn.com/imgextra/i4/3046953514/TB2xnxNbKZkyKJjSszgXXcpMpXa_!!3046953514.jpg_240x240.jpg"
              },
              {
              	title:"净立方新车除甲醛",
              	yuan:"49",
              	img:"https://img.alicdn.com/imgextra/i3/681240939/TB2E2P7c_IlyKJjSZFrXXXn2VXa_!!681240939.jpg_240x240.jpg"
              }
              ,
              {
              	title:"净立方新车除甲醛",
              	yuan:"49",
              	img:"https://img.alicdn.com/imgextra/i3/681240939/TB2E2P7c_IlyKJjSZFrXXXn2VXa_!!681240939.jpg_240x240.jpg"
              }
       	 	]
  	 }
      

    },
    methods:{

    	   gouTo:function(){

    	   },

          goCar:function(){



            var  xiangData = {
         	  rmb:this.list9.coupon_price,
              pic:this.list9.thumbnail_pic,
              title:this.list9.title,
              num:this.nums,
              id:this.list9.coupon_id,
              rmbs:this.list9.coupon_price

         	}
         	var listXDString;
         	if(!window.localStorage.getItem('xiangKey')){
         		this.listXD.push(xiangData);
         		listXDString = JSON.stringify(this.listXD)
         		window.localStorage.setItem('xiangKey',listXDString);
         	}else{
              
			
					var listArrLocal = window.localStorage.getItem('xiangKey');
				    var listArrData = JSON.parse(listArrLocal);
				
			// for (var i in  listArrData) {  
   //              if ( listArrData[i].id == xiangData.id) {  
   //                   listArrData[i].num = parseInt( listArrData[i].num) + parseInt(xiangData.num);  
   //                  result = true;  
   //              }  
   //          }  				  
				 // for (var i = 0; i < listArrData.length; i++) {
				 	if(listArrData.indexOf(xiangData) !== -1){
				 		xiangData.num++
				 		console.log(xiangData.num)
				 	}
				// }
				    
				    
                       
				
				     
                	   listArrData.push(xiangData);     
				   
	        	       this.listXD = listArrData;
                
	        	       listXDString = JSON.stringify(this.listXD);
                
	        	       window.localStorage.setItem('xiangKey',listXDString); 
				    
		 		
		         
				
	
               
                
          //       else{
                
          //       listArrData.push(xiangData);     
				
	        	// this.listXD = listArrData;
                
	        	// listXDString = JSON.stringify(this.listXD);
                
	        	// window.localStorage.setItem('xiangKey',listXDString);

          //       }
             
                           
				 
	        


         	}


         


			
            //this.$rooter.push({path:'/car'})
            // console.log(xiangD)
          
             // console.log(this.router.query)
             this.$root.arr.push(this.list9)

              
               console.log(listArrData)


         //     var xiangData = {
         //     	  rmb:this.list9.coupon_price,
         //          pic:this.list9.thumbnail_pic,
         //          title:this.list9.title,
         //     }
        	// var xiangD =  JSON.stringify( xiangData );
         //    var  listXD=JSON.stringify(this.listX)
         //    // console.log(xiangD)
         //     window.localStorage.setItem('xiangKey',listXD );
            
    //            axios({
    //         url:"http://localhost:6500/youzhebaolist",
    //         method:"post",
    //         data:{  

    //         	    rmb:this.list9.coupon_price,
    //                 pic:this.list9.thumbnail_pic,
    //                 title:this.list9.title,
    //         },
    //         transformRequest: [function (data) {
    //         	console.log(data)
    // // Do whatever you want to transform the data
    //        let ret = ''
    //     for (let it in data) {
    //        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) +'&'
    //      }
    //            return ret 
    //         }],
    //       headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded'
    //       }
            
    //       })


          
             // sessionStorage.ticketName3 =JSON.stringify(this.$root.arr) 
            // console.log(this.$root.arr)
          }
    },
     mounted() {
     	 this.bums = this.$router.history.current.query.selected;
     	 console.log( this.bums)
            if (this.bums==1) {
            	this.list9 =JSON.parse(sessionStorage.getItem('ticketName1') ) 
            }else{
            	this.list9 =JSON.parse(sessionStorage.getItem('ticketName2') ) 
            }

    
        //var  xiangD =  JSON.stringify( xiangData );
            
       
     // console.log(this.$route.query.id)
     // this.list9 = this.$route.name.id
  
},
   

	
}










</script>
<style>
*{
	margin: 0;

}
li{
	list-style: none;
}
    .xiangPic{
    	width: 100%;
    	height: 350px;
    }
  .jiage{
  	font-weight: 50px;
  	font-size: 18px;
  	color: red;
  }
  .ren{
  	color: red;
  	margin-left: 145px;
  }
  .xiaobian{
  	font-size: 14px;
  	color: red;
  	font-weight: 50px;
  	margin-bottom: 10px;
  }
  .xiangp{
  	margin-left: 10px;
  	margin-top: 10px;
  }
  .xiang{
  	border-bottom:1px solid pink;
  	padding-bottom: 20px;
  }

  .jingpin{
  	width: 100%;
  	margin-top: 20px;
  	margin-bottom: 10px;
  	text-align: center;
  	padding-bottom: 20px;
  	border-bottom:1px solid pink;
  }
  .jingcaiT,.jingcaiP{
  	text-align: center;
  }

  .jingcai li{
  	width: 100%;
  
  }
  .jingcai{
  	height: 620px;
  }

  .gouwu{
  	margin-left: 150px;
  	border: 1px solid red;
  	background-color: red;
  	padding: 5px;

  }
</style>