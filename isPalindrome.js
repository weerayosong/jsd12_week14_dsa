/* ---------------------------------------------- */
/* ---- 🙈 My Brute way to deal with DSA 🙊 ---- */
/* ---------------------------------------------- */
/* - isPalindrome - */

const isPalindrome = (str) => {
    console.log(str);

    const cleanStr = str.toLowerCase();
    console.log(cleanStr);

    const charArray = cleanStr.split("");
    console.log(charArray);

    const reversedArray = charArray.reverse();
    console.log(reversedArray);

    const reversedStr = reversedArray.join("");
    console.log(reversedStr);

    const result = cleanStr === reversedStr;
    console.log(result);
};

isPalindrome("LeVEl"); // true
console.log("\n");
isPalindrome("JEDI"); // false
console.log("\n= = = = = = = =\n= = = = = = = =\n");

/* ---------------------------------------------- */
/* ---- 😇 My Refined way to deal with DSA 😎 ---- */
/* ---------------------------------------------- */
/* - isPalindrome - */

function isPalindrome2(str) {
    const cleanStr = str.toLowerCase();
    const reversedStr = cleanStr.split("").reverse().join("");
    return cleanStr === reversedStr;
}

console.log(isPalindrome2("lEVeL")); // true
console.log(isPalindrome2("JEDI")); // false
