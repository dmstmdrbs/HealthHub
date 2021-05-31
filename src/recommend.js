export let recommendedList=[];
let userInfo={
                weight:0.0, 
                height:0.0,
                sex='', 
                oneRM={squat:0,bench=0,dead=0},
                weakness="",
                proficiency="",
                };
let workoutHistoy=[
        {
          target: '하체',
          list:[
            {name:'바벨 백스쿼트',difficulty:3},
            {name:'컨벤셔널 데드리프트',difficulty:3},
            {name:'프론트 스쿼트',difficulty:4},
            {name:'브이 스쿼트',difficulty:3},
            {name:'스미스 런지',difficulty:3},
            {name:'불가리안 스쿼트',difficulty:5},
            {name:'레그 익스텐션',difficulty:2},
            {name:'레그 컬',difficulty:2},
            {name:'레그 프레스',difficulty:2},
            {name:'이너 타이 머신',difficulty:2},
            {name:'핵 스쿼트',difficulty:3},
            {name:'굿모닝 스쿼트',difficulty:4},
            {name:'힙 쓰러스트',difficulty:3},
          ]
        },
        {
          target: '가슴',
          list:[
            {name:'벤치프레스',difficulty:3}
            {name:'인클라인 벤치프레스',difficulty:3}
            {name:'디클라인 벤치 프레스',difficulty:4}
            {name:'덤벨 벤치프레스',difficulty:3}
            {name:'인클라인 덤벨 벤치프레스',difficulty:3}
            {name:'딥스',difficulty:3}
            {name:'체스트 프레스 머신',difficulty:2}
            {name:'덤벨 플라이',difficulty:3}
            {name:'팩 덱 플라이 머신',difficulty:3}
            {name:'케이블 플라이',difficulty:3}
            {name:'덤벨 풀 오버',difficulty:5}
            {name:'푸쉬업',difficulty:1}                
          ]
        },
        {
          target: '등',
          list:[
            '루마니안 데드리프트',
            '랫 풀 다운',
            '풀 업',
            '원 암 덤벨 로우',
            '바벨 로우',
            '티 바 로우',
            '케이블 롱 풀',
            '와이드 풀 다운',
            '스트레이트 암 풀 다운',
            '프론트 로우',
            '팬들레이 로우',
          ],
        }
        ,
        {
          target: '어깨',
          list:[
            '오버 헤드 프레스',
            '덤벨 숄더 프레스',
            '사이드 레터럴 레이즈',
            '벤트오버 레터럴 레이즈',
            '숄더 프레스 머신',
            '리버스 팩 덱 플라이',
            '케이블 페이스 풀 오버',
            '업라이트 로우',
            '케이블 레터럴 레이즈',
            '리버스 케이블 플라이'
          ]
        },
        {
          target: '이두',
          list:[
            '덤벨 컬',
            '이지바 컬',
            '케이블 푸쉬 다운',
            '프리처 컬',
            '케이블 컬',
            '라잉 트라이셉스 익스텐션',
            '해머 컬',
          ],
        }
    ];
let workouts=[

];


export function recommend(value){
    recommendedList=[
        {
        target : '등',
        kinds:'랫풀',
        sets:[{reps:10, weight:60}]
        },
        {
            target : '등',
            kinds:'랫풀',
            sets:[{reps:10, weight:60}]
        },
        {
            target : '등',
            kinds:'랫풀',
            sets:[{reps:10, weight:60}]
        },
        {
            target : '등',
            kinds:'랫풀',
            sets:[{reps:10, weight:60}]
        }
    ];
    console.log(recommendedList);
    return recommendedList;
}
