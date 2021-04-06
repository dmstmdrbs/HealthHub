<template>
    <div id="login-container">
        <h1> LOGIN </h1>
        <form id = "login-form" > 
            <div>
                <label>ID</label>
                <input type ="text" placeholder = "Enter your ID" v-model="input.uid" maxlength="20">
            </div>
            <div>
                <label>PW</label>
                <input type = "password" placeholder="Enter your PW" v-model="input.password" maxlength="20">
            </div>
            <v-btn
                id="btn_login"
                v-on:click = "onSubmit"
                block
                color="primary"
                elevation="2"
                rounded
                outlined
                text>LOGIN</v-btn>
            <div>
                <v-btn id="btn_findPW" 
                    v-on:click="$router.push({name:'find_pw'})"
                    rounded
                    outlined
                    small
                    text>비밀번호 찾기 </v-btn>
                <span>||</span>
                <v-btn id="btn_join" 
                v-on:click="$router.push({name:'join'})"
                rounded
                outlined
                small
                text> 회원 가입</v-btn>
            </div>
            <div>
                <p>소셜 로그인 기능 자리</p>
            </div>
            
        </form>
    </div>
</template>

<script>
    import VueRouter from '@/router/index.js'
    export default{
        name : 'Login',
        data(){
            return{
                input:{
                    uid:'',
                    password:''
                }
            }  
        },
        methods:{
            updateID(event){
                this.input.uid = event.target.value;
            },
            updatePW(event){
                this.input.password = event.target.value;
            },
            checkValid(){
                //db에서 유효성 검사
                
            },
            
            onSubmit(){
                alert(`id : ${this.input.uid}, pw : ${this.input.password}`);
                VueRouter.push({path: '/home'});
               
            }


        }
    }
</script>

<style>
    @import url("./Login.css");
</style>
