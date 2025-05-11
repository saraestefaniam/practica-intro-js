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