// CORRECCIÓN
import { Construccion } from "./construccion";

export class Comercial extends Construccion {

    private _cantidad_ingresos!: number;

    public get cantidad_ingresos(): number {
        return this._cantidad_ingresos;
    }

    public set cantidad_ingresos(cantidad_ingresos: number) {
        this._cantidad_ingresos = cantidad_ingresos;
    }

    constructor( pisos: number, private _empleados: number ) {
        super( pisos );
    }
    
    public cantidad_empleados(): number {
        return this._empleados;
    }
    
}

// PRIMER INTENTO

// import { Construccion } from "./construccion";

// export class Comercial extends Construccion {
//     private cantidad_ingresos!: number;
//     private empleados!: number;

//     constructor(pisos: number, empleados: number) {
//         super(pisos);
//     }

//     public cantidad_empleados(): number {
//         return empleados
//     }

//     get _cantidad_ingresos(): number;

//     set _cantidad_ingresos(cantidad_ingresos: number)

// }