//Ejercicio 4. Transformaciones con map y filter

const datos = [
    {
        id: 1,
        nombre: 'Juan',
        habilidades: ['JavaScript', 'HTML', 'CSS'],
        proyectos: [
            { id: 1, nombre: 'Proyecto 1' },
            { id: 2, nombre: 'Proyecto 2' }
        ]
    },
    {
        id: 2,
        nombre: 'María',
        habilidades: ['Python', 'SQL', 'Django'],
        proyectos: [
            { id:3, nombre: 'Proyecto 3' },
            { id:4, nombre: 'Proyecto 4' }
        ]
    },
    {
        id: 3,
        nombre: 'Pedro',
        habilidades: ['Java', 'Spring', 'Hibernate'],
        proyectos: [
            { id: 5, nombre: 'Proyecto 5' },
            { id: 6, nombre: 'Proyecto 6' }
        ]
    }
];

const desarrolladoresJavascript = datos.filter(desarrollador => 
    desarrollador.habilidades.includes('JavaScript'));



const nombresProyectos = datos.map(desarrollador => ({ ...desarrollador.proyectos.nombre}));


/* const nombresProyectossss = datos.map(desarrollador => {
    const losProyectos = datos.filter(desarrollador => 
        desarrollador.proyectos);
        return { ...losProyectos.nombre }
    });
*/


console.log(desarrolladoresJavascript);
console.log(nombresProyectos);