import { random } from 'core-js/core/number';

export let recommendedList = [];
let userInfo = {
    weight: 77,
    height: 179,
    sex = '남자',
    oneRM = { squat: 130, bench = 100, dead = 150 },
    weakness = "",
    proficiency = "",
};
let workoutHistory = [{
        date: "2021-05-20",
        mainTarget: "등",
        workouts: [{
                target: '등',
                kinds: '랫풀',
                sets: [
                    { reps: 10, weight: 60 }
                ]
            },
            {
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }]
            },
            {
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }]
            },
            {
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }]
            },
        ]
    },

];
let workouts = [{
        target: '하체',
        list: [
            { name: '바벨 백스쿼트', difficulty: 3 },
            { name: '컨벤셔널 데드리프트', difficulty: 3 },
            { name: '프론트 스쿼트', difficulty: 4 },
            { name: '브이 스쿼트', difficulty: 3 },
            { name: '스미스 런지', difficulty: 3 },
            { name: '불가리안 스쿼트', difficulty: 5 },
            { name: '레그 익스텐션', difficulty: 2 },
            { name: '레그 컬', difficulty: 2 },
            { name: '레그 프레스', difficulty: 2 },
            { name: '이너 타이 머신', difficulty: 2 },
            { name: '핵 스쿼트', difficulty: 3 },
            { name: '굿모닝 스쿼트', difficulty: 5 },
            { name: '힙 쓰러스트', difficulty: 3 },
        ]
    },
    {
        target: '가슴',
        list: [
            { name: '벤치프레스', difficulty: 3 },
            { name: '인클라인 벤치프레스', difficulty: 3 },
            { name: '디클라인 벤치 프레스', difficulty: 5 },
            { name: '덤벨 벤치프레스', difficulty: 3 },
            { name: '인클라인 덤벨 벤치프레스', difficulty: 3 },
            { name: '딥스', difficulty: 3 },
            { name: '체스트 프레스 머신', difficulty: 2 },
            { name: '덤벨 플라이', difficulty: 3 },
            { name: '팩 덱 플라이 머신', difficulty: 3 },
            { name: '케이블 플라이', difficulty: 3 },
            { name: '덤벨 풀 오버', difficulty: 5 },
            { name: '푸쉬업', difficulty: 1 }
        ]
    },
    {
        target: '등',
        list: [
            { name: '루마니안 데드리프트', difficulty: 3 },
            { name: '랫 풀 다운', difficulty: 2 },
            { name: '풀 업', difficulty: 2 },
            { name: '원 암 덤벨 로우', difficulty: 2 },
            { name: '바벨 로우', difficulty: 3 },
            { name: '티 바 로우', difficulty: 4 },
            { name: '케이블 롱 풀', difficulty: 3 },
            { name: '와이드 풀 다운', difficulty: 3 },
            { name: '스트레이트 암 풀 다운', difficulty: 4 },
            { name: '프론트 로우', difficulty: 4 },
            { name: '팬들레이 로우', difficulty: 5 }
        ],
    },
    {
        target: '어깨',
        list: [
            { name: '오버 헤드 프레스', difficulty: 3 },
            { name: '덤벨 숄더 프레스', difficulty: 2 },
            { name: '사이드 레터럴 레이즈', difficulty: 1 },
            { name: '벤트오버 레터럴 레이즈', difficulty: 2 },
            { name: '숄더 프레스 머신', difficulty: 2 },
            { name: '리버스 팩 덱 플라이', difficulty: 3 },
            { name: '케이블 페이스 풀 오버', difficulty: 4 },
            { name: '업라이트 로우', difficulty: 5 },
            { name: '케이블 레터럴 레이즈', difficulty: 4 },
            { name: '리버스 케이블 플라이', difficulty: 4 },
        ]
    },
    {
        target: '이두',
        list: [
            { name: '덤벨 컬', difficulty: 1 },
            { name: '이지바 컬', difficulty: 2 },
            { name: '케이블 푸쉬 다운', difficulty: 3 },
            { name: '프리처 컬', difficulty: 2 },
            { name: '케이블 컬', difficulty: 2 },
            { name: '라잉 트라이셉스 익스텐션', difficulty: 3 },
            { name: '해머 컬', difficulty: 3 },
        ],
    }
];



function nextMainTarget() {
    let nextMain = "등"
        //logic

    //logic
    return nextMain
}

function getReps() {

}

function getWeight(idx) {
    recommendweight: 0
    oneRM: 0
    let nextTarget = nextMainTarget();
    switch (nextTarget) {
        case '하체':
            oneRM = userInfo.oneRM[0]
            break
        case '가슴':
            oneRM = userInfo.oneRM[1]
            break
        case '등':
            oneRM = userInfo.oneRM[2]
            break
    }

}

function getSets() {
    sets: []
    const max_set = 5;
    for (var i = 0; i < max_set; i++) {
        switch (nextTarget) {
            case '하체':
                oneRM = userInfo.oneRM[0]
                break
            case '가슴':
                oneRM = userInfo.oneRM[1]
                break
            case '등':
                oneRM = userInfo.oneRM[2]
                break
        }
    }

}

function checkFreq() {

}

function getWorkout(target, difficulty, proficiency) {
    //랜덤으로 숙련도와 그에 따른 적합한 운동 난이도를 따져서 운동을 뽑는다.
    let workout = {};

    //--------- logic ----------

    sets = getSets();

    //--------- logic ----------
    return workout;
}

function makeList() {
    let maxNum
    let nextMain = nextMainTarget();
    let list = [];
    //logic

    //return 만들어진 운동 리스트
    return list;
}
export function recommend(value) {
    recommendedList = makeList();
    console.log(recommendeList);
    return recommendedList;
}