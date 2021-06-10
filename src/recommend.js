import { user } from '@/user.js';

export let recommendedList = [];
let userInfo = '';
export let workoutHistory = [];
let workouts = [
  {
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

function getMainTarget(workoutList) {
  console.log(`here is getMainTarget`);
  let length = workoutList.length;
  let targetList = {
    chest: 0,
    back: 0,
    leg: 0,
  };
  console.log(workoutList[0]);
  for (var i = 0; i < length; i++) {
    let exerciseList = workoutList[i].exercises;
    let exercise;
    for (var j = 0; j < exerciseList.length; j++) {
      exercise = exerciseList[j];
      console.log(`for문 안에 exercise : ${exercise}`);
      if (exercise.target === '가슴') {
        targetList.chest++;
      } else if (exercise.target === '등') {
        targetList.back++;
      } else if (exercise.target === '하체') {
        targetList.leg++;
      }
    }
  }
  console.log(targetList);
  console.log(`here is end of getMainTarget`);
  return targetList;
}

function getLastTarget(workoutList) {
  console.log(`here is getLastTarget`);
  let length = workoutList.length;
  if (length == 0) {
    return null;
  }

  let targetList = {
    chest: 0,
    back: 0,
    leg: 0,
    armShoulder: 0,
  };
  let exercises = workoutList[0].exercises;
  console.log(exercises);
  let lastTarget = exercises[0].target;
  return lastTarget;
}

function nextMainTarget() {
  let nextMain = '';
  console.log(`here is nextMainTarget()`);
  const reversedHistory = workoutHistory.reverse();
  console.log(reversedHistory);
  let count = reversedHistory.length;
  let lastTarget = '';
  let freq = {
    chest: 0,
    leg: 0,
    back: 0,
  };
  if (count == 0) {
    nextMain = userInfo.weak;
    return nextMain;
  }
  freq = getMainTarget(reversedHistory);
  lastTarget = getLastTarget(reversedHistory);
  if (lastTarget === '가슴') {
    nextMain = '등';
    if (freq.back > freq.chest && freq.back > freq.leg) {
      nextMain = '하체';
    }
    return nextMain;
  } else if (lastTarget === '등') {
    nextMain = '하체';
    if (freq.leg > freq.back && freq.leg > freq.chest) {
      nextMain = '가슴';
    }
    return nextMain;
  } else if (lastTarget === '하체') {
    nextMain = '가슴';
    if (freq.chest > freq.back && freq.chest > freq.leg) {
      nextMain = '등';
    }
    return nextMain;
  }
  // console.log(`lastTarget : ${lastTarget}`);
  // if (lastTarget === null) {
  //   lastTarget = userInfo.weak;
  // }
  // count = workoutHistory.length;
  // console.log(`last Target : ${lastTarget}`);
  // console.log(`${freq.chest} ${freq.back} ${freq.leg}`);
  // var minimum = Math.min(freq.chest, freq.back, freq.leg);
  // var maximum = Math.max(freq.chest, freq.back, freq.leg);

  // if (maximum - minimum > 4) {
  //   if (minimum === freq.chest) {
  //     return '가슴';
  //   } else if (minimum === freq.back) {
  //     return '등';
  //   } else {
  //     return '하체';
  //   }
  // }
  // if (lastTarget === '가슴') {
  //   if (userInfo.weak !== '가슴') {
  //     if (freq.leg > freq.back) {
  //       nextMain = '등';
  //     } else {
  //       nextMain = '하체';
  //     }
  //   } else {
  //     nextMain = '등';
  //   }
  // } else if (lastTarget === '등') {
  //   if (userInfo.weak !== '등') {
  //     if (freq.chest > freq.leg) {
  //       nextMain = '하체';
  //     } else {
  //       nextMain = '가슴';
  //     }
  //   } else {
  //     nextMain = '하체';
  //   }
  // } else {
  //   if (userInfo.weak !== '하체') {
  //     if (freq.chest > freq.back) {
  //       nextMain = '등';
  //     } else {
  //       nextMain = '가슴';
  //     }
  //   } else {
  //     nextMain = '가슴';
  //   }
  // }
  // console.log('here is end of nextMainTarget');
  return nextMain;
}

function getShoulderWeight() {
  console.log('here is get Shoulder weight');

  let bodyWeight = parseInt(userInfo.weight);
  console.log(`bodyWeight : ${bodyWeight}`);
  let weight = 0;
  let proficiency = userInfo.proficiency;
  let sex = userInfo.sex;
  switch (sex) {
    case '남자':
      //남자 기준
      if (proficiency == 1) {
        if (bodyWeight < 52) {
          weight = 20;
        } else if (bodyWeight < 60) {
          weight = 25;
        } else if (bodyWeight < 90) {
          weight = 30;
        } else {
          weight = 35;
        }
      } else if (proficiency == 2) {
        if (bodyWeight < 52) {
          weight = 20;
        } else if (bodyWeight < 60) {
          weight = 30;
        } else if (bodyWeight < 90) {
          weight = 35;
        } else {
          weight = 40;
        }
      } else {
        if (bodyWeight < 60) {
          weight = 40;
        } else if (bodyWeight < 90) {
          weight = 50;
        } else {
          weight = 55;
        }
      }
      break;
    case '여자':
      // 여자 기준
      if (proficiency == 1) {
        if (bodyWeight < 52) {
          weight = 20;
        } else if (bodyWeight < 60) {
          weight = 25;
        } else {
          weight = 30;
        }
      } else if (proficiency == 2) {
        if (bodyWeight < 44) {
          weight = 20;
        } else if (bodyWeight < 52) {
          weight = 25;
        } else if (bodyWeight < 60) {
          weight = 30;
        } else {
          weight = 35;
        }
      } else {
        if (bodyWeight < 52) {
          weight = 35;
        } else if (bodyWeight < 60) {
          weight = 40;
        } else {
          weight = 45;
        }
      }
      break;
  }
  console.log(`어깨 중량 리턴 : ${weight}`);
  return weight;
}

function getArmWeight() {
  let weight = 0;
  switch (userInfo.sex) {
    case '남자':
      //남자 기준
      if (userInfo.proficiency == 1) {
        weight = 8;
      } else if (userInfo.proficiency == 2) {
        weight = 12;
      } else {
        weight = 16;
      }
      break;
    case '여자':
      // 여자 기준
      if (userInfo.proficiency == 1) {
        weight = 5;
      } else if (userInfo.proficiency == 2) {
        weight = 8;
      } else {
        weight = 10;
      }
      break;
  }
  return weight;
}

function getSets(nextTarget, targetIdx) {
  console.log('here is getSets');

  // console.log(nextTarget, targetIdx);
  let sets = [];
  const max_set = 5;
  let weight = 0;
  let reps = 0;
  let oneRM = 0;

  for (var i = 0; i < max_set; i++) {
    switch (nextTarget) {
      case '하체':
        oneRM = userInfo.squat;

        switch (targetIdx) {
          case 0:
          case 1:
          case 2:
          case 3:
          case 8:
            weight = oneRM;
            if (i < 2) weight = weight * (0.5 + 0.2 * i);
            else if (i < 4) weight = weight * 0.8;
            else weight = weight * 0.7;
            break;
          case 6:
          case 7:
          case 10:
          case 11:
            weight = oneRM * 0.7;
            if (i < 3) weight = weight * (0.7 + 0.1 * i);
            else if (i == 4) weight = weight * 0.8;
            break;
          case 4:
          case 5:
          case 9:
          case 12:
            weight = oneRM / 2;
            if (i < 3) weight = weight * (0.7 + 0.1 * i);
            else if (i == 4) weight = weight * 0.8;
            break;
          default:
        }
        break;
      case '가슴':
        oneRM = userInfo.bench;
        switch (targetIdx) {
          case 0:
            weight = oneRM;
            if (i < 2) weight = weight * (0.5 + 0.2 * i);
            else if (i < 4) weight = weight * 0.8;
            else weight = weight * 0.7;
            break;
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 9:
            weight = oneRM * 0.7;
            if (targetIdx === 1 || targetIdx == 2) weight = -6.6 + 0.82 * oneRM;
            if (targetIdx == 3 || targetIdx == 4 || targetIdx == 9) weight = weight / 2;
            if (i < 3) weight = weight * (0.7 + 0.1 * i);
            else if (i == 4) weight = weight * 0.8;
            break;
          case 10:
            weitght = oneRM / 3;
            if (i < 3) weight = weight * (0.7 + 0.1 * i);
            else if (i == 4) weight = weight * 0.8;
            break;
          case 8:
          case 7:
            if (oneRM > 100) weight = 10;
            else weight = 5;
            break;
        }
        break;
      case '등':
        oneRM = userInfo.dead;
        switch (targetIdx) {
          case 0:
          case 6:
            weight = oneRM;
            if (i < 2) weight = weight * (0.5 + 0.2 * i);
            else if (i < 4) weight = weight * 0.8;
            else weight = weight * 0.7;
            break;
          case 1:
          case 4:
          case 5:
          case 8:
          case 10:
            weight = oneRM * 0.7;
            if (i < 3) weight = weight * (0.7 + 0.1 * i);
            else if (i == 4) weight = weight * 0.8;
            break;
          case 3:
          case 7:
          case 9:
            weight = oneRM * 0.5;
            if (targetIdx == 3 || targetIdx == 9) weight = weight / 2;
            if (i < 3) weight = weight * (0.7 + 0.1 * i);
            else if (i == 4) weight = weight * 0.8;
            break;
        }
        break;
      case '어깨':
        weight = getShoulderWeight();
        console.log(`어깨 중량 : ${weight}`);
        switch (targetIdx) {
          case 0:
          case 1:
            // 프레스
            weight = weight * (0.6 + 0.05);
            break;
          case 2:
            // 사이드 레터럴 레이즈
            if(userInfo.proficiency == 1){
              weight = 5
            }
            else if(userInfo.proficiency == 2){
              weight = 8;
            }
            else{
              weight = 10;
            }
            break;
          case 3:
          case 7:
            // 덤벨
            if (i < 2) weight = weight * (0.5 + 0.2 * i);
            else if (i < 4) weight = weight * 0.8;
            else weight = weight * 0.7;
            break;
          case 4:
          case 5:
          case 6:
          case 8:
          case 9:
            // 머신
            if (i < 3) weight = weight * (0.7 + 0.1 * i);
            else if (i == 4) weight = weight * 0.8;
            break;
        }
        break;
      case '팔':
        weight = getArmWeight();
        switch (targetIdx) {
          case 0:
          case 6:
            // 덤벨
            if (i < 2) weight = weight * (0.7 + 0.2 * i);
            else if (i == 4) weight = weight * 0.8;
            break;
          case 1:
          case 3:
          case 4:
          case 5:
            // 바벨
            if (targetIdx === 5) weight = weight * 2.5;
            else weight = weight * 2;

            if (i < 2) weight = weight * (0.7 + 0.1 * i);
            else if (i == 4) weight = weight * 0.8;
            break;
          case 2:
            // 케이블
            weight = weight * 6;
            if (i < 2) weight = weight * (0.7 + 0.1 * i);
            else if (i < 4) weight = weight * 0.85;
            else weight = weight * 0.8;
            break;
        }
        console.log(weight);
    }

    if (i < 3) reps = 10 - 2 * i;
    if (i == 4) reps = 7;
    if (nextTarget === '어깨') {
      if (targetIdx === 2) {
        if (i < 3) reps = 18 - i;
        else reps = 17;
      } else if (targetIdx === 0 || targetIdx === 1) {
        if (i < 2) reps = 8 + i;
        else reps = 10;
      }
    }
    weight = parseInt(weight);
    sets.push({ reps, weight });
  }

  console.log('here is end of getSets - sets');
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
  let list = [
    // {
    //   target:null,
    //   kinds:null,
    //   sets:[
    //     {weight:null, reps:null}
    //   ]
    // }
  ];
  let wlist = [];
  let idxlist = [];
  let nextidx = [];
  var i;
  let sets;
  let target;
  let kinds;
  let kIdx;

  //logic
  maxNum = userInfo.proficiency + 2;

  switch (nextMain) {
    case '하체':
      wlist = workouts[0].list;
      kIdx = 0;
      break;
    case '가슴':
      wlist = workouts[1].list;
      kIdx = 1;
      break;
    case '등':
      wlist = workouts[2].list;
      kIdx = 2;
      break;
  }
  for (i = 0; i < wlist.length; i++) {
    if (wlist[i].difficulty <= maxNum) {
      idxlist.push(i);
    }
  }

  let idx = Math.floor(Math.random() * idxlist.length);
  for (i = 0; i < 4; i++) {
    // do{
    //
    //     if(idxlist.includes(idx))
    // }while(1)
    while (1) {
      if (!nextidx.includes(idx)) {
        nextidx.push(idx);
        sets = getSets(nextMain, idx);
        target = nextMain;
        kinds = workouts[kIdx].list[idx].name;
        list.push({ target, kinds, sets });

        break;
      }
      idx = Math.floor(Math.random() * wlist.length);
    }
  }
  nextMain = '어깨';
  idx = Math.floor(Math.random() * workouts[3].list.length);
  sets = getSets(nextMain, idx);
  target = nextMain;
  kinds = workouts[3].list[idx].name;
  list.push({ target, kinds, sets });

  nextMain = '팔';
  idx = Math.floor(Math.random() * workouts[4].list.length);
  sets = getSets(nextMain, idx);
  target = nextMain;
  kinds = workouts[4].list[idx].name;
  list.push({ target, kinds, sets });
  return list;
}
export function recommend() {
  userInfo = user.userInfo;
  console.log(workoutHistory[0].exercises[0].target);

  console.log(`타겟 : ${workoutHistory[0].exercises[0].target}`);
  recommendedList = makeList();
  return recommendedList;
}
