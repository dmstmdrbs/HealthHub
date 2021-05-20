<template>
    <!-- <h1>Home page</h1> -->
    <div max-width="500">
        <v-app>
            <v-main>
                <Calendar></Calendar>   
                <AddExercise></AddExercise>
            </v-main>
        </v-app>
        
    </div>
</template>
<script>
import AddExercise from './AddExercise.vue'
import Calendar from '@/components/Calendar'
    export default{
        components:{
            AddExercise,
            Calendar
        },
        data(){
            return{
                
            }
        },
        methods:{
        }
    }
</script>
