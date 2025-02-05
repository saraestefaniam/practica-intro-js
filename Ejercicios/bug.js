//Ejercicio 2. Arreglar bug

//El bug estaba en la iteración con el índice
//decía que mientras el índice fuera menor o igual a la longitud de la lista
//cuando la iteración llega la punto en que índice es igual a la longitud
// al hacer la operación numeros[i] (que serían números[5] con la lista de listaNumeros) 
// se está fuera de rango, ya que esa posición no existe, la última posición es 4

const calcularPromedio = (numeros) => {
    let sumaTotal = 0;

    for (let i=0; i < numeros.length; i++) {
        sumaTotal = sumaTotal + numeros[i];
    }

    const promedio = sumaTotal / numeros.length;
    return promedio
};

const listaNumeros = [1, 2, 3, 4, 5];
const promedioNumeros = calcularPromedio(listaNumeros);

console.log(promedioNumeros);



// Otra solución / forma de resolverlo
const calcularPromedio2 = (numeros) => {
    let sumaTotal2 = 0;
    const elementosLista = numeros.length;

    for (const numero of numeros) {
        sumaTotal2 = sumaTotal2 + numero;
    }

    const promedio2 = sumaTotal2 / elementosLista;
    return promedio2;

};

const listaNumeros2 = [1,2,3,4,5];
const promedioNumeros2 = calcularPromedio2(listaNumeros2);

console.log(promedioNumeros2);
