function solution(citations) {
    var answer = 0;
    citations.sort((a,b)=>b-a)
    for (let i=0 ; i < citations.length ; i++){
        if( citations[i] <= i){
            break;
        }
   
        answer +=1
    }
    return answer;
}