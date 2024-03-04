function randomNumber() {
  return Math.floor((Math.random() * 100)+1);
}
console.log(randomNumber());

function numberdeleti(number){
if(number % 3 === 0) {
  console.log(number, '3x point')
}
  else if(number % 5 === 0){
    console.log(number, '5x point')
}
else if(number % 3 === 0 || number % 5 === 0){
  console.log(number, 'lucky')
}
else {
  console.log(number);
}
}


