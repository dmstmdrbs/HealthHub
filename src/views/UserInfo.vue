<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <h2>유저 정보</h2>
        <v-text-field disabled v-model="userInfo.name" label="이름"></v-text-field>
        <v-text-field disabled v-model="userInfo.sex" label="성별"></v-text-field>
        <v-text-field v-model="userInfo.age" label="나이"></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <h2>신체정보</h2>
        <v-text-field v-model="userInfo.height" label="키"></v-text-field>
        <v-text-field v-model="userInfo.weight" label="몸무게"></v-text-field>
        <h2>약점 부위</h2>
        <v-radio-group v-model="userInfo.weak">
          <v-radio label="하체" value="하체"></v-radio>
          <v-radio label="등" value="등"></v-radio>
          <v-radio label="가슴" value="가슴"></v-radio>
          <v-radio label="팔" value="팔"></v-radio>
          <v-radio label="어깨" value="어꺠"></v-radio>
        </v-radio-group>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col cols="12" sm="6">
        <h2>1RM</h2>
        <v-text-field v-model="userInfo.sqrt" label="스쿼트"></v-text-field>
        <v-text-field v-model="userInfo.bench" label="벤치프레스"></v-text-field>
        <v-text-field v-model="userInfo.dead" label="데드리프트"></v-text-field>
        <h2>숙련도</h2>
        <v-radio-group mandatory v-model="userInfo.proficiency">
          <v-radio label="초급자" value="초급자"></v-radio>
          <v-radio label="중급자" value="중급자"></v-radio>
          <v-radio label="고급자" value="고급자"></v-radio>
        </v-radio-group>
      </v-col>
    </v-row>
    <v-btn @click="test">완료</v-btn>
  </v-container>
</template>
<script>
export default {
  created() {
    var id = localStorage.getItem('id');
    this.userInfo.name = localStorage.getItem('uName');
    if (localStorage.getItem('sex') == 1) {
      this.userInfo.sex = '남자';
    } else if (localStorage.getItem('sex') == 2) {
      this.userInfo.sex = '여자';
    }
    fetch('http://115.85.183.157:3000/userID/{id}', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          //   this.userInfo.uid = res.data;
        }
      })
      .catch(err => {
        console.error('회원가입 중 에러 발생');
      });

    console.log(this.userInfo);
  },
  data() {
    return {
      userInfo: {
        uid: 0,
        name: '',
        age: '',
        email: '',
        sex: '',
        height: '',
        weight: '',
        sqrt: '',
        bench: '',
        dead: '',
        weak: '',
        proficiency: '',
      },
    };
  },
  methods: {
    test() {
      console.log(this.userInfo);
    },
    saveUser() {
      if (this.userInfo.proficiency === '초급자') {
        this.userInfo.proficiency = 1;
      } else if (this.userInfo.proficiency === '중급자') {
        this.userInfo.proficiency = 2;
      } else if (this.userInfo.proficiency === '고급자') {
        this.userInfo.proficiency = 3;
      }
      const req = this.userInfo;
      fetch('http://115.85.183.157:3000/register/userInfo', {
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
            localStorage.clear();
            VueRouter.push({ path: '/' });
          }
        })
        .catch(err => {
          console.error('회원가입 중 에러 발생');
        });
    },
  },
};
</script>
