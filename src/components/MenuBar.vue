<template>
  <div class="ma-12 pa-12">
    <v-card>
      <v-navigation-drawer
        permanent
        expand-on-hover
      >
        <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="title">
                {{last_name}} {{first_name}}
              </v-list-item-title>
              <v-list-item-title>{{uid}}</v-list-item-title>
              <v-list-item-subtitle>{{uemail}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider>
        </v-divider>

        <v-list
          nav
          dense
        >
        <v-list-item link>
              <v-list-item-icon>
                  <v-icon>mdi-map</v-icon>
              </v-list-item-icon>
              <v-list-item-title>지역 선택</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-text-box-search-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>지역 모임 게시판</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account-details-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>내 모임</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-clipboard-text-multiple-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>유저 게시판</v-list-item-title>
          </v-list-item>
          
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>
<script>
  export default {
      data(){
            return{
                uid:'dmstmdrbs',
                first_name:'은',
                last_name:'승균',
                uemail:'dmstmdrbs@naver.com'
            }  
        },
        methods:{
            getUserInfo(){

            }
        }
    //
  }
</script>