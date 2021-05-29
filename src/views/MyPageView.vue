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
				<v-row>
					<v-col>
						<v-app>
							<v-content>
								<v-btn height="30px" elevation="2" small block @click="showSetDialog">수정</v-btn>
								<v-dialog max-width="500" v-model="setDialog">
									<Dialog header-title="정보 수정" @hide="hideSetDialog" @submit="submitSetDialog">
										<template v-slot:body>
											<v-container>
												<v-row>
												<v-col cols="12" sm="6">
													<h2>신체정보</h2>
													<v-text-field
     								       label="키"
        								  ></v-text-field>
													<v-text-field
     								       label="몸무게"
        								  ></v-text-field>
												</v-col>
													<v-divider vertical></v-divider>
													
													<v-col cols="12" sm="6">
														<h2>1RM</h2>
														<v-text-field
     								       label="스쿼트"
        								  ></v-text-field>
													<v-text-field
     								       label="벤치프레스"
        								  ></v-text-field>
													<v-text-field
     								       label="데드리프트"
        								  ></v-text-field>
													</v-col>
										
									
									</v-row>
											</v-container>

										</template>
										
									</Dialog>
									
								</v-dialog>	
							</v-content>
						</v-app>
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
	import Dialog from '@/components/Dialog.vue'
	export default {
		components: {
			Header, 
			NaviBar,
			Dialog,
		},
		data () {
			return{			
				setDialog:false,
				exerciseDialog:false, 
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
			hideSetDialog(){
        this.setDialog=false;
      }, 
			submitSetDialog(){
				console.log("submit")
					this.hideSetDialog();
						
				},
			showSetDialog(){
				console.log("do")
        this.setDialog=true;
      }, 
    },    
	}
</script>