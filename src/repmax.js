import userInfo from './userInfo';

function getWeight(w, r) {
  let setList = [];

  let divider = 101.3 - parseInt(2.67 * r);
  let oneRM = (100 * w) / divider;

  let formula;
  let weight;
  for (var reps = 1; reps < 15; reps++) {
    formula = 101.3 - parseInt(2.67 * reps);
    weight = (oneRM * formula) / 100;
    setList.push({ weight: weight, reps: reps });
  }
  return setList;
}
function getRM(w, mR) {
  let weight = w;
  let maxReps = mR;
  console.log(`들어올린 중량 ${weight} kg, 최대 반복 횟수 ${maxReps}`);

  let setList = getWeight(weight, maxReps);
  console.log(setList);
  // reps = weight + weight * 0.025 * reps
}
