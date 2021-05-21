<template>
    <div class = "wrapper">
          
          <h1 class="title"  @click ="$router.push({name : 'home'})">HealthHub</h1>
          <v-divider></v-divider>
          <router-view>
            <!-- 라우터가 주소를 받아 주소에 맞는 컴포넌트를 찾아 결과물을 뿌려주기 위한 장소를 선언 -->
          </router-view>
          <NaviBar></NaviBar>
    </div>
</template>
<script>
import NaviBar from '@/components/NaviBar'
  export default{
    components:{
      NaviBar
    },
    data(){
        return{
          loginCheck : false
        }
    },
    methods:{
    }
  }
</script>
<style>
    @import url(./App.css);
</style>
