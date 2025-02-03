const input = 10;
const secondInput = 1;
const thirdInput = 11234;

const numberToStringWithDash = (input) => {
    let inputString = input.toString();
    let aList = inputString.split('');
    const finalString = aList.join('-');
    return finalString

};

console.log(numberToStringWithDash(input)); // '1-0'
console.log(numberToStringWithDash(secondInput)); // '1'
console.log(numberToStringWithDash(thirdInput)); // '1-1-2-3-4'