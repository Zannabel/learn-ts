export abstract class Construccion {

    public static cantidad_edificios: number = 0;

    constructor(private pisos_ed: number) {
        Construccion.cantidad_edificios += 1;
    }

    public impuestos(): number {
        return this.pisos_ed * 300000;
    }

    get pisos(): number {
        return this.pisos_ed;
    }

    set pisos(pisos: number) {
        this.pisos_ed = pisos;
    }

    public static edificios_contador(): number {
        return Construccion.cantidad_edificios;
    }
}