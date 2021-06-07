<template>
    <div>
        {{list}}
    </div>
</template>
<script>
import {recommend} from '@/recommend.js'
export default {
    created(){
        this.get();
    },
    data(){
        return{
            list:[]
        }
    },
    methods:{
        get(){
            this.list = recommend(1);
            
            
        }
    }
}
</script>
