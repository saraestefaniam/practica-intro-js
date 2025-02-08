//Al código le faltaba la promesa y su resolución, devolvía undefined porque no le estabamos
//indicando que hacer y cuando

function obtenerUsuario(id) {
    let usuario;
    return new Promise((resolve) => {
        setTimeout ( () => {
            if (id === 1) {
                usuario = { id: 1, nombre: 'Jonh Doe' };
                resolve(usuario);
            }
        }, 2000);
    });
};

obtenerUsuario()
.then(usuario => obtenerUsuario(usuario));

//Ejecución
async function ejecutar() {
    const usuario = await obtenerUsuario(1);
    console.log(usuario);
}

ejecutar();
