<template>
	<div>
		<Header></Header>
		<v-divider></v-divider>
		<template>
			<v-container>
				<v-row>
					<v-col v-for="(item,idx) in items" :key="idx">
						<v-card max-width="500">
							<div class="d-flex flex-no-wrap justify-space-between">
								<div style="text-align:center;">
									<v-card-title class="text-h5" v-text="item.header"></v-card-title>
									<v-btn block depressed small text outlined>수정</v-btn>
								</div>
								<v-divider></v-divider>
								<v-col v-for="(content,i) in item.contents" :key="i" >
									<v-card-title v-text="content.title"></v-card-title>
									<v-divider class="mx-2"></v-divider>
									<v-card-text v-text="content.text"></v-card-text>
								</v-col>
							</div>
						</v-card>
					</v-col>
				</v-row>
			</v-container>
		</template>
		<NaviBar></NaviBar>
	</div>
</template>
<script>
import Header from '@/components/Header'
import NaviBar from '@/components/NaviBar.vue'

	export default {
		components: { 
			Header, 
			NaviBar 
		},
		data () {
		return{			
				items: [
					{
						header: '개인 정보',
						contents:[
							{
								title: '이름',
								text:
									`은승균`,
							},
							{
								title: '나이',
								text:
									'24살',
							},
							{
								title: '성별',
								text:
									'남자',
							},
						]						
					},					
					{
						header: '신체 정보',
						contents:[
							{								
								title: '키',
								text:
									'179cm',
							},
							{								
								title: '몸무게',
								text:
									'76kg',
							},
						]
					},
					{
						header: '1RM',
						contents:[
							{
								title: '스쿼트',
								text:
									'140kg',
							},
							{							
								title:
									'벤치프레스',
								text:
									'100kg',
							},
							{
								title: '데드리프트',
								text:
									'150kg',
							},
						]
					},
				],
			}
		},
		methods: {

		}    
	}
</script>