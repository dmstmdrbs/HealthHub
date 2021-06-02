<template>
  <div max-width="800px">
    <v-divider></v-divider>
    <v-toolbar elevation="0">
      <v-row align="center" justify="center">
        <v-col align="center">
          <v-btn icon class="ma-2" @click="$refs.calendar.prev()">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-col>
        <v-col align="center" >
          <v-toolbar-title v-if="$refs.calendar">
            {{ $refs.calendar.title }}
          </v-toolbar-title>
        </v-col>
        <v-col align="center">
          <v-spacer></v-spacer>
          <v-btn icon class="ma-2" @click="$refs.calendar.next()">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-toolbar>
    <v-sheet height="80">
      <v-calendar
        ref="calendar"
        :now = "today"
        :value = "today"
        v-model="value"
        @click:date="selectDate"
        :weekdays="weekday" 
        :type="type"
        color="primary"
      ></v-calendar>
    </v-sheet>
  </div>
</template>

<script>
  import {eventBus} from '@/main'
  export default {
    data () {
      return{
        today: new Date(),
        month: '',
        selectedMonth :'',
        type: 'week',
        weekday: [0, 1, 2, 3, 4, 5, 6],
        value: '',
      }
    },
    methods:{
      selectDate(event){ 
        console.log(event.date);
        this.today = event.date;
        eventBus.$emit("selectDate",this.today);
      },
    },
    created(){
      eventBus.$on('updatedDate', (date)=>{
        this.today = date;
        this.value = date;
      })
    }
  }
</script>