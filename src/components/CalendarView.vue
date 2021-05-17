<template>
  <div class="pa-5">
		<v-row>
			<v-col cols="12" md="6" class="mb-4">
				<v-sheet height="500">
					<v-calendar
									ref="calendar"
									:start="start"
									:type="type"
					></v-calendar>
				</v-sheet>
			</v-col>
		</v-row>
  </div>
</template>
<script>
export default {
	data() {
		return{
			start:'',
			type: 'month',
			typeOptions:[
				{text:'Day',value:'day'},
				{text:'Week',value:'week'},
				{text:'Month',value:'month'},
			]
		}
	},
}
</script>