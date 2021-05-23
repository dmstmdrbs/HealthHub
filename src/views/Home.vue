<template>
    <div max-width="500">
        <Header></Header>
        <v-app>
            <v-main>
                <Calendar></Calendar>   
                <AddExercise></AddExercise>
            </v-main>
        </v-app>
    <NaviBar></NaviBar>
    </div>
</template>
<script>
import Header from '@/components/Header.vue'
import AddExercise from './AddExercise.vue'
import Calendar from '@/components/Calendar'
import NaviBar from '@/components/NaviBar.vue'
    export default{
        components:{
            AddExercise,
            Calendar,
            Header,
            NaviBar
        },
        data(){
            return{
                
            }
        },
        methods:{
        }
    }
</script>
