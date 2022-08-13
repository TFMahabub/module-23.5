function sum(i){
    if(i == 0){
        return 1;
    }
    return i + sum(i-1);
}
result = sum(3);
console.log(result);