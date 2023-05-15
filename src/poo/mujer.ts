import { IPersona } from "./IPersona";

export class Mujer implements IPersona {
    public nombre!: string;
    public apellido!: string;
    public edad!: number;

    public nombre_completo(): string {
        return `${this.nombre} ${this.apellido}`;
    }

    public ir_cine(sala: string, pelicula: string): void {
        console.log(`Viendo ${pelicula} en ${sala}`);
    }
}

// PRIMER INTENTO

// class Mujer {
//     nombre: string;
//     apellido: string;
//     edad: number;

//     constructor() {
//         this.nombre = 'Ana';
//         this.apellido = 'Zuluaga';
//         this.edad = 18;
//     }

//     ver_cine() {
//         console.log('Viendo')
//     }
// }

// let ana: Mujer = new Mujer;
// console.log(ana);

// ana.nombre = 'Ana';
// console.log(ana.nombre);

// ana.apellido = 'Zuluaga';
// console.log(ana.apellido);

// ana.edad = 18;
// console.log(ana.edad);
