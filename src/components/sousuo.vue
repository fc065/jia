
<template>
<div>
   
    <div class="masks"> 
        <div class="navFenle">分类</div>
        <ul class="fenleiUl">

<li v-for="j in listFenlei" class="fenleiLi"><router-link :to="{path:'/fenlei',query: {name: j}}">{{j}}</router-link></li>
           
            
        </ul>
     
    </div>
 </div>
</template>
<script>

   
    export default{
    	name:'sousuo',
    	data () {
            return{
               listFenlei:['男装','女装','内衣','母婴','化妆品','居家','鞋包配饰','美食']
                  
               
            }
    	},
    	
    	methods:{
          
   	
    }
}
</script>
<style>
.fenleiUl{
	position: absolute;
	left: 0;
	top: 0;
    background-color: white;
 	width: 100%;
 	height: 180px;
 }
 a{
 	text-decoration: none;
 }
   .fenleiLi{
   	list-style: none;
   	float: left;
   	width: 24%;
   	border: 1px solid #ccc;
   	box-sizing: border-box;
   	line-height: 50px;
   	text-align: center;

   }
   .masks{
   	position: fixed;
 	left: -10px;
 	top: 49px;
 	z-index:1;
   	width: 110%;
   	height: 100%;
   	
   	background-color: rgba(0,0,0,0.5)
   }
   .navFenle{z-index: 2;
   	width: 100%;
   	height: 49px;
    position: absolute;
    left: 175px;
    top: -45px;
   	line-height: 49px;
   }

</style>