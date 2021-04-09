<template>
    <!-- <h1>Home page</h1> -->
    <div max-width="500">
        <v-app>
            <v-content>
                <Calendar></Calendar>   
                <AddExercise></AddExercise>
            </v-content>
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
        }
    }
</script>
