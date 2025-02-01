const user = {
    nombre: 'Sara',
    apellidos: 'Morales Franzese',
    temasBootcamp: [
        {
            nombre: 'Node.js',
            fechaInicio: '2025-03-10',
        },
        {
            nombre: 'Git',
            fechaInicio: '2025-02-02',
        },
        {
            nombre: 'React',
            fechaInicio: '2025-05-12',
        },
    ],
    busquedaActiva: false,
};

console.log(`
    El módulo de REACT inicia el ${user.temasBootcamp[2].fechaInicio}
    `);