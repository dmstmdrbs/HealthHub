export let recommendedList=[];
export function recommend(value){
    recommendedList=[
        {target : '등',
        kinds:'랫풀',
        sets:[{reps:10, weight:60}]}
    ];
    console.log(recommendedList);
    return recommendedList;
}
