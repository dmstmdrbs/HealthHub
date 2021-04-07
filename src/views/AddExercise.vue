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
              {{exercise.target}} | {{exercise.kinds}}

              <v-dialog 
                persistent
                max-width="600px"
                v-model="setDialog">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn 
                    rounded outlined text 
                    v-bind="attrs"
                    v-on="on"
                    >세트 추가</v-btn>
                </template>
                <v-dialog
                  v-model = "setDialog"
                  persistent
                  max-width="600px">
                  <v-card>
                  <v-card-title>
                    <span class="headline set">세트 추가</span>
                  </v-card-title>
                  <v-form>
                    <v-container>
                      <v-row>
                        <v-col
                          cols="12"
                          sm="6"
                        >
                          <v-text-field
                            v-model="weight"
                            label="무게"
                            filled
                          ></v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                        >
                          <v-text-field
                            v-model="reps"
                            label="횟수"
                            filled
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-form>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="setDialog = false"
                    >
                      Cancel
                    </v-btn>
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="addSet(index)"
                    >
                      Add
                    </v-btn>
                  </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-dialog>
              
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
          <v-app>
            <v-dialog
              v-model="dialog"
              persistent
              max-width="600px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  small
                  v-bind="attrs"
                  v-on="on"
                >
                  운동 추가
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">라이브러리</span>
                </v-card-title>
                <v-tabs
                  v-model="tab"
                  background-color="transparent"
                  color="basil"
                  grow
                >
                  <v-tab
                    v-for="custom in customs" 
                    :key="custom.kinds"
                  >
                    {{ custom.target }}
                  </v-tab>
                </v-tabs>
                <v-tabs-items v-model="tab">
                  <v-tab-item
                    v-for="custom in customs"
                    :key="custom.kinds"
                  >
                  <v-list>
                    <v-list-item-group
                      color="indigo"
                    >
                      <v-list-item
                        v-for="item in custom.list"
                        :key="item.kinds"
                        @click ="addChip(custom.target, item)"
                      >
                        <v-list-item-content>
                          <v-list-item-title 
                          v-text="item"
                          
                          ></v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                  </v-tab-item>
                  
                </v-tabs-items>
                <v-row
                  align="center"
                  justify="start"
                >
                  <v-col
                    v-for="select in selected"
                    :key="select.kinds"
                    
                  >
                    <v-chip
                      :disabled="loading"
                      close
                      @click:close="selected.splice(i, 1)"
                    >
                    
                      {{ select.kinds }}
                    </v-chip>
                  </v-col>
                </v-row>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="dialog = false"
                  >
                    Close
                  </v-btn>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="saveDialog()"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-app>
        </v-col>
        <v-col>
          <v-btn
            elevation="2"
            small
            block
            v-on:click = "loadExercise">
            불러오기
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
          elevation="2"
            small
            block>
            저장
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
//import ExerciseTemplate from '@/components/ExerciseTemplate.vue'
 export default{
        components:{
            //ExerciseTemplate
        },
        data(){
            return{
              weight:null,reps:null,
              sets :[],
              tab: null,
              loading: false,
              selected: [],
              model: [0,1],
              dialog: false,
              setDialog:false,
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
          loadExercise(){
            console.log('load exercise!')
          },
          addSet(index) {
            this.exercises[index].sets.push({weight : this.weight, reps : this.reps})
            this.weight=null
            this.reps=null
            this.setDialog=false
          },
          deleteSet(index) {
            this.exercises[index].sets.pop()
          },
          deleteExercise(index){
            this.exercises.splice(index,1);
          },
          showDialog(){
            this.dialog=true
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
          saveDialog(){
            this.dialog=false
            for(let i=0;i<this.selected.length;i++){
              
              this.exercises.push({target: this.selected[i].target, kinds:this.selected[i].kinds, sets:[]})
            }
            
            this.selected = [];
          }
        },
        
    }
</script>