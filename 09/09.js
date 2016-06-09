function countDigits(a){
    if(a<0){
        return -1;
    }else{
        var count = 1;
        while(a>=10){
            a = a/10;
            count = count+1;
        }
        return count;
    }
}