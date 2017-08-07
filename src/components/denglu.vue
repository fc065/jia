<template>
   <div>
       <div class="navD">
             <span>登录</span>
       </div>
      <div class="homeD">

       <span>账号：</span> <input type="text" placeholder="请输入您的账号" class="zhang" v-model='dzhang'><br>
       <span>密码：</span> <input type="password" placeholder="请输入您的密码" class="mi" v-model = 'dpass'>
        <br><input type="button" value="登录" class="deng" @click="denglu()">
        <br><router-link to='/zhuce'><input type="button" value="注册" class="zhu"></router-link>


      </div>
     
   </div>
</template>
<script>
  import axios from 'axios'
  import qs from 'qs';

   
   export default {
   	  name:'denglu',
      data () {
      	 return{
           dzhang:this.value,
           dpass:this.value,
           registerUrl:"http://localhost:6500/zheyoubao",

      	 }
      },
      methods:{
          denglu:function(){
          	axios.get("http://localhost:6500/zheyoubao").then((response)=>{
          		 console.log(response.data)
          		for (var i = 0; i < response.data.length; i++) {

          			if (this.dzhang == response.data[i].name && this.dpass == response.data[i].password && this.dpass!=" "&&this.dzhang.value!=" ") {
							alert("登录成功")
              console.log(response.data)
							this.$router.push("/home")
							break;
						} else					
						{
							alert("登录失败！请重新登录");
							break;
						}
          			
          		}
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
  /* .deng{
   	 background-color:rgb(274,74,101);
   }*/
   
</style>