<template>
    <div>
        <h1>{{hometitle}}</h1>
        <CalendarHeatmap
            tooltip-unit="stars"
            :values="[{ date: '2018-9-22', count: 1 }]"
            :range-color="['#E7E6E6', '#BDBBBB', '#c0ddf9', '#73b3f3', '#3886e1', '#17459e']"
            :endDate=endDate>
        </CalendarHeatmap>
            
        <!-- <calendar-heatmap 
            :values="[{date:'2021-1-22', count:5},]"
            :end-date="2021-12-31" /> -->
    </div>

</template>
<script>
// import CalenderComponents from './components/Calender.vue'
  import { CalendarHeatmap } from 'vue-calendar-heatmap'

    export default{
        components:{
            // CalenderComponents,
            CalendarHeatmap
        },
        data(){
            return{
                hometitle : "캘린더",
                heatmapDate: [
                    {date:'2018-9-22', count:5},
                //    {date:'2018-9-23', count:4},
                //    {date:'2018-9-24', count:1},
                //    {date:'2018-9-25', count:1},
                //    {date:'2018-9-26', count:2},
                //    {date:'2018-9-27', count:0},
                //    {date:'2018-9-28', count:2},
                //    {date:'2018-9-29', count:3},
                //    {date:'2018-9-30', count:4},
                //    {date:'2018-10-1', count:5},
                //    {date:'2018-10-2', count:5},
                //    {date:'2018-10-3', count:3}
                ],
                endDate : new Date('2018-12-31')
            }
        }
    }
</script>
