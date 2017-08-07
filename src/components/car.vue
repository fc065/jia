<template>
   <div class="car">
         <div class="carNav">
          <div></div><div>购物车</div> <router-link to="/home"><div>首页</div></router-link>  
         </div>
         <div class="carTitle"> 
            <div class="xinxi">商品</div>
            <div class="j">单价</div>
            <div class="shu">数量</div>
            <div class="ge">总价</div>
            <div class="de" >删除</div>

         </div>
      <ul class="carUl">
        <li class="carLIst" v-for="(m,index) in this.listArrLocal1">
         
          <div class="carImg"> 
             <img :src="m.pic" alt="">
             <p id="pTitle">{{m.title}}</p>
          </div>
           <div class="carTxt">
              
              <p>{{m.rmb}}元</p>
           </div> 
           <div class="jiage">
	            <input type="button" value="+" class="jia" @click="jia(m,index)">
	            <span  class="shuliang">{{m.num}}</span>
	            <input type="button" value="-" class="jian" @click="jian(m,index)" >
           </div>
           <div class="zongjia">
                <p>{{m.rmbs | currency(' ', 0)}}</p>
           </div>
           <div style="font-size: 14px;" @click="dele(listArrLocal1,index)">
               删除
           </div>
        </li>    
       
       
      </ul>
        <div class="jiesuan"> 
           <div class="qing" @click='qk()'>清空购物车</div><div>金额小计<span>{{totalPrice | currency('￥', 0)}}</span></div> <div @click="jz()">去结算</div> 
        </div>
   </div>
</template>
<script>
  import axios from 'axios'
  import Vue2Filters from 'vue2-filters'
  import qs from 'qs';
  import $ from 'jquery'
  
  export default {
      name:'car',
      data () {
         return {
          input1:'',
          listArr:[],
        
          listId:[],
          listArrLocal1:[],
          numZ:{
          	
          }
          	,
          listXDString:[],
          msg3:{

           
          },
          
         }

      },
      methods:{	
      	qk:function(e){
      	$(".carUl").remove()
         window.localStorage.removeItem("xiangKey")
      	},
      	jia:function(m,index){
      		
         //console.log(m.num);
	      m.num++;
          m.rmbs=m.num*m.rmb
      // this.listArrLocal1.splice(this.index[4],1,nums)
      		// let _this=this
      		// this.input1+=1
      
      this.listXDString = JSON.stringify(this.listArrLocal1);
      // console.log(this.listXDString);
	  window.localStorage.setItem('xiangKey',this.listXDString);


      	},
      	jian:function(m,index){
      		// let _this=this
        //     this.input1-=1

        // console.log(m.num);
	       console.log(m.id)
	      if (m.num<=1) {
            alert("如果您不喜欢这件商品请删除掉！")
            m.num=1;
            m.rmbs=m.num*m.rmb
           
	      }else{
	      	m.num--;
	      	m.rmbs=m.num*m.rmb
	      }
	      
      this.listXDString = JSON.stringify(this.listArrLocal1);
	  window.localStorage.setItem('xiangKey',this.listXDString);

      	},
      dele:function(m,index){
      	       
      
      this.listArrLocal1.splice(index,1)
      this.listXDString = JSON.stringify(this.listArrLocal1);
	  window.localStorage.setItem('xiangKey',this.listXDString);



      	       //  console.log(e.target)
                   // var t = this
                   // var id = this.listArr[0].id
       
        // axios({
        // 	url:"http://localhost:6500/youzhebaolist/"+id,
        // 	method:"delete",
        // 	data:{},
        //     transformRequest: [function (data) {            	
        // // Do whatever you want to transform the data
        //    let ret = ''
        // for (let it in data) {
        //    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) +'&'
        //  }
        //        return ret 
        //     }],
        // 	headers: {
        //     'Content-Type': 'application/json'
        //      }
        // }).then((response)=>{
        // 	 e.target.parentNode.remove()
        //    })     


        },
        jz:function(){

        	this.$router.push('/home');
        }
      
      },
      mounted(){
        // console.log(m.id)
      	 // if (m.id.typeOf(this.listArrLocal1[index]).id) {

      	 // }
      	   // this.$router.push({path:"/xiangqing",query:{mm:m,gg:index}})
           
          var listArrLocal = window.localStorage.getItem('xiangKey')

          this.listArrLocal1= JSON.parse(listArrLocal);

        //  console.log(this.listArrLocal1[0].rmb)
    		 
      
      // axios.get('http://localhost:6500/youzhebaolist').then((response)=>{
    	
      // 	      this.listArr = response.data




      	   
      // 	    // for (var i = 0; i < response.data.length; i++) {
      	    	    
      // 	    // 	if (response.data[i] === response.data) {
      	    		
      // 	    // 	}else{
      //      //         this.listArr = response.data
      // 	    // 	}
      // 	    // 	console.log(response.data[0].title)
      // 	    // }
      	       
               
      	      
 

      	

      // 		//if(response.data[i].title === $('.pT')[i]){
      //  //           this.inputs+=1
      //  //           return;
      // 	// 	// }else{
      // 	// 	// 	//console.log($('.carUl').children)
      // 	// 	// 	console.log(response.data[i].id)
      			
      // 	// 	// 	this.listArr = response.data

      // 	// 	// }
      	 
      	
      	
      
      // })
 	// axios.get("http://localhost:6500/youzhebaolist").then((response)=>{
  //     		  // for (var i = 0; i < response.data.length; i++) {
  //     		  // 	//console.log(response.data[i].id)
  //     		  // }
  		   
  // 		      this.arr = response.data
  		 
           
  //        //  this.id = response.data[this.arr].id

  // 		// for (var i = 0; i < response.data.length; i++) {

 			
  // 		// }
  // 	})
  },
  created(){
      
  },
  computed:{
          totalPrice:function(){
			var total = 0;
		this.listArrLocal1.forEach(function(m){
				
		total += m.rmb * m.num;
				
			});
			return total;
		},
           

           }


          // this.arr = JSON.parse(sessionStorage.getItem('ticketName3'))
          // console.log(this.arr)
      
  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  *{
  	margin:0;
  	padding: 0;
  }
     .carLIst{
     	width: 100%;
     	height: 150px;
     	list-style: none;
     	display: flex;
     	justify-content: space-around;
     	align-items: center;
     }
   
    .shuliang{
    	width: 20px;
    	text-align: center;
    }
    .jia,.jian{
    	width: 20px;
    }
    .carTxt{
    	width: 40px;
    	font-size: 12px;
    }
   .carImg {
   	width: 80px;
   	height: 100px;
   }
    .carImg img{
    	width: 80px;
    	
    }
    .carImg p{
    	font-size: 12px;
    	line-height:10px;
    }
    .carNav{
    	width: 100%;
    	height: 49px;
    	background-color: rgb(254,74,101);
    	display: flex;
    	justify-content: space-around;
    	align-items: center;
    }
    .carTitle{
    	width: 100%;
    	height:50px;
    	display: flex;
    	align-items: center;
    }
    .xinxi{
    	margin-left: 30px;
    	margin-right: 50px;
    }
    .j{
    	margin-right: 50px;
    }
    .ge{
    	margin-left: 45px;
    	margin-right: 20px;
    }
    .jiesuan{
    	width: 100%;
    	height: 49px;
    	background-color: rgb(254,74,101);
    	position: fixed;
    	bottom: 0px;
    	left: 0;
    	display: flex;
    	justify-content: space-around;
    	align-items: center;
    }
 


</style>