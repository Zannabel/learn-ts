import { IPersona } from "./IPersona";

export class Hombre implements IPersona {
    public readonly nombre: string;
    public readonly apellido: string;
    public edad!: number;

    constructor(nombre?: string, apellido?: string) {
        this.nombre = nombre ?? '';
        this.apellido = apellido ?? '';
    }

    public nombre_completo(): string {
        return `${this.nombre} ${this.apellido}`;
    }

    public hablar_futbol(equipo: string, minutos: number) : void {
        console.log(`Hablemos sobre el: ${equipo}. ${minutos} minutos, pues están jugando como los dioses.`)
    } 
}

// class Hombre {
//     nombre?: string;
//     apellido?: string;
//     edad: number;

//     constructor() {
//         this.nombre = 'Felipe';
//         this.apellido = 'Fernandez';
//         this.edad = 18;
//     }

//     hablar_futbol() {
//         console.log('Hablando');
//     }

// }

// function nombre_completo(nombre: string, apellido: string, edad: number) {
//     return(`Nombre completo del hombre ${nombre} ${apellido} y su edad es ${edad}`)
// }

// class Hablar {
//     equipo: string;
//     minutos: number;

//     constructor() {
//         this.equipo = 'Real Madrid';
//         this.minutos = 90
//     }
// }
