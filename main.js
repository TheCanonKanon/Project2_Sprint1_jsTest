//Exercise 1
console.log("Exercise 1");
const myName = "Robert";
console.log(myName);

//Exercise 2
console.log("-------------");
console.log("Exercise 2");
const age = 33;
console.log(age);

//Exercise 3
console.log("-------------");
console.log("Exercise 3");
const juliaAge = 32;
const ageDiff = age - juliaAge;
console.log(ageDiff);

//Exercise 4
console.log("-------------");
console.log("Exercise 4");
if (age > 21) {
    console.log("You are older than 21");
} else {
    console.log("You are not older than 21");
}

//Exercise 5
console.log("-------------");
console.log("Exercise 5");
if (age > juliaAge) {
    console.log("You are older than Julia");
} else if (age === juliaAge) {
    console.log("You are the same age as Julia");
} else {
    console.log("You are younger than Julia");
}

//Exercise 6
console.log("-------------");
console.log("Exercise 6");
const classNameArray = ["Hadi","Stefan","Robert"];
console.log(classNameArray[0]);
console.log(classNameArray[classNameArray.length-1]);
for (let i = 0; i < classNameArray.length; i++) {
    console.log(classNameArray[i]);
}

//Exercise 7
console.log("-------------");
console.log("Exercise 7");
const classAgeArray = [24,33,40];

for (let i = 0; i < classAgeArray.length; i++) {
    console.log(classAgeArray[i]);
}

let i = 0;
while (i < classAgeArray.length) {
    if (classAgeArray[i] % 2 === 0) {
        console.log(classAgeArray[i]);
    }
    i++;
}

//Exercise 8
console.log("-------------");
console.log("Exercise 8");
let classAgeSum = 0;
for (let i = 0; i < classAgeArray.length; i++) {
    classAgeSum = classAgeSum + classAgeArray[i]; 
}
console.log(classAgeSum);

//Exercise 9
console.log("-------------");
console.log("Exercise 9");
const NumberArray = [1, 2, 8, 3, 2];
let NumberArraySum = 0;
for (let i = 0; i < NumberArray.length; i++) {
    if (NumberArray[i] % 2 === 0) {
        NumberArraySum = NumberArray[i] + NumberArraySum;
    }
}
console.log(NumberArraySum);

//Exercise 10
console.log("-------------");
console.log("Exercise 10");
const NumberArray2 = [1, 2, 8, 3, 2, 3, 4];
let NumberArray2Sum = 0;
for (let i = 0; i < NumberArray2.length; i++) {
    if (i % 2 === 0 && i != 0) {
        NumberArray2Sum = NumberArray2[i] + NumberArray2Sum;
    }
}
console.log(NumberArray2Sum);