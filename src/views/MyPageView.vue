<template>
  <div>
    <Header></Header>
    <v-divider></v-divider>
    <template>
      <v-container>
        <v-row>
          <v-col>
            <v-card max-width="500">
              <div class="d-flex flex-no-wrap justify-space-between">
                <div style="text-align:center;">
                  <v-card-title class="text-h5">사용자정보</v-card-title>
                </div>
                <v-divider></v-divider>
                <v-col>
                  <v-card-title>이름</v-card-title>
                  <v-divider class="mx-2"></v-divider>
                  <v-card-text>{{ userInfo.name }}</v-card-text>
                </v-col>
                <v-col>
                  <v-card-title>나이</v-card-title>
                  <v-divider class="mx-2"></v-divider>
                  <v-card-text>{{ userInfo.age }}</v-card-text>
                </v-col>
                <v-col>
                  <v-card-title>성별</v-card-title>
                  <v-divider class="mx-2"></v-divider>
                  <v-card-text>{{ userInfo.sex }}</v-card-text>
                </v-col>
              </div>
            </v-card>
          </v-col>
          <v-col>
            <v-card max-width="500">
              <div class="d-flex flex-no-wrap justify-space-between">
                <div style="text-align:center;">
                  <v-card-title class="text-h5">신체정보</v-card-title>
                </div>
                <v-divider></v-divider>
                <v-col>
                  <v-card-title>키</v-card-title>
                  <v-divider class="mx-2"></v-divider>
                  <v-card-text>{{ userInfo.height }}</v-card-text>
                </v-col>
                <v-col>
                  <v-card-title>몸무게</v-card-title>
                  <v-divider class="mx-2"></v-divider>
                  <v-card-text>{{ userInfo.weight }}</v-card-text>
                </v-col>
              </div>
              <div style="text-align:center;">
                <v-card-title class="text-h5">약점부위</v-card-title>
              </div>
              <v-divider></v-divider>
              <v-col>
                <v-card-text>{{ userInfo.weak }}</v-card-text>
              </v-col>
            </v-card>
          </v-col>
          <v-col>
            <v-card max-width="500">
              <div class="d-flex flex-no-wrap justify-space-between">
                <div style="text-align:center;">
                  <v-card-title class="text-h5">1RM</v-card-title>
                </div>
                <v-divider></v-divider>
                <v-col>
                  <v-card-title>스쿼트</v-card-title>
                  <v-divider class="mx-2"></v-divider>
                  <v-card-text>{{ userInfo.squat }}</v-card-text>
                </v-col>
                <v-col>
                  <v-card-title>벤치프레스</v-card-title>
                  <v-divider class="mx-2"></v-divider>
                  <v-card-text>{{ userInfo.bench }}</v-card-text>
                </v-col>
                <v-col>
                  <v-card-title>데드리프트</v-card-title>
                  <v-divider class="mx-2"></v-divider>
                  <v-card-text>{{ userInfo.dead }}</v-card-text>
                </v-col>
                <div style="text-align:center;">
                  <v-card-title class="text-h5">숙련도</v-card-title>
                </div>
                <v-divider></v-divider>
                <v-col>
                  <v-card-text>{{ userInfo.proficiency }}</v-card-text>
                </v-col>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-app>
              <v-main>
                <v-btn height="30px" elevation="2" small block @click="showSetDialog">수정</v-btn>
                <v-dialog max-width="500" v-model="setDialog">
                  <Dialog header-title="정보 수정" @hide="hideSetDialog" @submit="submitSetDialog">
                    <template v-slot:body>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="6">
                            <h2>유저 정보</h2>
                            <v-text-field
                              disabled
                              v-model="userInfo.name"
                              label="이름"
                            ></v-text-field>
                            <v-text-field
                              disabled
                              v-model="userInfo.sex"
                              label="성별"
                            ></v-text-field>
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
                            <v-text-field v-model="userInfo.squat" label="스쿼트"></v-text-field>
                            <v-text-field
                              v-model="userInfo.bench"
                              label="벤치프레스"
                            ></v-text-field>
                            <v-text-field v-model="userInfo.dead" label="데드리프트"></v-text-field>
                            <h2>숙련도</h2>
                            <v-radio-group mandatory v-model="userInfo.proficiency">
                              <v-radio label="초급자" value="1"></v-radio>
                              <v-radio label="중급자" value="2"></v-radio>
                              <v-radio label="고급자" value="3"></v-radio>
                            </v-radio-group>
                          </v-col>
                        </v-row>
                      </v-container>
                    </template>
                  </Dialog>
                </v-dialog>
              </v-main>
            </v-app>
          </v-col>
        </v-row>
      </v-container>
    </template>
    <NaviBar v-on:getUserInfo="getUserInfo"></NaviBar>
  </div>
</template>
<script>
import Header from '@/components/Header';
import NaviBar from '@/components/NaviBar.vue';
import Dialog from '@/components/Dialog.vue';
import axios from 'axios';
import { user } from '@/user.js';
import { userInfo } from '@/userInfo.js';
user;
export default {
  created() {
    fetch(`http://115.85.183.157:3000/userInfo/${user.uID}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => {
        user.userInfo = res.userInfo;
      })
      .catch(err => {
        console.error('error');
      });
  },
  mounted() {
    this.userInfo = user.userInfo;
    // this.getUserInfo();
    console.log(user.uID);
    console.log(user.userInfo);
  },
  // watch:{
  //   userInfo(){function(){

  //   }}
  // }
  components: {
    Header,
    NaviBar,
    Dialog,
    axios,
  },
  data() {
    return {
      userInfo: '',
      setDialog: false,
    };
  },
  methods: {
    hideSetDialog() {
      this.setDialog = false;
    },
    submitSetDialog() {
      console.log('submit');
      this.saveUserInfo();
      this.hideSetDialog();
    },
    showSetDialog() {
      console.log('do');
      this.setDialog = true;
    },
    saveUserInfo() {
      //db에 저장
      this.user = this.userInfo;
      console.log(this.user);
      userInfo.proficiency = this.userInfo.proficiency;
      const req = {
        uID: user.uID,
        uName: this.userInfo.name,
        age: parseInt(this.userInfo.age),
        sex: this.userInfo.sex,
        height: parseInt(this.userInfo.height),
        weight: parseInt(this.userInfo.weight),
        squat: parseInt(this.userInfo.squat),
        bench: parseInt(this.userInfo.bench),
        dead: parseInt(this.userInfo.dead),
        weak: this.userInfo.weak,
        proficiency: proficiency,
      };
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
          }
        })
        .catch(err => {
          console.error('정보 저장 중 에러 발생');
        });
      this.hideSetDialog();
    },
    getUserInfo() {
      fetch(`http://115.85.183.157:3000/userInfo/${this.userInfo.name}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(res => {
          this.userInfo.age = res.age;
          this.userInfo.height = res.height;
          this.userInfo.weight = res.weight;
          this.userInfo.squat = res.squat;
          this.userInfo.bench = res.bench;
          this.userInfo.dead = res.dead;
          this.userInfo.weak = res.weak;
          if (res.proficiency === 1) {
            this.userInfo.proficiency = '초급자';
          } else if (res.proficiency === 2) {
            this.userInfo.proficiency = '중급자';
          } else {
            this.userInfo.proficiency = '고급자';
          }
        })
        .catch(err => {
          console.error('error');
        });
    },
  },
};
</script>
