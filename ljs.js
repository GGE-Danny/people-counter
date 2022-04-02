// let firstBatch = 5;
// let secondBatch =5;
// let count = firstBatch + secondBatch;
// console.log(count);
// let myAge = 16;
// let dogYears = 7;
// let resMydogage =myAge*dogYears;
// console.log(resMydogage);



// let count = 5;
// count+=2;
// count+=10;
// console.log(count);

// let bonusPoints = 50;
// console.log(bonusPoints);
// bonusPoints+= 50;
// console.log(bonusPoints);
// bonusPoints-=75;
// console.log(bonusPoints);
// bonusPoints+=45;

// console.log(bonusPoints);

// document.getElementById("count-el").innerText = 0;

// function increment() {
//     console.log("the button was clicked")
// }

// function countDown(){
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// let lapsCounted3 = 0;

// function lapsCounted(){
//     lapsCounted3+=1;
//     console.log(lapsCounted3);
// }

// lapsCounted();
// lapsCounted();

let count = 0;

function increment(){
    document.getElementById("count-el").innerHTML = count+=1;
}

function decrement(){
    if (count > 0){
        document.getElementById("count-el").innerHTML = count-=1;
    }
}

function reset(){
    document.getElementById("count-el").innerHTML =0;
}

let x ="10";
let y = 10;

sum = x+y;

console.log(sum);