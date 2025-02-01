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

const transform = (dataRoute) => {
    let theRoute = dataRoute.join('/').replace(/\/(?!.*\/)/, '.');

    return theRoute;
};



//cosas que se me han ocurrido: 
// y si pongo la cadena alreves y quito solo el primer / y luego la vuelvo a voltear?
//y si hago un join con . en vez de / y luego reemplazo todos los . por / excepto el último



console.log(transform(input1));
console.log(transform(input2));
console.log(transform(input3));