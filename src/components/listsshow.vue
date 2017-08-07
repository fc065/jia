<template>
   <div>
       <div style="margin-left: 10px;"><img src="static/dujia.jpg" alt="" style="height: 20px;"></div>
          
        <div>
           <ul >
          
              <li v-for="(d,index) in data" class="listshow" @click="goX(index)"> 
               <img :src="d.pic" alt="" class="pic" >
               <p class="listT">{{d.title}}</p>
               <p class="listP">券后￥{{d.coupon_price}}<span class="listS">{{d.buy}}人已买</span></p>
               

              </li>
          
           </ul>
           
        </div>
    
   </div>


</template>
<script>
  import Vue2Filters from 'vue2-filters'
  import axios from 'axios'
  import qs from 'qs';
 
 
  export default {
  	 name:"listsshow",
  	 data () {
  	 	return {
         data:true,  
         nums:1,

  	 	}
   
     },
       created(){
      
        var self = this;                            
        axios.get('static/good1.json')
        .then((response)=>{   
            
           self.data = response.data.data
          // _this.list0 = list0;
       //   console.log(list0)
          })
          .catch(function (err) {
      //      console.log(err);
          })
        
         
   },

     methods:{

       goX (index){
       // this.$router.push('/xiangqing');
  this.$router.push({path:'/xiangqing',query:{selected:this.nums}});
   console.log(this.$router)
   sessionStorage.ticketName1 =JSON.stringify(this.data[index]) 
       
      }
    }   

      //query:{id:this.data[index]
   
   }

     
    
  
  
</script>
<style>

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
    font-size:14px;
  }
  .listS{
    margin-left: 10px;
  }
</style>