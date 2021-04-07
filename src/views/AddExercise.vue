<template>
  <div>
    <v-container>
      <v-col>
        <v-col v-for="(exercise, i) in exercises" :key="i">
          <v-card>
            <v-card-title>
              <v-icon
                medium
                left
                @click ="deleteExercise(i)"
              >
                mdi-trash-can-outline
              </v-icon>
              {{exercise.target}} |
              {{exercise.kinds}}
            </v-card-title>
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
            :key="custom"
          >
            {{ custom.target }}
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item
            v-for="custom in customs"
            :key="custom"
          >
          <v-list>
            <v-list-item-group
              color="indigo"
            >
              <v-list-item
                v-for="item in custom.list"
                :key="item"
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
          :key="select"
          
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
              tab: null,
              loading: false,
              selected: [],
              model: [0,1],
              dialog: false,
               exercises: [
                 
                ],
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
          deleteExercise(index){
            this.exercises.splice(index,1);
          },
          addExercise(){
            // this.dialog = true
            this.exercises.push({
              target:'상체',
              kinds: '풀업'
            })
          },
          showDialog(){
            this.dialog=true
          },
          addChip(targetName, item){
            if(this.selected.includes(item)){
              
            }
            else{
              //alert(targetName)
              this.selected.push({
                target: targetName,
                kinds: item
              })
              
          
            }
          },
         
          saveDialog(){
            this.dialog=false
            for(let i=0;i<this.selected.length;i++){
              this.exercises.push({target: this.selected[i].target, kinds:this.selected[i].kinds})
            }
            
            this.selected = [];
          }
        }
    }
</script>