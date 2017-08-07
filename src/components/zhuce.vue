<template>
   <div>
       <div class="navD">
             <span>注册</span>
       </div>
      <div class="homeD">

       <span>账号：</span> <input type="text" placeholder="请输入您想申请的账号" class="zhang" v-model="zhang"><br>
       <span>密码：</span> <input type="password" placeholder="请输入您想申请的密码" class="mi" v-model="pass"> 
        <br><router-link to='/denglu'><input type="button" value="登录" class="deng"></router-link>
        <br><input type="button" value="注册" class="zhu" @click="zhuce()">


      </div>
     
   </div>
</template>
<script>
  import axios from 'axios'
  import qs from 'qs';
 

   export default {
   	  name:'zhuce',
      data () {
      	 return{
             zhang:this.value,
             pass:this.value,
          registerUrl:"http://localhost:6500/zheyoubao",
          newUser:{
             name:this.zhang,
             password:this.pass
          }
         
          

      	 }
      },
      methods:{
        zhuce:function (){
          console.log(this.zhang);
          console.log(this.pass);
          axios({
            url:"http://localhost:6500/zheyoubao",
            method:"post",
            data:{
                 name:this.zhang,
                 password:this.pass
            },
            transformRequest: [function (data) {
    // Do whatever you want to transform the data
           let ret = ''
        for (let it in data) {
           ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
         }
               return ret
            }],
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }

          }).then(function(){
            alert("注册成功")
          })
            
           



        }
      }
   }

</script>
<style>
 *{
 	margin:0;
 	padding: 0;
 }
   .navD{
   	width: 100%;
   	height: 49px;
   	background-color: rgb(254,74,101);
   }
   .navD span{
   	font-size: 18px;
     font-family: "微软雅黑";
     color: white;
   	text-align: center;
   	width:50px;
    line-height: 49px;
   	margin-left: 45%;
    
   }
   .homeD{
   	margin-top: 10px;
   	width: 100%;
   	height: 400px;
   }
   .zhang,.mi{
   	margin-top: 10px;
   	margin-bottom: 10px;
   	width: 210px;
   	height: 35px;
   	border: 1px solid pink
   }
   .homeD span{
   	margin-left: 20px;
   	margin-right: 20px;
   	font-size: 20px;
   }
   .deng,.zhu{
   	width: 150px;
   	height: 30px;
   	margin-left: 100px;
   	margin-top: 20px;
   }
   /* .zhu{
      background-color:rgb(274,74,101);
    }*/
   
</style>