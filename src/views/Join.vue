<template>
  <v-form v-model="valid">
    <v-row justify="center">
      <v-col style="margin:10px">
        <h1>회원가입</h1>
      </v-col>
    </v-row>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="name"
            :rules="nameRules"
            :counter="5"
            label="Name"
            required
            @input="searchChangeFunc($event)"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="id"
            :rules="idRules"
            label="ID"
            :counter="20"
            required
          ></v-text-field>
        </v-col>
        <v-col>
          <v-btn elevation="2" small v-on:click="checkID">
            아이디 중복 확인
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            type="password"
            v-model="pw"
            :rules="pwRules"
            label="Password"
            :counter="20"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-container fluid class="px-0">
            <v-radio-group mandatory v-model="sexGroup">
              <v-radio label="남자" value="1"></v-radio>
              <v-radio label="여자" value="2"></v-radio>
            </v-radio-group>
          </v-container>
        </v-col>
      </v-row>
      <v-row>
        <v-btn elevation="2" small v-on:click="checkForm">
          가입
        </v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
import VueRouter from '@/router/index.js';

export default {
  data: () => ({
    checkId: false,
    checkPw: false,
    valid: false,
    id: '',
    pw: '',
    name: '',
    sexGroup: 1,
    age: '',
    idRules: [v => !!v || 'ID is required'],
    pwRules: [
      v => !!v || 'Password is required',
      v => v.length <= 20 || 'Password must be less than 20 characters',
    ],
    pwCheckRules: [v => !!v || 'Rewrite the password'],
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [v => !!v || 'E-mail is required', v => /.+@.+/.test(v) || 'E-mail must be valid'],
  }),
  methods: {
    searchChangeFunc(event) {
      console.log('id changed!');
      this.checkId = false;
      console.log(this.cehckId);
    },
    checkID: function() {
      const req = {
        id: this.id,
      };
      //db에서 아이디 중복 확인
      fetch('http://115.85.183.157:3000/checkID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req),
      })
        .then(res => res.json())
        .then(res => {
          if (res.success) {
            alert('중복된 아이디 입니다. 다시 입력해주세요.');
          }
        })
        .catch(err => {
          alert('사용 가능한 아이디 입니다.');
          this.checkId = true;
        });
    },
    checkForm: function() {
      if (this.checkId === false) {
        alert('아이디 중복 체크를 해주세요.');
      } else {
        const req = {
          id: this.id,
          psword: this.pw,
        };
        console.log(req);
        console.log(this.sexGroup);
        localStorage.setItem('id', this.id);
        localStorage.setItem('uName', this.name);
        localStorage.setItem('sex', this.sexGroup);
        localStorage.setItem('email', this.email);
        //db에서 아이디 중복 확인
        fetch('http://115.85.183.157:3000/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(req),
        })
          .then(res => res.json())
          .then(res => {
            if (res.success) {
              alert('성공');

              VueRouter.push({ path: '/join/userinfo' });
            } else {
              alert('중복된 아이디 입니다.');
            }
          })
          .catch(err => {
            console.error('회원가입 중 에러 발생');
          });
      }
    },
  },
};
</script>
