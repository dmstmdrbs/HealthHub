<template>
  <div max-width="500">
    <Header></Header>
    <v-app>
      <v-main>
        <Calendar></Calendar>
        <AddExercise></AddExercise>
      </v-main>
    </v-app>
    <NaviBar></NaviBar>
  </div>
</template>
<script>
import Header from '@/components/Header.vue';
import AddExercise from './AddExercise.vue';
import Calendar from '@/components/Calendar';
import NaviBar from '@/components/NaviBar.vue';
import { user } from '@/user.js';
export default {
  created() {
    console.log(user.id);
    console.log(user.uID);
    console.log(user.userInfo);
    console.log('---------');
  },
  components: {
    AddExercise,
    Calendar,
    Header,
    NaviBar,
  },
  data() {
    return {
      workoutHistory: [],
    };
  },
  methods: {
    getHistory() {
      function getFormatDate(date) {
        // var date = new Date();
        var year = date.getFullYear();
        var month = 1 + date.getMonth();
        month = month >= 10 ? month : '0' + month;
        var day = date.getDate();
        day = day >= 10 ? day : '0' + day;
        return year + '-' + month + '-' + day;
      }
      function getYesterDay(i) {
        var date = new Date();
        date.setDate(date.getDate() - i);
        return date;
      }
      // var today = new Date();
      let dateForHistory = [];
      for (var i = 0; i < 7; i++) {
        dateForHistory.push(getYesterDay(i));
      }
      dateForHistory.forEach(function(date, idx, arr) {
        arr[idx] = getFormatDate(date);
      });

      for (var i = 0; i < dateForHistory.length; i++) {
        fetch(`http://115.85.183.157:3000/exercises/${user.uID}/${this.date}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then(res => res.json())
          .then(res => {
            console.log(res);
            var exercises = [];
            var prev = '';
            var kindIdx = -1;
            for (var i = 0; i < res.length; i++) {
              console.log(prev !== res[i].kinds);
              if (prev !== res[i].kinds) {
                prev = res[i].kinds;
                kindIdx += 1;
                exercises.push({ target: res[i].target, kinds: res[i].kinds, sets: [] });
              }
              exercises[kindIdx].sets.push({
                reps: parseInt(res[i].reps),
                weight: res[i].weight,
                checked: res[i].checked,
              });
            }

            console.log(exercises);
            this.workoutHistory.push(exercises);
          })
          .catch(err => {
            console.error('error');
          });
        console.log(this.workoutHistory);
        console.log('get history success!');
      }
    },
  },
};
</script>
