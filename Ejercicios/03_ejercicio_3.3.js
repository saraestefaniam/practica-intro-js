const input1 = 'string';
const input2 = 'variable';
const input3 = 'pointer';

const reverseStringAndNumOfChar = (input) => {
    let toList = input.split('');
    let length = toList.length;
    let numberOfChar = [];
    numberOfChar.push(length);
    let invertList = toList.reverse();
    invertList.unshift(numberOfChar);
    let allChars = invertList.join('');
    const finalString = allChars[0] + ' ' + allChars.slice(1);

    return finalString;
};

console.log(reverseStringAndNumOfChar(input1)); //6 gnirts
console.log(reverseStringAndNumOfChar(input2)); //8 elbairav
console.log(reverseStringAndNumOfChar(input3)); //7 retniop

