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

    areaRectangulo():void{
        let areaRect;
        areaRect = this.base * this.altura;
        console.log(`El área del rectángulo es: ${areaRect}`)
       
    }

    areaCuadrado(){
        let areaCuadrado;
        areaCuadrado = this.lado * this.lado;

        console.log(`El área del cuadrado es: ${areaCuadrado}`)

    }

    areaCirculo(){
        let areaCirc;
        areaCirc = 3.1416 * (this.radio *this.radio);
        console.log(`El área del círculo es: ${areaCirc}`)

    }

}

const area = new Areas(10, 4, 8, 3);
area.areaRectangulo();
area.areaCuadrado();
area.areaCirculo();