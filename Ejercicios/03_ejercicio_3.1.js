const input1 = [
    'Downloads',
    'Videos',
    'Capture',
    'mp4'
];

const input2 = [
    'CodingGame',
    'python',
    'py'
];

const input3 = [
    'programming',
    'languages',
    'easy',
    'beginner',
    'useful',
    'pythonstuff',
    'py'
]

//Primera forma de solucionarlo

const transform = (dataRoute) => {
    let theRoute = dataRoute.join('/').replace(/\/(?!.*\/)/, '.');

    return theRoute;
};

console.log(transform(input1));
console.log(transform(input2));
console.log(transform(input3));


// Otra forma de solucionarlo

const transform2 = (dataRoute2) => {
    let lastElement = dataRoute2.filter((r, index) => index === dataRoute2.length - 1);
    dataRoute2.pop();
    let firstString = dataRoute2.join('/');
    let lastList = [];
    lastList.push(firstString, lastElement);
    let theRoute2 = lastList.join('.');
    
    return theRoute2;
};

console.log(transform2(input1));
console.log(transform2(input2));
console.log(transform2(input3));