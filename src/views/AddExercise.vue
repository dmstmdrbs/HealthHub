<template>
  <div>
    <v-container>
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
              <v-card>
                {{set.weight}}kg {{set.reps}}회
              </v-card>
            </v-col>           
          </v-card>
        </v-col>
      </v-col>
      
      <v-row>
        <v-col>
          <v-btn elevation="2" small block color="blue" @click="showExDialog">운동 추가</v-btn>
          <v-dialog max-width="600" v-model="exerciseDialog">
            <Dialog header-title = "운동 추가" @hide="hideExDialog" @submit="submitExDialog">
              <template v-slot:body>
                <v-card>
                  <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
                    <v-tab v-for="custom in customs" :key="custom.kinds">
                      {{ custom.target }}
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
        </v-col>
        <v-col>
          <v-btn elevation="2" small block v-on:click ="loadExercise()" color ="green">불러오기</v-btn>
          <v-dialog max-width="350px" v-model="calendarDialog">
            <template>
              <v-row justify="center">
                <v-date-picker
                  v-model="picker"
                  year-icon="mdi-calendar-blank"
                  prev-icon="mdi-skip-previous"
                  next-icon="mdi-skip-next"
                ></v-date-picker>
              </v-row>
            </template>
          </v-dialog>
          
        </v-col>
        <v-col>
          <v-btn elevation="2" small block color="red">저장</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
//import ExerciseTemplate from '@/components/ExerciseTemplate.vue'

import Dialog from '@/components/Dialog.vue'
import CalendarView from '@/components/CalendarView.vue'
 export default{
        components:{
            //ExerciseTemplate
            Dialog,CalendarView
        },
        data(){
            return{
              picker: new Date().toISOString().substr(0, 10),
              setIndex:0,
              weight:null,reps:0,
              sets :[],
              tab: null,
              loading: false,
              selected: [],
              model: [0,1],
              exerciseDialog:false,
              setDialog:false,
              calendarDialog:false,
              exercises: [],
              
              customs:[
                {
                  target: '하체',
                  list:[
                    '바벨 백스쿼트',
                    '컨벤셔널 데드리프트',
                    '프론트 스쿼트'
                  ]
                },
                {
                  target: '가슴',
                  list:[
                    '벤치프레스',
                    '덤벨 벤치프레스',
                    '딥스'
                  ]
                },
                {
                  target: '등',
                  list:[
                    '루마니안 데드리프트',
                    '랫 풀 다운',
                    '풀 업'
                  ]
                }
                ,
                {
                  target: '어깨',
                  list:[
                    '오버 헤드 프레스',
                    '덤벨 숄더 프레스',
                    '사이드 레터럴 레이즈'
                  ]
                },
                {
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
          loadExercise(){
            console.log('load exercise!')
            this.showCalendarDialog();
          },
          addSet() {
            console.log(this.weight,this.reps,this.setIndex);
            this.exercises[this.setIndex].sets.push({weight : this.weight, reps : this.reps});
            this.setIndex=0;
            
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
              this.exercises.push({target: this.selected[i].target, kinds:this.selected[i].kinds, sets:[]})
            }
            
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
            this.addSet();
            this.hideSetDialog();
              
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
          showCalendarDialog(){
            this.calendarDialog=true;
          },
          hideCalendar(){
            this.calendarDialog=false;
          },
          submitCalendar(){

            this.hideCalendar();
          },
        } 
        
    }
</script>