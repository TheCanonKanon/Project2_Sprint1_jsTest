"use strict";

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

//Exercise 11
console.log("-------------");
console.log("Exercise 11");
function additionNums() {
    const additionNumsMulti = 2*6;
    console.log(additionNumsMulti);
}
additionNums();

//Exercise 12
console.log("-------------");
console.log("Exercise 12");
function additionNums2() {
    const additionNumsMulti2 = 34*283;
    return additionNumsMulti2;    
}
console.log(additionNums2());

//Exercise 13
console.log("-------------");
console.log("Exercise 13");
let a = [12,4,2];
let b = [1,54,3];

function additionNums3(number1,number2) {
    const additionNumsMulti3 = number1 * number2;
    return additionNumsMulti3;
}
console.log(additionNums3(a[0],b[0]));
console.log(additionNums3(a[1],b[1]));
console.log(additionNums3(a[2],b[2]));

//Exercise 14
console.log("-------------");
console.log("Exercise 14");
function triangleType(a,b,c) {
    if (a === b && b === c) {
        console.log("Your triangle is a Equilateral");
    } else if (a === b || b === c || a === c) {
        console.log("Your triangle is a Isosceles");
    } else if (a != b && b !=c && a != c) {
        console.log("Your triangle is a Scalene");
    } else {
        console.log("The heck is that?")
    }
}
triangleType(2,2,2);
triangleType(2,3,2);
triangleType(2,4,5);
triangleType(1,2,2);
triangleType(7,4,2);

//Exercise 15
console.log("-------------");
console.log("Exercise 15");
const NumberArray3 = [9,2,3,1,6,7,8,4,3,2,7,6];
let smollNum = NumberArray3[0];

function smollNumFinder(a,b) {
    if (a < b) {
        smollNum = a;
    } else {
        smollNum = b;
    };
};

for (let i = 1; i < NumberArray3.length; i++) {
    smollNumFinder(smollNum,NumberArray3[i]);
}
console.log(smollNum);

//Exercise 16
console.log("-------------");
console.log("Exercise 16");
let bigusNum = NumberArray3[0];

function bigusNumFinder(a,b) {
    if (a > b) {
        bigusNum = a;
    } else {
        bigusNum = b;
    };
};

for (let i = 1; i < NumberArray3.length; i++) {
    smollNumFinder(bigusNum,NumberArray3[i]);
}
console.log(bigusNum);

//Exercise 17
console.log("-------------");
console.log("Exercise 17");
const indexArray = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
const index = 6;

function ArrayIndexFinderPrinter(AnArray,someIndex) {
    console.log(AnArray[someIndex]);    
};
ArrayIndexFinderPrinter(indexArray,index);

//Exercise 18
console.log("-------------");
console.log("Exercise 18");
const myColor = ["Red", "Green", "White", "Black"];

function ColourAdder(ColoursToAdd) {
    let coloursMixed = ColoursToAdd[0] 
    for (let i = 1; i < ColoursToAdd.length; i++) {
        coloursMixed = coloursMixed + " " + ColoursToAdd[i];
    }
    return coloursMixed;
}
console.log(ColourAdder(myColor));


//Exercise 19
console.log("-------------");
console.log("Exercise 19");
const x = 32443;

function NumbersReverser(UnReversedNum) {
    let UnReversedStringNum = UnReversedNum + "";
    let UnReversedArrayNum = UnReversedStringNum.split("");
    let ReversedNum = "";
    do {
        ReversedNum = ReversedNum + UnReversedArrayNum.pop();
    } while (UnReversedArrayNum.length > 0);
    return ReversedNum;
}

console.log(NumbersReverser(x));

//Exercise 20
console.log("-------------");
console.log("Exercise 20");
const z = 'webmaster';

function LetterSorter(needsSorting) {
        let letterSorter3000 = needsSorting.split("");
        let checker = 0;
        do {
            checker = 0;
            for (i = 0; i < letterSorter3000.length - 1; i++) {
                if (letterSorter3000[i] > letterSorter3000[i+1]) {
                    let inbetween = letterSorter3000[i+1];
                    letterSorter3000[i+1] = letterSorter3000[i];
                    letterSorter3000[i] = inbetween;
                    checker = 1;
                }
            }
        } while (checker != 0)
        return letterSorter3000;
}

console.log(LetterSorter(z));

//Exercise 21
console.log("-------------");
console.log("Exercise 21");

const y = "Web Development Tutorial";

function longestBoyFinder(fightingForLong) {
    const wordLongHolder = fightingForLong.split(" ");
    let longestBoy = "";
    for (i = 0; i < wordLongHolder.length; i++) {
        if (longestBoy.length < wordLongHolder[i].length) {
            longestBoy = wordLongHolder[i];
        };
    };
    return longestBoy;
};
console.log(longestBoyFinder(y));

//Exercise 22
console.log("-------------");
console.log("Exercise 22");

const v = "JavaScript";

function aEradicator(wordWordington) {
    let wordWordingtonClean = "";
    for (let x of wordWordington) {
        if (x === "a" || x === "A") {
            x = 1;
        };
        wordWordingtonClean += x;
    };
    return wordWordingtonClean;
}
console.log(aEradicator(v.split("")));

//Exercise 23
console.log("-------------");
console.log("Exercise 23");

const u = "prince of persia"

function bigFirstLetter(notBigLetter) {
    let solution = "";
    for (let x of notBigLetter) {
        solution += x.slice(0,1).toUpperCase();
        solution += x.slice(1,x.length)
        solution += " "
    }
    return solution.trim();
}
console.log(bigFirstLetter(u.split(" ")));

//Exercise 24
console.log("-------------");
console.log("Exercise 24");

const n = 30;

function evenBeforeThis(endAllNum) {
    let beforeNums = "";
    for (let i = 1; i < endAllNum; i++) {
        if (i % 2 === 0) {
            beforeNums += i + ",";
        }
    }
    return beforeNums.slice(0,beforeNums.length-1);
}
console.log(evenBeforeThis(n));