interface Reproductor{
    volumen: number;
    segundo: number;
    cancion:string;
    detalles:Detalles;
}
interface Detalles{
    autor: string;
    year:number
}

const reproductor:Reproductor = {
    volumen: 50,
    segundo: 30,
    cancion: "La vida es un sueño",
    detalles:{
        autor: "Fernando de Rojas",
        year:1500
    }
}

/*console.log(`El volumen actual es: ${reproductor.volumen}`)
console.log(`Los segundos son: ${reproductor.segundo}`)
console.log(`La canción es: ${reproductor.cancion}`)
console.log(`El cantante es: ${reproductor.detalles.autor}`)
console.log(`El año es: ${reproductor.detalles.year}`)*/

//Desestructuración

const{volumen, segundo, cancion, detalles} = reproductor;
const{autor, year} = detalles;

console.log(`El volumen actual es: ${volumen}`)
console.log(`Los segundos son: ${segundo}`)
console.log(`La canción es: ${cancion}`)
console.log(`El cantante es: ${autor}`)
console.log(`El año es: ${year}`)

//Desestructuración aplicada a los arreglos

const dbz:string[]=['Goku', 'Majinbu', 'Babidi', 'Freezer']
console.log(`Personaje 1: ${dbz[0]}`)
console.log(`Personaje 2: ${dbz[1]}`)
console.log(`Personaje 3: ${dbz[2]}`)
console.log(`Personaje 4: ${dbz[3]}`)

const[a,,b,c]=dbz;//Se agrega una coma respetando el espacio de lo que no se quiere que se muestre
console.log(`Personaje 1: ${a}`)
console.log(`Personaje 2: ${b}`)
console.log(`Personaje 3: ${c}`)