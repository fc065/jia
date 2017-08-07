<template>
   <div>
       <div class="list1">
             <div v-for="a in list1">
             <a href="#">
                  <img :src="a.img" alt="">
                  <p>{{a.title}}</p>
             </a>
             </div>
       </div>
   </div>
</template>
<script>
  
  export default {
     name: 'leader',
     data () {
     	return {
     		list1:[
                {
                   img:"static/li1.jpg",
                   title:"咚咚抢"   
               },
                {
                   img:"static/li2.jpg",
                   title:"9.9包邮"   
               },
                {
                   img:"static/li3.jpg",
                   title:"超级人气榜"   
               },
                {
                   img:"static/li4.jpg",
                   title:"小编力荐"   
               }

     		]
     	}
     }

  }

</script>
<style>
   .list1{
   	width: 100%;
   	height: 95px;
   	display: flex;
   	justify-content: space-around;
   	align-items: center;
   }
  .list1 div {
  	width:23%;
  	height: 80px;
  }
  .list1 div img{
  	width:100%;
  	height: 60px;
  	text-align: center;
  }
  .list1 div p{
   text-align: center;
  	font-size:14px; 
  }
  a {
  	text-decoration: none;
  }
</style>