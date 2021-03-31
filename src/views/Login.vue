<template>
    <div id="login-container">
        <h2 id = "login-title">LOG IN</h2>
        <form id = "login-form" @submit="onSubmit"> 
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
                type="submit" 
                v-on:click="onSubmit()"
                block
                color="primary"
                elevation="2"
                rounded
                outlined
                text>Login</v-btn>
            <div>
                <a>비밀번호 찾기</a>
                <a>회원 가입</a>
            </div>
            <div>
                <p>소셜 로그인 기능 자리</p>
            </div>
            <br>
            <!-- 이 아래 버튼을 누르면 Home(CalenderComponent가 있는곳) 으로 이동하려고 함 -->
            <div class="text-center">
              <v-btn
                id="go-home"
                @click="$router.push({name:'home'})"
                rounded
                color="primary"
                dark>
              로그인 성공 이동
              </v-btn>
            </div>
        </form>
    </div>
</template>

<script>

    export default{
        name : 'Login',
        data(){
            return{
                input:{
                    uid:"",
                    password:""
                }
            }
        },
        methods:{
            // onSubmit(){
            //     if(this.input.username != "" && this.input.password != "") {
            //         if(this.input.username == "dmstmdrbs" && this.input.password == "1234") {
            //             this.$emit("authenticated", true);
            //             this.$router.replace({ name: "secure" });
            //         } else {
            //             console.log("The username and / or password is incorrect");
            //         }
            //     } else {
            //         console.log("A username and password must be present");
            //     }
            // }
        }
    }
</script>

<style>
    @import url("./Login.css");
</style>
