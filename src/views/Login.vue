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
          <v-text-field v-model="input.id" label="아이디"></v-text-field>
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
import { userInfo } from '@/userInfo.js';
import VueRouter from '@/router/index.js';
export default {
  name: 'Login',
  data() {
    return {
      input: {
        id: '',
        password: '',
      },
    };
  },
  methods: {
    updateID(event) {
      this.input.id = event.target.value;
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
        id: this.input.id,
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
            user.id = this.input.id;
            fetch(`http://115.85.183.157:3000/register/userInfo/getUID/${req.id}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            })
              .then(res => res.json())
              .then(res => {
                // console.log(`uID : ${res.uID}`);
                user.uID = res.uID;
                console.log(user.uID);
                localStorage.setItem('uID', user.uID);
                fetch(`http://115.85.183.157:3000/userInfo/getUserInfo/${user.uID}`, {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                })
                  .then(res => res.json())
                  .then(res => {
                    user.userInfo = res;
                    VueRouter.push({ name: 'home' });
                  })
                  .catch(err => {
                    console.error('로그인 중 에러 발생');
                  });
              })
              .catch(err => {
                alert('로그인 중 uID 불러오기 실패 ');
              });

            // localStorage.setItem('userInfo', user.userInfo);
          } else {
            console.log(res.msg);
          }
        })
        .catch(err => {
          alert('로그인 중 에러 발생');
        });
    },
  },
};
</script>

<style>
@import url('./Login.css');
</style>
