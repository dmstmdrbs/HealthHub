<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12" sm="4">
          <v-card class="mx-auto scroll" width="100%" height="600px">
            <v-card-title class="white--text orange darken-1">추천 운동 리스트</v-card-title>
            <v-spacer></v-spacer>

            <v-card-actions>
              <v-btn icon @click="show = !show">
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
              <v-divider vertical></v-divider>
              <v-btn text @click="show = !show">전체 세트 보기</v-btn>
              <v-divider vertical></v-divider>
              <v-btn text @click="getRecommend">추천 목록 생성</v-btn>
            </v-card-actions>
            <template>
              <v-divider></v-divider>
              <v-col>
                <template>
                  <v-col>
                    <v-col v-for="(exercise, index) in recommended" :key="index">
                      <v-card>
                        <v-card-title> {{ exercise.target }} | {{ exercise.kinds }} </v-card-title>
                        <v-expand-transition>
                          <div v-show="show">
                            <v-col v-for="(set, idx) in exercise.sets" :key="idx">
                              <v-container fluid>
                                <v-row>
                                  <label>{{ set.weight }}kg x {{ set.reps }}회</label>
                                </v-row>
                              </v-container>
                            </v-col>
                          </div>
                        </v-expand-transition>
                      </v-card>
                    </v-col>
                  </v-col>
                </template>
              </v-col>
            </template>
          </v-card>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col cols="12" sm="8">
          <v-card class="scroll mx-auto" height="600px">
            <v-card-title class="white--text blue darken-4">
              운동 목록
              <v-spacer></v-spacer>
              <v-btn
                class="pa-2 mx-2"
                elevation="1"
                color="#ffffff"
                small
                v-on:click="todayExercise()"
                >today</v-btn
              >
              <v-btn class="pa-2" elevation="1" color="#ffffff" small v-on:click="loadExercise()"
                >날짜 선택</v-btn
              >
              <template>
                <v-dialog
                  ref="dialog"
                  :return-value.sync="date"
                  width="290px"
                  v-model="calendarDialog"
                >
                  <template>
                    <v-container fluid class="pa-0">
                      <v-date-picker
                        v-model="date"
                        year-icon="mdi-calendar-blank"
                        prev-icon="mdi-skip-previous"
                        next-icon="mdi-skip-next"
                      >
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click="hideCalendar()">Cancel</v-btn>
                        <v-btn color="primary" @click="submitCalendar()">OK</v-btn>
                      </v-date-picker>
                    </v-container>
                  </template>
                </v-dialog>
              </template>
            </v-card-title>
            <v-card-text class="pt-4">{{ date }} 에 계획한 운동 목록</v-card-text>
            <v-divider></v-divider>
            <v-col>
              <template>
                <v-col>
                  <v-col v-for="(exercise, index) in exercises" :key="index">
                    <v-card>
                      <v-card-title>
                        <v-icon medium left @click="deleteExercise(index)">
                          mdi-trash-can-outline
                        </v-icon>
                        {{ exercise.target }} | {{ exercise.kinds }}
                        <v-spacer></v-spacer>
                        <v-btn rounded outlined text @click="showSetDialog(index)">세트 추가</v-btn>
                        <v-dialog :retain-focus="false" max-width="300px" v-model="setDialog">
                          <template>
                            <v-container class="pa-1">
                              <v-card>
                                <v-card-title>
                                  세트 추가
                                </v-card-title>
                                <v-card-text>
                                  <v-text-field
                                    suffix="kg"
                                    label="무게"
                                    v-model="weight"
                                  ></v-text-field>
                                  <v-row no-gutters>
                                    <v-col><v-btn @click="reps--">-</v-btn></v-col>
                                    <v-col
                                      ><span>{{ reps }}</span></v-col
                                    >
                                    <v-col><v-btn @click="reps++">+</v-btn></v-col>
                                  </v-row>
                                </v-card-text>
                                <v-card-actions>
                                  <v-row no-gutters>
                                    <v-btn color="primary" text @click="hideSetDialog">
                                      취소
                                    </v-btn>
                                    <v-btn color="primary" text @click="submitSetDialog(index)">
                                      저장
                                    </v-btn>
                                  </v-row>
                                </v-card-actions>
                              </v-card>
                            </v-container>
                          </template>
                        </v-dialog>
                        <v-btn rounded outlined text @click="deleteSet(index)">세트 삭제</v-btn>
                      </v-card-title>
                      <v-row>
                        <v-col cols="12" sm="4">
                          <v-btn text disabled color="#ffffff"
                            >총 볼륨 : {{ calVolume(exercise.sets) }}</v-btn
                          >
                        </v-col>
                        <v-col cols="12" sm="8"> </v-col>
                      </v-row>
                      <v-col v-for="(set, idx) in exercise.sets" :key="idx">
                        <v-container fluid>
                          <v-row>
                            <v-checkbox
                              :v-model="exercises[index].sets[idx].checked"
                              @change="checkSet(index, idx)"
                            >
                            </v-checkbox>
                            <label style="margin-top:20px">
                              {{ set.weight }}kg x {{ set.reps }}회</label
                            >
                          </v-row>
                        </v-container>
                      </v-col>
                    </v-card>
                  </v-col>
                </v-col>
              </template>
            </v-col>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-app>
            <v-main>
              <v-btn elevation="2" small block color="blue" @click="showExDialog">운동 추가</v-btn>
              <v-dialog max-width="600" v-model="exerciseDialog">
                <Dialog header-title="운동 추가" @hide="hideExDialog" @submit="submitExDialog">
                  <template v-slot:body>
                    <v-card>
                      <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
                        <v-tab v-for="custom in customs" :key="custom.kinds">
                          {{ custom.category }}
                        </v-tab>
                      </v-tabs>
                      <v-tabs-items v-model="tab">
                        <v-tab-item v-for="custom in customs" :key="custom.kinds">
                          <v-list>
                            <v-list-item-group color="indigo">
                              <v-list-item
                                v-for="item in custom.list"
                                :key="item.kinds"
                                @click="addChip(custom.target, item)"
                              >
                                <v-list-item-content>
                                  <v-list-item-title v-text="item"></v-list-item-title>
                                </v-list-item-content>
                              </v-list-item>
                            </v-list-item-group>
                          </v-list>
                        </v-tab-item>
                      </v-tabs-items>
                      <v-row align="center" justify="start">
                        <v-col v-for="(select, i) in selected" :key="i">
                          <v-chip :disabled="loading" close @click:close="selected.splice(i, 1)">
                            {{ select.kinds }}
                          </v-chip>
                        </v-col>
                      </v-row>
                    </v-card>
                  </template>
                </Dialog>
              </v-dialog>
            </v-main>
          </v-app>
        </v-col>
        <v-col>
          <v-btn elevation="2" small block v-on:click="loadExercise()" color="green"
            >불러오기</v-btn
          >
          <template>
            <v-dialog
              ref="dialog"
              :return-value.sync="date"
              :retain-focus="false"
              width="290px"
              mode="eager"
              v-model="calendarDialog"
            >
              <template>
                <v-container fluid class="pa-0">
                  <v-date-picker
                    v-model="date"
                    year-icon="mdi-calendar-blank"
                    prev-icon="mdi-skip-previous"
                    next-icon="mdi-skip-next"
                  >
                    <v-spacer></v-spacer>
                    <v-btn color="primary" @click="hideCalendar()">Cancel</v-btn>
                    <v-btn color="primary" @click="submitCalendar()">OK</v-btn>
                  </v-date-picker>
                </v-container>
              </template>
            </v-dialog>
          </template>
        </v-col>
        <v-col>
          <v-btn elevation="2" small block v-on:click="showFeedbackDialog()" color="red"
            >저장</v-btn
          >
          <v-dialog max-width="600" v-model="feedbackDialog">
            <Dialog header-title="피드백" @hide="hideFeedbackDialog" @submit="submitFeedbackDialog">
              <template v-slot:body>
                <p>
                  RPE_LOW : 매우 쉬웠음 <br />RPE_MID : 2~5개 더 할 수 있음 <br />RPE_HIGH : 매우
                  힘듦. 1개 더 할 수 있음
                </p>
                <v-btn @click="submitFeedbackDialog" text outlined>Skip</v-btn>
                <v-col v-for="(exercise, index) in exercises" :key="index">
                  <v-card>
                    <v-card-title>
                      {{ exercise.target }} | {{ exercise.kinds }}
                      <v-spacer></v-spacer>
                    </v-card-title>
                    <v-col v-for="(set, idx) in exercise.sets" :key="idx">
                      <v-container fluid>
                        <v-row>
                          <label style="margin-top:20px">
                            {{ set.weight }}kg x {{ set.reps }}회</label
                          >
                          <v-container fluid>
                            <v-radio-group v-model="set.rpe" row>
                              <v-radio label="RPE_LOW" value="RPE.LOW"></v-radio>
                              <v-radio label="RPE_MID" value="RPE.MID"></v-radio>
                              <v-radio label="RPE_HIGH" value="RPE.HIGH"> </v-radio>
                              <v-radio label="Failed" value="RPE.Failed"> </v-radio>
                            </v-radio-group>
                          </v-container>
                        </v-row>
                      </v-container>
                    </v-col>
                  </v-card>
                </v-col>
              </template>
            </Dialog>
          </v-dialog>
        </v-col>
      </v-row>
    </v-container>
    <NaviBar></NaviBar>
  </v-app>
</template>

<script>
//import ExerciseTemplate from '@/components/ExerciseTemplate.vue'
import Header from '@/components/Header.vue';
import NaviBar from '@/components/NaviBar.vue';
import Dialog from '@/components/Dialog.vue';
import { eventBus } from '@/main';
import { user } from '@/user.js';
import { userInfo } from '@/userInfo.js';
import { recommendedList, recommend } from '@/recommend.js';

function detailedSets(reps, weight, checked) {
  this.reps = reps;
  this.weight = weight;
  this.checked = checked;
}
function WorkoutDetail(target, workout, sets) {
  this.target = target;
  this.workout = workout;
  this.sets = sets;
  this.addSet = function(set) {
    this.sets.push(set);
  };
}

export default {
  name: 'AddExercise',
  created() {
    console.log(user.id);
    console.log(user.uID);
    console.log('---------');

    const req = {
      uID: user.uID,
      uName: userInfo.uName,
      age: parseInt(userInfo.age),
      sex: userInfo.sex,
      height: parseInt(userInfo.height),
      weight: parseInt(userInfo.weight),
      squat: parseInt(userInfo.squat),
      bench: parseInt(userInfo.bench),
      dead: parseInt(userInfo.dead),
      weak: userInfo.weak,
      proficiency: parseInt(userInfo.proficiency),
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
          console.log('성공');
          this.getUserInfo();
          this.getHistory();
        }
      })
      .catch(err => {
        console.error('정보 저장 중 에러 발생');
      });

    eventBus.$on('selectDate', today => {
      this.date = today;

      fetch(`http://115.85.183.157:3000/exercises/${user.uID}/${this.date}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(res => {
          // console.log(res);
          var exercises = [];
          var prev = '';
          var kindIdx = -1;
          for (var i = 0; i < res.length; i++) {
            // console.log(prev !== res[i].kinds);
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

          // console.log(exercises);
          this.exercises = exercises;
        })
        .catch(err => {
          console.error('error');
        });
    });
  },
  components: {
    //ExerciseTemplate
    Header,
    Dialog,
    NaviBar,
  },
  mounted() {
    this.todayExercise();
  },
  watch: {},
  data() {
    return {
      RPE: {
        LOW: false,
        MID: false,
        HIGH: false,
        Failed: false,
      },
      detailedSets,
      WorkoutDetail,
      detailedEx: null,
      date: new Date().toISOString().substr(0, 10),
      setIndex: 0,
      weight: null,
      reps: 0,
      // sets :[],
      tab: null,
      loading: false,
      show: false,
      selected: [],
      model: [0, 1],
      exerciseDialog: false,
      setDialog: false,
      calendarDialog: false,
      feedbackDialog: false,
      exercises: [],
      userProficiency: '초급자',
      userWeakness: '등',
      recommended: [],
      workoutHistory: [],
      workoutList: [],
      customs: [
        {
          category: '하체',
          target: '하체',
          list: [
            '바벨 백스쿼트',
            '컨벤셔널 데드리프트',
            '프론트 스쿼트',
            '브이 스쿼트',
            '스미스 런지',
            '불가리안 스쿼트',
            '레그 익스텐션',
            '레그 컬',
            '레그 프레스',
            '이너 타이 머신',
            '핵 스쿼트',
            '굿모닝 스쿼트',
            '힙 쓰러스트',
          ],
        },
        {
          category: '가슴',
          target: '가슴',
          list: [
            '벤치프레스',
            '인클라인 벤치프레스',
            '디클라인 벤치 프레스',
            '덤벨 벤치프레스',
            '인클라인 덤벨 벤치프레스',
            '딥스',
            '체스트 프레스 머신',
            '덤벨 플라이',
            '팩 덱 플라이 머신',
            '케이블 플라이',
            '덤벨 풀 오버',
            '푸쉬업',
          ],
        },
        {
          category: '등',
          target: '등',
          list: [
            '루마니안 데드리프트',
            '랫 풀 다운',
            '풀 업',
            '원 암 덤벨 로우',
            '바벨 로우',
            '티 바 로우',
            '케이블 롱 풀',
            '와이드 풀 다운',
            '스트레이트 암 풀 다운',
            '프론트 로우',
            '팬들레이 로우',
          ],
        },
        {
          category: '어깨',
          target: '어깨',
          list: [
            '오버 헤드 프레스',
            '덤벨 숄더 프레스',
            '사이드 레터럴 레이즈',
            '벤트오버 레터럴 레이즈',
            '숄더 프레스 머신',
            '리버스 팩 덱 플라이',
            '케이블 페이스 풀 오버',
            '업라이트 로우',
            '케이블 레터럴 레이즈',
            '리버스 케이블 플라이',
          ],
        },
        {
          category: '팔',
          target: '이두',
          list: [
            '덤벨 컬',
            '이지바 컬',
            '케이블 푸쉬 다운',
            '프리처 컬',
            '케이블 컬',
            '라잉 트라이셉스 익스텐션',
            '해머 컬',
          ],
        },
      ],
    };
  },
  methods: {
    getUserInfo() {
      fetch(`http://115.85.183.157:3000/userInfo/${user.uID}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(res => {
          userInfo.uName = res.uName;
          userInfo.age = res.age;
          userInfo.sex = res.sex;
          userInfo.height = res.height;
          userInfo.weight = res.weight;
          userInfo.squat = res.squat;
          userInfo.bench = res.bench;
          userInfo.dead = res.dead;
          userInfo.weak = res.weak;
          userInfo.proficiency = res.proficiency;
          user.userInfo = userInfo;
          console.log(user);
          console.log(userInfo);
        })
        .catch(err => {
          console.error('error');
        });
    },
    getRecommend() {
      console.log(this.workoutHistory);
      this.recommended = recommend(this.workoutHistory);
    },
    getHistory() {
      console.log('getHistory() start');
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
        console.log(dateForHistory[i]);
        fetch(`http://115.85.183.157:3000/exercises/${user.uID}/${dateForHistory[i]}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then(res => res.json())
          .then(res => {
            // console.log(res);
            var exercises = [];
            var prev = '';
            var kindIdx = -1;
            for (var i = 0; i < res.length; i++) {
              // console.log(prev !== res[i].kinds);
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
            if (exercises.length !== 0) {
              this.workoutHistory.push({ exercises: exercises });
            }
          })
          .catch(err => {
            console.error('error');
          });
      }
      console.log(this.workoutHistory);
      console.log('getHistory() end');
    },
    refreshAll() {
      // 새로고침
      this.$router.go();
    },
    showFeedbackDialog() {
      this.feedbackDialog = true;
    },
    hideFeedbackDialog() {
      this.feedbackDialog = false;
    },
    submitFeedbackDialog() {
      this.hideFeedbackDialog();
      this.saveExercise();
    },
    calVolume(sets) {
      let sum = 0;
      for (let i = 0; i < sets.length; i++) {
        sum += sets[i].weight * sets[i].reps;
      }
      return sum;
    },
    saveExercise() {
      const req = {
        uID: user.uID,
        dates: this.date,
        exercises: this.exercises,
      };
      fetch('http://115.85.183.157:3000/exercises/', {
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
          } else {
            alert(res.msg);
          }
        })
        .catch(err => {
          console.error('error');
        });
    },
    loadExercise() {
      console.log('load exercise!');
      this.showCalendar();
    },
    todayExercise() {
      function getDateFormat(date) {
        var year = date.getFullYear();
        var month = 1 + date.getMonth();
        month = month >= 10 ? month : '0' + month;
        var day = date.getDate();
        day = day >= 10 ? day : '0' + day;
        return year + '-' + month + '-' + day;
      }
      this.date = this.date = new Date().toISOString().substr(0, 10);
      this.updateDate();
    },
    checkSet(exIdx, setIdx) {
      if (this.exercises[exIdx].sets[setIdx].checked === false) {
        this.exercises[exIdx].sets[setIdx].checked = true;
      } else {
        this.exercises[exIdx].sets[setIdx].checked = false;
      }
      // console.log(this.exercises[exIdx].sets[setIdx].checked);
    },
    addSet() {
      console.log(this.exercises);
      // this.exercises[this.setIndex].addSet({weight : this.weight, reps : this.reps, checked : false});
      this.exercises[this.setIndex].sets.push({
        weight: this.weight,
        reps: this.reps,
        checked: false,
        rpe: null,
      });
      this.setIndex = 0;
      this.reps = 0;
      return;
    },
    deleteSet(index) {
      this.exercises[index].sets.pop();
    },
    deleteExercise(index) {
      this.exercises.splice(index, 1);
    },
    showExDialog() {
      this.exerciseDialog = true;
    },
    hideExDialog() {
      this.exerciseDialog = false;
    },
    submitExDialog() {
      for (let i = 0; i < this.selected.length; i++) {
        var workout = new WorkoutDetail(this.selected[i].target, this.selected[i].kinds, []);
        this.workoutList.push(workout);
        this.exercises.push({
          target: this.selected[i].target,
          kinds: this.selected[i].kinds,
          sets: [],
        });
      }
      // console.log(this.workoutList[0]);
      this.selected = [];
      this.hideExDialog();
    },
    showSetDialog(index) {
      this.setDialog = true;
      this.setIndex = index;
    },
    hideSetDialog() {
      this.weight = null;
      this.reps = 0;
      this.setDialog = false;
      return;
    },
    submitSetDialog() {
      //무게 유효성 검사 - 입력 안했을 때, 몸무게 5배 이상 입력했을 때
      if (this.weight == null || this.weight >= userInfo.weight * 5) {
        alert('무게를 제대로 입력해주세요.');
      }
      if ((this.reps <= 0) | (this.reps === null)) {
        alert('횟수를 확인해주세요.');
      }
      if ((this.reps > 0) & (this.weight !== null) & (this.weight < userInfo.weight * 5)) {
        this.addSet();
        this.hideSetDialog();
        // console.log(this.selected);
      }
    },
    addChip(targetName, item) {
      if (!this.selected.includes(item)) {
        this.selected.push({
          target: targetName,
          kinds: item,
          sets: [],
        });
      }
    },
    showCalendar() {
      this.calendarDialog = true;
    },
    hideCalendar() {
      this.calendarDialog = false;
    },
    submitCalendar() {
      this.updateDate();
      this.hideCalendar();
    },
    saveDate(date) {
      this.$refs.dialog.save(date);
    },
    updateDate() {
      this.saveDate(this.date);

      eventBus.$emit('updatedDate', this.date);

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
            // console.log(prev !== res[i].kinds);
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

          // console.log(exercises);
          this.exercises = exercises;
        })
        .catch(err => {
          console.error('error');
        });
    },
  },
};
</script>
<style>
.scroll {
  overflow-y: scroll;
}
</style>
