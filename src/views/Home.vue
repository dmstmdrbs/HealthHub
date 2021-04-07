<template>
    <!-- <h1>Home page</h1> -->
    <div max-width="500">
        <Calendar></Calendar>   
        <AddExercise></AddExercise>
        <h2></h2>
        
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
