<template>
  <v-card>
    <v-footer v-bind="localAttrs" color="#ECEFF1" padless>
      <link href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" rel="stylesheet" />
      <v-card-text class="navBar" horizontal>
        <v-btn class="btn record" text outlined @click="$router.push({ name: 'home' })">
          <v-icon>far fa-calendar-alt</v-icon>
          <span>기록</span>
        </v-btn>
        <v-btn class="btn mypage" text outlined @click="$router.push({ name: 'mypage' })">
          <v-icon>fas fa-user</v-icon>
          <span>내정보</span>
        </v-btn>
        <v-btn class="btn logout" text outlined @click="logout">
          <v-icon>fas fa-user-lock</v-icon>
          <span>로그아웃</span>
        </v-btn>
      </v-card-text>
    </v-footer>
  </v-card>
</template>
<script>
import VueRouter from '@/router/index.js';
import { saveUser } from '@/user.js';
export default {
  //초기값 0번째 : 기록
  data: () => ({}),
  computed: {
    localAttrs() {
      const attrs = {};
      attrs['fixed'] = true;
      return attrs;
    },
  },
  methods: {
    record() {
      saveUser();
      VueRouter.push({ name: 'home' });
    },
    mypage() {
      saveUser();
      VueRouter.push({ name: 'mypage' });
    },
    logout() {
      // saveUser();
      localStorage.clear();
      VueRouter.push({ name: 'login' });
    },
  },
};
</script>
<style>
@import url(./NaviBar.css);
</style>
