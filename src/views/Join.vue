<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="2"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="5"
            label="Last name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="id"
            :rules="idRules"
            label="ID"
            :counter="20"
            required
          ></v-text-field>
        </v-col>
        <v-col>
          <v-btn
            elevation="2"
            small
            v-on:click = "checkID">
            아이디 중복 확인
          </v-btn>
        
        </v-col> 
      </v-row>
      <v-row>
          <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            type="password"
            v-model="pw"
            :rules="pwRules"
            label="Password"
            :counter="20"
            required
          ></v-text-field>
        </v-col>
        
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            type = "password"
            v-model="pwCheck"
            :rules="pwCheckRules"
            label="Password Check"
            :counter="20"
            required
          ></v-text-field>
          </v-col>
      </v-row>
      <v-row>
        <v-btn
            elevation="2"
            small
            v-on:click = "checkForm">
            가입
        </v-btn>
      </v-row>
      
    </v-container>
  </v-form>
</template>
<script>
  import VueRouter from '@/router/index.js'
  export default {

    data: () => ({
      checkId:false,checkPw:false,
      valid: false,
      errors:[],
      firstname: '',
      lastname: '',
      id : '',
      pw : '',
      idRules:[
        v => !!v || 'ID is required',
      ],
      pwRules:[
        v => !!v || 'Password is required',
        v => v.length <= 20 || 'Password must be less than 20 characters',
      ],
      pwCheck: '',
      pwCheckRules:[
        v => !!v || 'Rewrite the password',
      ],
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),
    methods: {

      checkValid: function(){
        return true;
        //db에서 아이디 중복 확인
      },
      checkPW: function(){
        if(this.pw.length==0 || this.pwCheck.length==0){
          alert('입력x')
        }
        if(this.pw != this.pwCheck){
          this.errors.push('Please check the pasword')
          alert('패스워드를 확인하세요')
        }
        else{
          return true;
        }
      },
      checkID:function(){
        let check = false;//db에서 아이디 중복 확인 결과 리턴
        if(check){
          //db에서 유효성 검사
          //아이디 중복 확인
          check = checkValid();
          this.checkId = true;
          alert('사용 가능한 아이디 입니다.');
          
        }else{
          this.checkId = true;
          alert('사용중인 아이디 입니다. 다른 아이디를 입력해주세요');
          
        }
      },
      saveDB: function(){
        //db에 저장
        return true;
      },
      checkForm: function(){
        // if(this.checkId && checkPW()){
        //   //아이디 비번 db에 저장 후
        //   // if(saveDB()){
        //   //   alert('환영합니다! 로그인을 해주세요.');
        //   // //로그인 페이지로 이동
        //   //   VueRouter.push({path:'/'})
        //   // }else{
        //   //   alert('db 저장 실패!');
        //   // }
        //   alert('환영합니다! 로그인을 해주세요.');
        //   //로그인 페이지로 이동
        //   VueRouter.push({path:'/'})
        // }
           alert('환영합니다! 로그인을 해주세요.');
          //로그인 페이지로 이동
          VueRouter.push({path:'/'});
      }
    }
  }
</script>