export class Areas{
    protected base:number;
    protected altura:number;
    protected lado:number;
    protected radio:number;

    constructor(base:number,altura:number,lado:number,radio:number){
        this.base = base;
        this.altura = altura;
        this.lado = lado;
        this.radio = radio;
    }    

    areaRectangulo(){
        let areaRect;
        areaRect = this.base * this.altura;
        
        //console.log(`El área del rectángulo es: ${areaRect}`)
        //console.log(areaRect)
        return areaRect;
       
    }

    areaCuadrado(){
        let areaCuadrado;
        areaCuadrado = this.lado * this.lado;

        //console.log(`El área del cuadrado es: ${areaCuadrado}`)
        return areaCuadrado;

    }

    areaCirculo(){
        let areaCirc;
        areaCirc = 3.1416 * (this.radio *this.radio);
        //console.log(`El área del círculo es: ${areaCirc}`)
        return areaCirc;

    }

}

/*console.log("*******ÁREAS*******");
const area = new Areas(10, 4, 8, 3);
console.log(`El área del rectángulo es: ${area.areaRectangulo()}`);
console.log(`El área del rectácuadrado es: ${area.areaCuadrado()}`);
console.log(`El área del circulo es: ${area.areaCirculo()}`);*/