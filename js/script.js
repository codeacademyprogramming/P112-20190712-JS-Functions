"use strict";


function mesajGoster(mesaj, name = "Anar") {
    console.log(`${mesaj} - ${name}`);
    Power();
    console.log("End of Mesaj");
}

// mesajGoster("Hi");
// mesajGoster("Hola");
// mesajGoster("Salam");

function Power(num1, quvvet) {
    let result = 1;

    for (let i = 0; i < quvvet; i = i + 1) {
        result = result * num1;
    }

    return result;
}

// console.log( Power(2, 4) );
// alert( Power(2, 3) );
// document.getElementById("demo").innerHTML = Power(5, 4);


function Sum(num1, num2) {
    let cem = 0;

    for (let i = num1; i <= num1 + num2; i++) {
        cem = cem + i;
    }

    return cem;
}

// console.log( Sum(92, 5) );
// console.log( Sum(50, 2) );
// console.log( Sum(10, 21) );
// console.log( Sum(5, 5) );


function tekEdedler(limit) {
    for (let i = 0; i <= limit; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }

    console.log("_____________");
}

function cutEdedler(limit) {
    for (let i = 0; i <= limit; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }

    console.log("_____________");
}

// tekEdedler(50);
// tekEdedler(22);
// cutEdedler(123);
// cutEdedler(80);



function tekEdedlerCemi(limit) {
    let ededlerinCemi = 0;
    for (let i = 0; i <= limit; i++) {
        if (i % 2 != 0) {
            ededlerinCemi += i;
        }
    }
    console.log(ededlerinCemi);
    console.log("_____________");
}

function cutEdedlerCemi(limit) {
    let ededlerinCemi = 0;
    for (let i = 0; i <= limit; i++) {
        if (i % 2 == 0) {
            ededlerinCemi = ededlerinCemi + i;
        }
    }

    console.log(ededlerinCemi);
    console.log("_____________");
}

// tekEdedlerCemi(15);
// cutEdedlerCemi(30);


function checkAge(age) {
    if (age >= 18 && age < 35) {
        return true;
    }

    return false;
}


function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

// console.log( min(10, 5) );
// console.log( min(-3, 2) );
// console.log( min(0, 7) );
// console.log( min(4, 4) );


function factorial(n) {
    if (n < 0) {
        return "Input is not correct!";
    }

    let output = 1;
    for (let i = 1; i <= n; i++) {
        output = output * i;
    }
    return output;
}


function findMin(eded){
    if(eded < 100 || eded > 999){
        return "Duzgun 3 reqemli eded daxil edin"
    }

    let num1 = eded % 10;
    eded = (eded - num1) / 10;
    let num2 = eded % 10;
    let num3 = (eded - num2) / 10;

    if(num1 <= num2 && num1 <= num3){
        return num1;
    } else if (num2 <= num1 && num2 <= num3){
        return num2;
    } else {
        return num3;
    }
}


function findSqr(n){
    let output = false;

    for(let i = 1; i <= n / 2; i++){
        if(i * i == n){
            output = i;
            break;
        }
    }

    return output;
}

console.log( findSqr(49) );
console.log( findSqr(50) );
console.log( findSqr(9) );
console.log( findSqr(10000000000 ) );
console.log( findSqr(36) );