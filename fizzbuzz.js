/* ---------------------------------------------- */
/* ---- 🙈 My Brute way to deal with DSA 🙊 ---- */
/* ---------------------------------------------- */
/* - fizzbuzz - */

//เช็คว่า number < 0 ไหม ถ้าไม่ คืน array เปล่า
//สร้าง array ว่างไว้เก็บค่าก่อน
//สร้างลูปเพื่อมาวน
//นำตัวเลขแต่ละตัวมาเช็คแล้วถ้าตัวเลขเข้าเงื่อนไข
//เช็คว่า หาร 3 ได้ไหม ถ้าได้ เก็บในตัวแปล array ที่สร้างไว้ โดยค่านั้นจะเป็นคำว่า Fizz
//เช็คว่า หาร 5 ได้ไหม ถ้าได้ เก็บในตัวแปล array ที่สร้างไว้ โดยค่านั้นจะเป็นคำว่า Buzz
//เช็คว่า หาร 3 และ 5 ได้ไหม ถ้าได้ เก็บไว้ในตัวแปล array ที่ส้รางไว้ โดยค่านั้นจะเป็นคำว่า FizzBuzz
//ถ้าไม่เข้าเงื่อนไขใด ให้เก็บตัวเลขนั้น ๆ เข้า array
//จบลูป
// คืน array ค่าที่ทำมาทั้งหมด

const fizzbuzz = (n) => {
    let result = [];
    let letter = "";
    for (let i = 1; i <= n; i++) {
        letter = i;

        // console.log(letter);
        // result.push(letter); [1,2,3,4,5,6,7,n]

        // then, add each condition
        if (i % 3 === 0) {
            letter = "fizz";
        }
        if (i % 5 === 0) {
            letter = "fizz";
        }
        if (i % 15 === 0) {
            letter = "fizzbuzz";
        }
        // console.log(letter);
        result.push(letter);
    }
    console.log(result);

    return result;
};

fizzbuzz(30);

/* ---------------------------------------------- */
/* ---- 😇 The Refined way to deal with DSA 😎 ---- */
/* ---------------------------------------------- */
/* - fizzbuzz - */

function fizzbuzz2(number) {
    if (number <= 0) return [];

    let result = [];

    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i);
        }
    }

    return result;
}

console.log(fizzbuzz2(30));
// [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']
