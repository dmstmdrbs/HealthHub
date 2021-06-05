export let recommendedList = [];
let userInfo = {
    weight: 77,
    height: 179,
    sex: '남자',
    oneRM: { squat: 130, bench: 100, dead: 150 },
    weakness: '',
    proficiency: '',
};
let workoutHistory = [{
        date: '2021-05-20',
        mainTarget: '등',
        workouts: [{
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }],
            },
            {
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }],
            },
            {
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }],
            },
            {
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }],
            },
        ],
    },
    {
        date: '2021-05-20',
        mainTarget: '등',
        workouts: [{
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }],
            },
            {
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }],
            },
            {
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }],
            },
            {
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }],
            },
        ],
    },
    {
        date: '2021-05-22',
        mainTarget: '등',
        workouts: [{
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }],
            },
            {
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }],
            },
            {
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }],
            },
            {
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }],
            },
        ],
    },
    {
        date: '2021-05-23',
        mainTarget: '등',
        workouts: [{
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }],
            },
            {
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }],
            },
            {
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }],
            },
            {
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }],
            },
        ],
    },
    {
        date: '2021-05-25',
        mainTarget: '등',
        workouts: [{
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }],
            },
            {
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }],
            },
            {
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }],
            },
            {
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }],
            },
        ],
    },
    {
        date: '2021-05-27',
        mainTarget: '등',
        workouts: [{
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }],
            },
            {
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }],
            },
            {
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }],
            },
            {
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }],
            },
        ],
    },
    {
        date: '2021-05-30',
        mainTarget: '등',
        workouts: [{
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }],
            },
            {
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }],
            },
            {
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }],
            },
            {
                target: '등',
                kinds: '랫풀',
                sets: [{ reps: 10, weight: 60 }],
            },
        ],
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
        ],
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
            { name: '푸쉬업', difficulty: 1 },
        ],
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
            { name: '팬들레이 로우', difficulty: 5 },
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
        ],
    },
    {
        target: '팔',
        list: [
            { name: '덤벨 컬', difficulty: 1 },
            { name: '이지바 컬', difficulty: 2 },
            { name: '케이블 푸쉬 다운', difficulty: 3 },
            { name: '프리처 컬', difficulty: 2 },
            { name: '케이블 컬', difficulty: 2 },
            { name: '라잉 트라이셉스 익스텐션', difficulty: 3 },
            { name: '해머 컬', difficulty: 3 },
        ],
    },
];

function nextMainTarget() {
    let nextMain = '등';

    function getFormatDate() {
        var date = new Date();
        var year = date.getFullYear();
        var month = 1 + date.getMonth();
        mont = month >= 10 ? month : '0' + month;
        var day = date.getDate();
        day = day >= 10 ? day : '0' + day;
        return year + '-' + month + '-' + day;
    }

    function lastWeek() {
        var date = new Date();
        date.setDate(date.getDate() - 7);
        return date;
    }
    //최근 일주일 내에 운동을 했는지 체크
    let today = getFormatDate();
    let lastweek = lastWeek();

    const reversedHistory = workoutHistory.reverse();
    let idx = 0;
    let count = 0;
    let lastTarget = '';
    let freq = {
        chest: 0,
        leg: 0,
        back: 0,
    };
    reversedHistory.forEach(history => {
        if (idx > 7 && count === 0) {
            return false;
        }
        if (history.date < today && history.date > lastweek) {
            count++;
            if (count === 1) {
                lastTarget = history.mainTarget;
            }
            if (history.mainTarget === '가슴') {
                freq.chest++;
            } else if (history.mainTarget === '등') {
                freq.back++;
            } else if (history.mainTarget === '하체') {
                freq.leg++;
            }
        }
        idx++;
    });
    //가슴->등->하체 순서
    //가장 많이한 것 제외
    //case 1: 최근 일주일 내에 운동을 하지 않았을 때
    if (count === 0) {
        //가슴 등 하체
        if (
            userInfo.weakness === '가슴' ||
            userInfo.weakness === '등' ||
            userInfo.weakness === '하체'
        ) {
            nextMain = userInfo.weakness;
        } else {
            nextMain = '가슴';
        }
    }
    //case 2: 최근 일주일 내에 운동을 했을 때
    else {
        //최근 운동이 있을 때
        //case 1: 빈도가 같을 때 -> case 1-1: 전날 했던 것 제외하고 다음 것 or 약점 부위
        //case 2: 빈도가 다를 때 -> 최하 빈도 부위
        if (freq.back === freq.chest && freq.back == freq.chest) {
            //빈도가 모두 같을 때
            if (lastTarget === userInfo.weakness) {
                if (lastTarget === '가슴' && userInfo.weakness === '가슴') {
                    if (userInfo.sex === '여자') {
                        if ((freq.back - freq.chest > 2) | (freq.leg - freq.chest > 2)) {
                            nextMain = '가슴';
                        } else {
                            if (freq.back < freq.chest && freq.leg < freq.chest) {
                                if (freq.back < freq.leg) {
                                    nextMain = '등';
                                } else {
                                    nextMain = '하체';
                                }
                            }
                        }
                    } else {
                        //남자
                        nextMain = '등';
                    }
                } else {
                    nextMain = '가슴';
                }
            } else {
                if (lastTarget === '등') {
                    nextMain = '하체';
                } else if (lastTarget === '하체') {
                    nextMain = '가슴';
                } else {
                    nextMain = '등';
                }
            }
        } else {
            //최하 빈도 부위
            //최하 빈도 부위가 lastTarget면 그 다음 종목
            if (freq.back < freq.chest) {
                if (freq.back < freq.leg) {
                    if (lastTarget === '등') {
                        nextMain = '하체';
                    } else nextMain = '등';
                } else {
                    if (lastTarget === '하체') {
                        nextMain = '등';
                    } else nextMain = '하체';
                }
            } else if (freq.chest < freq.back) {
                if (freq.chest < freq.leg) {
                    if (lastTarget === '가슴') {
                        nextMain = '등';
                    } else nextMain = '가슴';
                } else {
                    if (lastTarget === '하체') {
                        nextMain = '가슴';
                    } else nextMain = '하체';
                }
            } else if (freq.leg < freq.back) {
                if (freq.leg < freq.chest) {
                    if (lastTarget === '하체') {
                        nextMain = '가슴';
                    } else nextMain = '하체';
                } else {
                    if (lastTarget === '가슴') {
                        nextMain = '등';
                    } else nextMain = '가슴';
                }
            }
        }
    }

    return nextMain;
}
function getShoulderWeight() {
    let weight = 0;
    switch(userInfo.sex){
        case 1:
            //남자 기준
            switch(userInfo.proficiency){
                case 1:
                    if(userInfo.weight < 52){
                        weight = 20;
                    }
                    else if(userInfo.weight < 60){
                        weight = 25;
                    }
                    else if(userInfo.weight < 90){
                        weight = 30;
                    }
                    else {
                        weight = 35;
                    }
                    break;
                case 2:
                    if(userInfo.weight < 52){
                        weight = 20;
                    }
                    else if(userInfo.weight < 60){
                        weight = 30;
                    }
                    else if(userInfo.weight < 90){
                        weight = 35;
                    }
                    else {
                        weight = 40;
                    }
                    break;
                case 3:
                    if(userInfo.weight < 60){
                        weight = 40;
                    }
                    else if(userInfo.weight < 90){
                        weight = 50;
                    }
                    else {
                        weight = 55;
                    }
                    break;
            }
            break;
        case 2:
            // 여자 기준
            switch(userInfo.proficiency){
                case 1:
                    if(userInfo.weight < 52){
                        weight = 20;
                    }
                    else if(userInfo.weight < 60){
                        weight = 25;
                    }
                    else {
                        weight = 30;
                    }
                    break;
                case 2:
                    if(userInfo.weight < 44){
                        weight = 20;
                    }
                    else if(userInfo.weight < 52){
                        weight = 25;
                    }
                    else if(userInfo.weight < 60){
                        weight = 30;
                    }
                    else {
                        weight = 35;
                    }
                    break;
                case 3:
                    if(userInfo.weight < 52){
                        weight = 35;
                    }
                    else if(userInfo.weight < 60){
                        weight = 40;
                    }
                    else {
                        weight = 45;
                    }
                    break;
            }
            break;
    }

    
    return weight;
}

function getArmWeight(){
    let weight = 0;
    switch(userInfo.sex){
        case 1:
            //남자 기준
            switch(userInfo.proficiency){
                case 1:
                    weight = 8;
                    break;
                case 2:
                    weight = 12;
                    break;
                case 3:
                    weight = 16;
                    break;
            }
            break;
        case 2:
            // 여자 기준
            switch(userInfo.proficiency){
                case 1:
                    weight = 5;
                case 2:
                    weight = 8;
                    break;
                case 3:
                    weight = 10;
                    break;
            }
            break;
    }
}
function getSets(nextTarget, targetIdx) {
    let sets = [];
    const max_set = 5;
    let weight = 0;
    let reps = 0;
    
    for (var i = 0; i < max_set; i++) {
        switch (nextTarget) {
            case '하체':
                oneRM = userInfo.oneRM[0];
                switch (targetIdx) {
                    case (1, 2, 3, 4, 9):
                        weight = oneRM;
                        if (i < 2) weight = weight * (0.5 + 0.2 * i);
                        else if (i < 4) weight = weight * 0.8;
                        else weight = weight * 0.7;
                        break;
                    case (7, 8, 11, 12):
                        weight = oneRM * 0.7;
                        if (i < 3) weight = weight * (0.7 + 0.1 * i);
                        else if (i == 4) weight = weight * 0.8;
                        break;
                    case (5, 6, 10, 13):
                        weight = oneRM / 2;
                        if (i < 3) weight = weight * (0.7 + 0.1 * i);
                        else if (i == 4) weight = weight * 0.8;
                        break;
                }
                break;
            case '가슴':
                oneRM = userInfo.oneRM[1];
                switch (targetIdx) {
                    case 1:
                        weight = oneRM;
                        if (i < 2) weight = weight * (0.5 + 0.2 * i);
                        else if (i < 4) weight = weight * 0.8;
                        else weight = weight * 0.7;
                        break;
                    case (2, 3, 4, 5, 6, 7, 10, 11):
                        weight = oneRM * 0.7;
                        if (targetIdx == 4 || targetIdx == 5) weight = weight / 2;
                        if (i < 3) weight = weight * (0.7 + 0.1 * i);
                        else if (i == 4) weight = weight * 0.8;
                        break;
                    case (9, 12):
                        weight = oneRM * 0.4;
                        if (targetIdx == 4 || targetIdx == 5) weight = weight / 2;
                        if (i < 3) weight = weight * (0.7 + 0.1 * i);
                        else if (i == 4) weight = weight * 0.8;
                        break;
                    case 8:
                        if (oneRM > 100) weight = 10;
                        else weight = 5;
                }
                break;
            case '등':
                oneRM = userInfo.oneRM[2];
                switch (targetIdx) {
                    case (1, 7):
                        weight = oneRM;
                        if (i < 2) weight = weight * (0.5 + 0.2 * i);
                        else if (i < 4) weight = weight * 0.8;
                        else weight = weight * 0.7;
                        break;
                    case (2, 4, 5, 6, 8, 9, 10, 11):
                        weight = oneRM * 0.7;
                        if (targetIdx == 4 || targetIdx == 5) weight = weight / 2;
                        if (i < 3) weight = weight * (0.7 + 0.1 * i);
                        else if (i == 4) weight = weight * 0.8;
                        break;
                }
                break;
            case '어깨':
                weight = getShoulderWeight();
                switch(targetIdx) {
                    case 0:
                    // 바벨
                        if (i < 2) weight = weight * (0.7 + 0.1 * i);
                        else if (i < 4) weight = weight * 0.8;
                        else weight = weight * 0.7;
                        break;
                        
                    case(1, 2, 3, 7):
                    // 덤벨
                        if (i < 2) weight = weight * (0.5 + 0.2 * i);
                        else if (i < 4) weight = weight * 0.8;
                        else weight = weight * 0.7;
                        break;
                    case(4, 5, 6, 8, 9):
                    // 머신
                        if (i < 3) weight = weight * (0.7 + 0.1 * i);
                        else if (i == 4) weight = weight * 0.8;
                        break;

                }
            case '이두':
                switch(targetIdx) {
                    case (0, 6):
                        // 덤벨
                        weight = getArmWeight();

                    case(1, 3, 4, 5):
                        // 바벨
                    case 2:
                        // 케이블

                }
            
        }
        if (i < 3) reps = 10 - 2 * i;
        if (i == 4) reps = 7;
        sets.append({ reps, weight });
    }
    return sets;
}

/*function getWorkout(target, difficulty, proficiency) {
    //랜덤으로 숙련도와 그에 따른 적합한 운동 난이도를 따져서 운동을 뽑는다.
    let workout = {};
    
    //--------- logic ----------

    sets = getSets();

    //--------- logic ----------
    return workout;
}*/

function makeList() {
    let maxNum;
    let nextMain = nextMainTarget();
    let list = [];
    let wlist = [];
    let idxlist = [];
    var i;
    //logic
    maxNum = userInfo.proficiency + 2

    switch (nextMain) {
        case '하체':
            wlist = workouts[0].list
        case '가슴':
            wlist = workouts[1].list
        case '등':
            wlist = workouts[2].list
    }
    for (i = 0; i < length(wlist); i++) {
        if (wlist[i].difficulty <= maxNum) {
            idxlist.append(i)
        }
    }

    let idx = Math.floor(Math.random() * length(wlist));
    for (i = 0; i < 4; i++) {
        while (idxlist.includes(idx)) {
            idx = Math.floor(Math.random() * length(wlist))
        }
        idxlist.append(idx);
        list.append(getsets(nextMain, idx));
    }
    nextMain = '어깨'
    idx = Math.floor(Math.random() * length(workouts[3].list))
    list.append(getsets(nextMain, idx))
    nextMain = '팔'
    idx = Math.floor(Math.random() * length(workouts[4].list))
    list.append(getsets(nextMain, idx))
    return list;
}
export function recommend(value) {
    recommendedList = makeList();
    console.log(recommendedList);
    return recommendedList;
}