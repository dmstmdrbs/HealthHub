<template>
    <div>
        <h2>My Page</h2>
        <div>
            <p>{{this.User.username}}님의 마이페이지 입니다.</p>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return{
                User:{
                    username:'헬창',
                }
            }
        }    
    }
</script>