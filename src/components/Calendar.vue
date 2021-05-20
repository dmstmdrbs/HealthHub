<template>
  <div>
    <v-sheet
      tile
      height="50"
      class="d-flex"
    >
      <v-btn icon class="ma-2" @click="$refs.calendar.prev()">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon class="ma-2" @click="$refs.calendar.next()">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-sheet>
    <v-sheet height="80">
      <v-calendar
        :now = "today"
        ref="calendar"
        v-model="value"
        @click:date="open"
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
        month:'',
        type: 'week',
        weekday: [0, 1, 2, 3, 4, 5, 6],
        value: '',
      }
    },
    methods:{
      open(event){ 
        console.log(event.date);
        this.today = event.date;
        eventBus.$emit("selectDate",this.today);
      },
    },
    created(){
      eventBus.$on('updatedDate', (date)=>{
        this.today = date;
      })
    }
  }
</script>