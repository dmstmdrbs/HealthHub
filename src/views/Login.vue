<template>
	<v-container class="login">
		<v-card> 
			<h2 id="login-title">LOGIN</h2>
			<div class="login-form2">
					<!-- <h2 align="center">로그인</h2> -->
                    <v-text-field v-model="input.uid" label="아이디">
                    </v-text-field>
                    <v-text-field v-model="input.password" label="패스워드" type="password">
                    </v-text-field>
                    <v-btn class="login-button" depressed block large v-on:click = "onSubmit">
                        LOGIN
                    </v-btn>
					 <v-btn 
					 	text
						v-on:click="$router.push({name:'join'})"
						class="btn_join" 
					>
						회원가입
					</v-btn>
                	<v-btn text class="px-3">아이디 찾기</v-btn>
                	<v-btn 
						text 
						class="forgot-password"
						v-on:click="$router.push({name:'find_pw'})"
						>
						비밀번호 찾기
					</v-btn>
                </div>
		</v-card>
	</v-container>
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
                VueRouter.push({path: '/home'});
               
            }


        }
    }
</script>

<style>
    @import url("./Login.css");
</style>
