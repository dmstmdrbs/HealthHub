<template>
    <div>
        <Header></Header>
        <v-divider></v-divider>
        <h2>My Page</h2>
        <div>
            <p>{{this.User.username}}님의 마이페이지 입니다.</p>
        </div>
        <NaviBar></NaviBar>
    </div>
</template>
<script>
import Header from '@/components/Header'
import NaviBar from '@/components/NaviBar.vue'

    export default {
        components: { 
            Header, 
            NaviBar 
        },
        data () {
            return{
                User:{
                    username:'헬창',
                }
            }
        }    
    }
</script>