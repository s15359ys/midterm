function calc(list){
    var len = list.length
    var enzan = 1
    var ushiro = enzan+1    
    var answer = list[0]
    while(enzan<len){
        if(list[enzan]=="+"){
            answer = answer+list[ushiro];
        }else if(list[enzan]=="-"){
            answer= answer-list[ushiro];
        }
        enzan = enzan + 2;
    }
    return answer;
}
