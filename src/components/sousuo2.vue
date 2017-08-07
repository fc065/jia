
<template>
 <div>
     <nav class="nav2">
        <router-link to="/home"><</router-link> <span @click="huanTitle()">{{this.$route.query.name}}</span> <router-link to="/home">首页</router-link>
     </nav>
     <div class="zhanshi">
           <div>人气</div>
           <div>最新</div>
           <div>销量</div>
           <div>价格</div>
     </div>
     <ul> 
         <!--< li v-for = > -->
         <div v-for="(k,index) in  filterBy(listk ,this.inputs)" class="listshow" @click="go2(index)">
             <img :src="k.thumbnail_pic" alt="" class="pic" >
               <p class="listT">{{k.title}}</p>
               <p class="listP">券后￥{{k.raw_price}}<span class="listS">{{k.month_sales}}人已买</span></p>
         </div>
         </li>
     </ul>
 </div>
</template>
<script>
 import Vue2Filters from 'vue2-filters'
 import axios from 'axios'
 import qs from 'qs';
 

 export default {
 	name:'sousuo2',
 	//filterOrorder 
 	//k in  filterBy(listk,this.$route.query.name)
 	//k in  orderBy(listk,key,zhengfan) |
 	data () {
 		return {
 			// filterOrorder:['k in  filterBy(listk,this.$route.query.name)','k in  orderBy(listk,key,zhengfan)'],
 			
 			nums:2,
 			zhengfan:['',-1],
 			listk:[],
 			inputs:true,
            zhanshiTitle:['人气','最新','销量','价格']
 		}
 	},
 	   
       created(){
       
        var self = this;                            
        axios.get('static/good2.json')
        .then((response)=>{   
            
           self.listk = response.data.data
          // _this.list0 = list0;
       //   console.log(list0)
          })
          .catch(function (err) {
      //      console.log(err);
          })
     
   },
    	methods:{
         go2 (index){
this.$router.push({path:'/xiangqing', query:{selected:this.nums}}); 
    console.log(this.$router)
   sessionStorage.ticketName2 =JSON.stringify(this.listk[index]) 
       
      }

    	  // ren:function(){
       //      this.key='month_sales';
       //      this.zhengfan=-1
    	  // },
       //    nw:function(){
       //      this.key='coupon_id';
       //      this.zhengfan=-1;
       //    },
       //    buys:function(){
       //      this.key='month_sales';
       //      this.zhengfan=-1
       //    },
       //    sale:function(){
       //    	this.key='raw_price';
       //      this.zhengfan='';
            
       //    },

       //    huanTitle:function(){
       //    	  this.$router.push('/sousuo');
       //    }
   	
    }, 
     mounted() {
     	 //this.filterOrorder:{ 'k in  filterBy(listk,this.$route.query.name)'}
     	 this.key='lib'
         // console.log(this.$route.query.id)
         // this.inputs = this.$route.query.id
    //     console.log(this.$route.query.name)
         this.listfen = this.$route.query.name
         this.inputs = this.$route.query.id2
         console.log(this.inputs)
         console.log(this.$route.query.id2)
     }
 }
</script>
<style>
   *{
   	margin:0;
   	padding: 0;
   }
   .nav2{
   	width: 100%;
   	height: 49px;
   	background-color: rgb(254,74,101);
   	font-family: "微软雅黑";
   	font-size: 18px;
   	display: flex;
   	justify-content: space-around;
   	align-items: center;
   	color: white
   }
   .zhanshi{
   	width: 100%;
   	height: 49px;
   	display: flex;
   	justify-content: space-around;
   	align-items: center;
   	border-bottom: 1px pink solid
   }
  .listshow{
    width: 44%;
    height: 230px;
    float: left;
    margin-left: 15px;
    /*margin-right: 10px;*/
    margin-bottom: 15px;
    list-style: none
  }

  .pic{
    width: 100%;
  }
  .listT{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
    font-size: 12px;
    text-align: center;
    line-height:14px;
    /*margin-bottom: 15px;*/
  }
  .listP{
    font-size:12px;
  }
  .listS{
    margin-left: 10px;
  }
</style>