function sorrt(arr){
    arr.sort((a,b) => a - b);
    return arr;
}

let numbers = [55, 111, -15, -12, 5, 666];
console.log(sorrt(nums));
