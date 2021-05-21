<template>
	<v-container class="login">
		<v-card> 
			<h2>Login</h2>
			<v-form class="login-form">
				<div>
					<v-icon>fas fa-user</v-icon>
					<input type ="text" placeholder = "Enter your ID" v-model="input.uid">
				</div>
				<v-spacer></v-spacer>
				<div>
					<v-icon>fas fa-lock</v-icon>
					<input type = "password" placeholder="Enter your PW" v-model="input.password">
				</div>
				<v-btn
					class="login-button"
					v-on:click = "onSubmit"
					block
					color="primary"
					elevation="2"
					rounded
					outlined
					text>LOGIN
				</v-btn>
			<v-spacer></v-spacer>
			<div class="func_button">
					<v-btn class="forgot-password"
						v-on:click="$router.push({name:'find_pw'})"
						rounded
						outlined
						small
						text>비밀번호 찾기
					</v-btn>
					<v-btn class="btn_join" 
						v-on:click="$router.push({name:'join'})"
						rounded
						outlined
						small
						text> 회원 가입
					</v-btn>
				</div>
			</v-form>
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
