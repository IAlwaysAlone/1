function getPositiveNumbers(arr){
    let posNumbers = arr.filter(num => num > 0);
    return posNumbers;
}

let nums = [7, 9, 1, 6, 15, 12];
console.log(getPositiveNumbers(nums));