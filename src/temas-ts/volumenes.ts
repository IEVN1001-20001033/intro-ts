import { Areas } from "./areas";

class Volumenes extends Areas{
    private h:number;

    constructor(base:number,altura:number,lado:number,radio:number,h:number){
        super(base,altura,lado,radio);
        this.h = h;
    }    

    vPrisma(): void{
        let volPrisma;
        volPrisma =   this.areaRectangulo() * this.h;
        console.log(`El volumen del prisma rectangular es: ${volPrisma}`)
       
    }

    vPiramide(): void{
        let volPiramide;
        volPiramide =   this.areaCuadrado() * this.h;
        console.log(`El volumen del prisma rectangular es: ${volPiramide}`)
       
    }

    vCilindro(): void{
        let volCilindro;
        volCilindro =   this.areaCirculo() * this.h;
        console.log(`El volumen del prisma rectangular es: ${volCilindro}`)
       
    }

    
}

console.log("*******ÁREAS*******");
const area = new Areas(10, 4, 8, 3);
console.log(`El área del rectángulo es: ${area.areaRectangulo()}`);
console.log(`El área del rectácuadrado es: ${area.areaCuadrado()}`);
console.log(`El área del circulo es: ${area.areaCirculo()}`);
console.log("**********************************************************");
console.log("*******VOLUMENES*******");
const volumenes = new Volumenes(4,4,8,3,5);
volumenes.vPrisma();
volumenes.vPiramide();
volumenes.vCilindro();