<template>
  <v-app>
    <v-container>
      <v-row>
        <v-card class="scroll mx-auto" width="800px" height="600px">
          <v-card-title class="white--text blue darken-4">
            운동 목록
            <v-spacer></v-spacer>
            <v-btn class="pa-2 mx-2" elevation="1" color="#ffffff" small v-on:click="todayExercise()">today</v-btn>
            <v-btn class="pa-2" elevation="1" color="#ffffff" small v-on:click ="loadExercise()">날짜 선택</v-btn>
            <template>
              <v-dialog
                ref="dialog"
                :return-value.sync="date" 
                width="290px"
                v-model="calendarDialog">
                <template>
                  <v-container fluid class="pa-0">
                    <v-date-picker v-model="date" year-icon="mdi-calendar-blank" prev-icon="mdi-skip-previous" next-icon="mdi-skip-next">
                      <v-spacer></v-spacer>
                      <v-btn color="primary" @click="hideCalendar()">Cancel</v-btn>
                      <v-btn color="primary" @click="submitCalendar()">OK</v-btn>
                    </v-date-picker>
                  </v-container>
                </template>
              </v-dialog>
            </template>
          </v-card-title>
          <v-card-text class="pt-4">{{date}} 에 계획한 운동 목록</v-card-text>
          <v-divider></v-divider>
            <v-col>
                <template>
                <v-col>
                  <v-col v-for="(exercise,index) in exercises" :key="index">
                    <v-card>
                      <v-card-title>
                        <v-icon
                          medium
                          left
                          @click ="deleteExercise(index)"
                        >
                          mdi-trash-can-outline
                        </v-icon>
                        {{exercise.target}} | {{exercise.kinds}} |
                        <v-col>
                          총 볼륨 : {{calVolume(exercise.sets)}}
                        </v-col>
                        <div>
                          <v-btn rounded outlined text @click="showSetDialog(index)">세트 추가</v-btn>
                          <v-dialog max-width="300" v-model="setDialog">
                            <Dialog header-title = "세트 추가" @hide="hideSetDialog" @submit="submitSetDialog">
                              <template v-slot:body>
                                <v-container>
                                  <v-row>
                                    <v-col cols="12" sm="6">
                                      <v-text-field v-model="weight" label="무게"></v-text-field>
                                    </v-col>
                                  </v-row>
                                  <v-row>
                                    <v-col >
                                      <v-btn @click="minusReps"> - </v-btn>
                                    </v-col>
                                    <v-col>
                                      <span>{{reps}}</span>
                                    </v-col>
                                    <v-col >
                                      <v-btn @click="plusReps"> + </v-btn>
                                    </v-col>
                                  </v-row>
                                </v-container>
                              </template>
                            </Dialog>
                          </v-dialog>
                        </div>
                        <div>
                          <v-btn rounded outlined text @click ="deleteSet(index)">세트 삭제</v-btn>
                        </div>  
                      </v-card-title>
                      <v-col v-for="set,idx in exercise.sets" :key="idx">
                          <v-container fluid>
                            <v-row>
                              <v-checkbox
                                :v-model="exercises[index].sets[idx].checked"
                                @change="checkSet($event,index,idx)"></v-checkbox>
                              <label>{{set.weight}}kg x {{set.reps}}회</label>
                            </v-row>
                          </v-container>
                      </v-col>           
                    </v-card>
                  </v-col>
                </v-col>
              </template>
            </v-col>   
        </v-card>
      </v-row> 
      <v-row>
        <v-col>
          <v-app>
            <v-content>
              <v-btn elevation="2" small block color="blue" @click="showExDialog">운동 추가</v-btn>
              <v-dialog max-width="600" v-model="exerciseDialog">
                <Dialog header-title = "운동 추가" @hide="hideExDialog" @submit="submitExDialog">
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
                              <v-list-item v-for="item in custom.list" :key="item.kinds" @click ="addChip(custom.target, item)">
                                <v-list-item-content>
                                  <v-list-item-title v-text="item"></v-list-item-title>
                                </v-list-item-content>
                              </v-list-item>
                            </v-list-item-group>
                          </v-list>
                        </v-tab-item>
                      </v-tabs-items>
                      <v-row align="center" justify="start">
                        <v-col v-for="select in selected" :key="select.kinds">
                          <v-chip :disabled="loading" close @click:close="selected.splice(i, 1)">
                            {{ select.kinds }}
                          </v-chip>
                        </v-col>
                      </v-row>
                    </v-card>
                  </template>
                </Dialog>
              </v-dialog>
            </v-content>
          </v-app>
        </v-col>
        <v-col>
          <v-btn elevation="2" small block v-on:click ="loadExercise()" color ="green">불러오기</v-btn>
          <template>
            <v-dialog
              ref="dialog"
              :return-value.sync="date" 
              width="290px"
              v-model="calendarDialog">
              <template>
                <v-container fluid class="pa-0">
                  <v-date-picker v-model="date" year-icon="mdi-calendar-blank" prev-icon="mdi-skip-previous" next-icon="mdi-skip-next">
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
          <v-btn elevation="2" small block v-on:click ="saveExercise()" color="red">저장</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <NaviBar></NaviBar>
  </v-app>
</template>

<script>
//import ExerciseTemplate from '@/components/ExerciseTemplate.vue'
import Header from '@/components/Header.vue'
import NaviBar from '@/components/NaviBar.vue'
import Dialog from '@/components/Dialog.vue'
import CalendarView from '@/components/CalendarView.vue'
import {eventBus} from '@/main'

  function detailedSets(reps,weight,checked){
      this.reps = reps;
      this.weight=weight;
      this.checked=checked;
  }
  function WorkoutDetail(target,workout,sets){
      this.target=target;
      this.workout=workout;
      this.sets=sets;
      this.addSet=function(set){
          this.sets.push(set);
      };
  }
 export default{
    created(){
          eventBus.$on('selectDate', (today)=>{
            this.date = today;
            this.exercises = ''
      })
    },
    components:{
        //ExerciseTemplate
        Header,Dialog,CalendarView,NaviBar
    },
    mounted(){

    },
    data(){
        return{
          detailedSets,
          WorkoutDetail,
          detailedEx : null,
          date: new Date().toISOString().substr(0, 10),
          setIndex:0,
          weight:null,reps:0,
          // sets :[],
          tab: null,
          loading: false,
          selected: [],
          model: [0,1],
          exerciseDialog:false,
          setDialog:false,
          calendarDialog:false,
          exercises: [],
          workoutList:[], 
          customs:[
            {
              category:'추천',
              target: '추천',
              list:[

              ],
            },
            {
              category:'하체',
              target: '하체',
              list:[
                '바벨 백스쿼트',
                '컨벤셔널 데드리프트',
                '프론트 스쿼트'
              ]
            },
            {
              category:'가슴',
              target: '가슴',
              list:[
                '벤치프레스',
                '덤벨 벤치프레스',
                '딥스'
              ]
            },
            {
              category:'등',
              target: '등',
              list:[
                '루마니안 데드리프트',
                '랫 풀 다운',
                '풀 업'
              ]
            }
            ,
            {
              category:'어깨',
              target: '어깨',
              list:[
                '오버 헤드 프레스',
                '덤벨 숄더 프레스',
                '사이드 레터럴 레이즈'
              ]
            },
            {
              category:'팔',
              target: '팔',
              list:[
                '덤벨 컬',
                '이지바 컬',
                '케이블 푸쉬 다운'
              ]
            }
          ]
        }
    },
    methods:{
      plusReps(){
        this.reps++;
      },
      minusReps(){
        this.reps--;
      },
      calVolume(sets){
        let sum = 0
        for(let i =0;i<sets.length;i++){
          sum+= sets[i].weight * sets[i].reps
        }
        return sum
      },
      saveExercise(){
        const req = {
          dates : this.date,
          exercises : this.exercises,
        }
            
                fetch("http://115.85.183.157:3000/exercises",{
                    method : "POST",
                    headers:{
                        "Content-Type" : "application/json",
                    },
                    body : JSON.stringify(req),
                }).then((res) => res.json())
                .then((res) => {
                    if (res.success) {
                        alert("성공");
                    }else{
                        alert((res.msg));
                    }
                })
                .catch((err) => {
                    console.error("error");
                });
        

      },
      loadExercise(){
        console.log('load exercise!')
        this.showCalendar();
      },
      todayExercise(){
        this.date = new Date().toISOString().substr(0, 10);
        this.updateDate();
      },
      checkSet(exIdx,setIdx){
        if(this.exercises[exIdx].sets[setIdx].checked === false){
          this.exercises[exIdx].sets[setIdx].checked = true;
        }else{
          this.exercises[exIdx].sets[setIdx].checked = false;
        }
        console.log(this.exercises[exIdx].sets[setIdx].checked);
      },
      addSet() {
        console.log(this.exercises);
        // this.exercises[this.setIndex].addSet({weight : this.weight, reps : this.reps, checked : false});
        this.exercises[this.setIndex].sets.push({weight : this.weight, reps : this.reps, checked : false});
        this.setIndex=0;
        return 0;
      },
      deleteSet(index) {
        this.exercises[index].sets.pop()
      },
      deleteExercise(index){
        this.exercises.splice(index,1);
      },
      showExDialog(){
        this.exerciseDialog = true;
      },
      hideExDialog(){
        this.exerciseDialog=false;
      },
      submitExDialog(){
        for(let i=0;i<this.selected.length;i++){
          var workout = new WorkoutDetail(this.selected[i].target, this.selected[i].kinds, []);
          this.workoutList.push(workout);
          this.exercises.push({target: this.selected[i].target, kinds:this.selected[i].kinds, sets:[]})
        }
        console.log(this.workoutList[0]);
        this.selected = [];
        this.hideExDialog();
      },
      showSetDialog(index){
        this.setDialog=true;
        this.setIndex=index;
      },
      hideSetDialog(){
        this.weight=null
        this.reps=0
        this.setDialog=false;
      },
      submitSetDialog(){
        if(this.reps <= 0){
          alert("횟수를 확인해주세요.");
        }
        if(this.reps>0){
          this.addSet();
          this.hideSetDialog();
        
        } 
      },
      addChip(targetName, item){
        if(!(this.selected.includes(item))){
          this.selected.push({
            target: targetName,
            kinds: item,
            sets:[]
          })
        }
      },
      showCalendar(){
        this.calendarDialog=true;
      },
      hideCalendar(){
        this.calendarDialog=false;
      },
      submitCalendar(){
        this.updateDate();
        this.hideCalendar();
      },
      updateDate(){
        this.$refs.dialog.save(this.date);
        eventBus.$emit("updatedDate", this.date);

        fetch(`http://115.85.183.157:3000/exercises/${this.date}`,{
              method : "GET",
              headers:{
                  "Content-Type" : "application/json",
              },
          }).then((res) => res.json())
          .then((res) => {
            console.log(res);
            var exercises=[];
            var prev="";
            var kindIdx=-1;
            for(var i=0; i<res.length; i++) {
              console.log(prev!==res[i].kinds);
              if(prev!==res[i].kinds){
                prev=res[i].kinds;
                kindIdx+=1;
                exercises.push({target : res[i].target, kinds : res[i].kinds, sets : []})
              }
              exercises[kindIdx].sets.push({reps : parseInt(res[i].reps), weight : res[i].weight, checked : res[i].checked});
            }
            // for(ex in res){
            //   if(prev!==ex.kinds){
            //     prev=ex.kinds;
            //     exercises.push({target : ex.target, kinds : ex.kinds, sets : []})
                
            //     tempKind[sets]=[];
            //   }
            //   tempKind[target]=ex.target;
            //   tempKind[kinds]=ex.kinds;
            //   tempSets=[];
            //   for(set in ex.sets){
            //     tempSets.append
            //   }
            //   tempKind[sets]=tempSets;
            // }
              // {
              //   target : '등',
              //   kinds :'랫풀' , 
              //   sets : [
              //     {
              //       reps : 3,
              //       weight : 50,
              //     }
              //   ]
              // }
            // kind="";
            console.log(exercises);
            this.exercises=exercises;
          })
          .catch((err) => {
              console.error("error");
          });

      },
    }   
  }
</script>
<style>
  .scroll{
    overflow-y:scroll
  }
</style>