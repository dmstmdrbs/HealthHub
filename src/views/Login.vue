<template>
  <div>
    <v-row justify="center">
      <v-col align="center">
        <h1>T.I.M.P.</h1>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-container class="login">
      <v-card>
        <h2 id="login-title">LOGIN</h2>
        <div class="login-form2">
          <v-text-field v-model="input.uid" label="아이디"></v-text-field>
          <v-text-field v-model="input.password" label="패스워드" type="password"></v-text-field>
          <v-btn class="login-button" depressed block large v-on:click="onSubmit">
            LOGIN
          </v-btn>
          <v-btn text v-on:click="$router.push({ name: 'join' })" class="btn_join">
            회원가입
          </v-btn>
          <v-btn text class="px-3">아이디 찾기</v-btn>
          <v-btn text class="forgot-password" v-on:click="$router.push({ name: 'find_pw' })">
            비밀번호 찾기
          </v-btn>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { user } from '@/user.js';
import VueRouter from '@/router/index.js';
export default {
  name: 'Login',
  data() {
    return {
      input: {
        uid: '',
        password: '',
      },
    };
  },
  methods: {
    updateID(event) {
      this.input.uid = event.target.value;
    },
    updatePW(event) {
      this.input.password = event.target.value;
    },
    checkValid() {
      //db에서 유효성 검사
    },

    onSubmit() {
      //id:test  pw:1234
      const req = {
        id: this.input.uid,
        psword: this.input.password,
      };

      fetch('http://115.85.183.157:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req),
      })
        .then(res => res.json())
        .then(res => {
          if (res.success) {
            user.uid = VueRouter.push({ path: '/home' });
          } else {
            alert(res.msg);
            console.log(res.msg);
          }
        })
        .catch(err => {
          console.error('로그인 중 에러 발생');
        });
    },
  },
};
</script>

<style>
@import url('./Login.css');
</style>
