//Pare crear una clase/interfaz se utiliza interface
interface Alumno{
    nombre: string;
    edad: number;
    apellido: string;
    genero: string;
    calificacion?: number;//Se agrega ? para indicar que la propiedad es opcional
}

const alumno:Alumno ={ //Para instanciar el objeto a la clase se le agrega el nombre de la clase después del nombre del objeto
    nombre: "Mario",
    apellido:"Lopez",
    edad: 23,
    genero: "M",
}

console.table(alumno)

//Arreglos

let mascotas = ['perico','perro','gato'];
console.log(mascotas[1]);
mascotas[1] = 'nuevo perro';
console.log(mascotas[1]);
mascotas.push('hamster');
console.log(mascotas);

let tem:(string|number)[]=[];
tem.push(11)
tem.push('Mario')
console.log(tem)