import { Construccion } from "./construccion";

export class Comercial extends Construccion {
    private cantidad_ingresos!: number;
    private empleados!: number;

    constructor(pisos: number, empleados: number) {
        super(pisos);
    }

    public cantidad_empleados(): number {
        return empleados
    }

    get _cantidad_ingresos(): number;

    set _cantidad_ingresos(cantidad_ingresos: number)

}