<template>
    <div id = "navibar-container">
        <link href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" rel="stylesheet">
        <v-bottom-navigation
            :value="value"
            color="primary"
            horizontal
        >
            <v-btn @click = "$router.push({name : 'home'})">
                <span>기록</span>
                <v-icon>far fa-calendar-alt</v-icon>
            </v-btn>
             <v-btn @click="$router.push({name : 'today'})">
                <span>Today</span>
                <v-icon>fas fa-dumbbell</v-icon>
            </v-btn>
            <v-btn @click="$router.push({name : 'today'})">
                <span>보관함</span>
                <v-icon>fas fa-database</v-icon>
            </v-btn>
           
            <v-btn @click="$router.push({name : 'today'})">
                <span>게시판</span>
                <v-icon>fas fa-list</v-icon>
            </v-btn>
            <v-btn @click="$router.push({name : 'today'})">
                <span>식단</span>
                <v-icon>fas fa-utensils</v-icon>
            </v-btn>
            <v-btn @click="$router.push({name : 'today'})">
                <span>내 정보</span>
                <v-icon>fas fa-user</v-icon>
            </v-btn>
        </v-bottom-navigation>
    </div>

</template>
<script>
  export default {
      //초기값 0번째 : 기록
    data: () => ({ value: 0 }),
  }
</script>
<style>
    @import url(./NaviBar.css);
</style>