<template>
  <v-row>
    <v-col>
      <v-sheet height="500">
        <v-calendar
          :now="today"
          :value="today"
          color="primary"
          @click="test()"
        >
          <template v-slot:day="{ past, date }">
            <v-row
              class="fill-height"
            >
              <template v-if="past && tracked[date]">
                <v-sheet
                  v-for="(percent, i) in tracked[date]"
                  :key="i"
                  :title="category[i]"
                  :color="colors[i]"
                  :width="`${percent}%`"
                  height="100%"
                  tile
                ></v-sheet>
              </template>
            </v-row>
          </template>
        </v-calendar>
      </v-sheet>
    </v-col>
  </v-row>
</template>
<script>
// import { SVGGraph, CanvasGraph, StrGraph } from 'calendar-graph';

  export default {
    data: () => ({
        
      today: new Date(),
      tracked: {
        '2021-03-27' :[100],
        '2021-03-29': [100]
       
      },
      colors: ['#1867c0'],
      category: ['운동 완료!'],
    }),
    methods:{

    }
  }
</script>