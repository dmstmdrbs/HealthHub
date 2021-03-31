<template>
    <div class = " wrapper">
        <body class="body-container"> 
          <!-- 라우터가 주소를 받아 주소에 맞는 컴포넌트를 찾아 결과물을 뿌려주기 위한 장소를 선언 -->
          <!-- router-view -->
          <router-view></router-view>
        </body>
        
        <footer>
            <NaviBar></NaviBar>
        </footer>
    </div>
</template>
<script>
  export default{
    components:{
  },
  data(){
      return{
       
      }
    }
  }

  
</script>
<style>
    @import url(./App.css);
</style>
