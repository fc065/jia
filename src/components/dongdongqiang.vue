<template>
  <div class="dongdongqiang" style="margin-top: 10px;">
       <div class="dongTitle">
          <div><img src="static/dongdong.jpg" alt="" style="height: 20px;"></div><span style="margin-right: 40px;margin-left: 60px;">13:00正在抢购</span><span>查看更多></span>
       </div>
       <div class="donglist">
           <div v-for="c in listDong" class="donglistN">
               <img :src="c.img" alt="">
               <p>{{c.title}}</p>
               <p>￥{{c.yuan}}券后</p>
           </div>
       </div>
  </div>
</template>
<script>
    export default {
       name:'dongdongqiang',
       data () {
       	 return {
       	 	listDong:[
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
       	 	]
       	 }
       }
    }
</script>
<style>
    .dongTitle{
    	margin-left: 10px;
    	width: 100%;
    	height: 35px;
    	display: flex;
    	align-items: center;
    }
    .dongTitle img{
    	height: 20px;
    }
    .dongTitle span{
    	font-size: 14px;
    	width: 100px;
    	font-family: "微软雅黑"
    }
    .donglist{
    	display: flex;
    	justify-content: space-around;

    }
    .donglistN{
    	width: 30%;
    	height: 150px;
    }
    .donglistN img{
    	width: 100%;
    }
    .donglistN p{
    	font-size:12px; 
    	line-height:12px;
    	margin-bottom: 5px;
    }
</style>