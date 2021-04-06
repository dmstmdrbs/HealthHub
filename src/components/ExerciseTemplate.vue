<template>
  <div>
    <!-- <v-card
      class="mx-auto"
      max-width="400"
      
    >
      <v-card-title>
        <v-icon
          large
          left
        >
          mdi-alert-circle-outline
        </v-icon>
        <span class="title font-weight-light">{{target}} | {{kinds}}</span>
      </v-card-title>
      <v-container>
        <v-row>
          <v-btn
            elevation = "2"
            outlined
            text
            block>
          MEMO
          </v-btn>
        </v-row>

        

        <v-row justify="center">
          <v-col cols="auto">
              <v-btn
                v-on:click = "addSet">
                <v-icon>mdi-plus</v-icon>
                <span>세트 추가</span>
              </v-btn>
          </v-col>
          
        </v-row>
      </v-container>
    </v-card> -->

  </div>
</template>

<script>
 export default{
        data(){
            
            return{
                target : '하체',
                kinds :'레그 컬',
                exercises: [
                  { 
                    target: '하체',
                    kinds: '레그컬',

                  },
                  { 
                    target: '상체',
                    kinds: '벤치 프레스',
                    
                  },
                ]
            }
        },
        methods: {
          addSet(){

          }
        }

    }
</script>