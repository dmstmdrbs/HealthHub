<template>
    <div>
        {{list}}
    </div>
</template>
<script>
import {recommend} from '@/recommend.js'
export default {
    data(){
        return{
            list:this.get()
        }
    },
    methods:{
        get(){
            return recommend(1);
            
        }
    }
}
</script>
