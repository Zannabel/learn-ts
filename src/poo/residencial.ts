import { IPersona } from './IPersona';
import { Construccion } from './construccion';
import { Hombre } from './hombre';
import { Mujer } from './mujer';


export class Residencial extends Construccion {
    private habitantes_ed: [IPersona];

    constructor(pisos: number) {
        super(pisos);
        this.habitantes_ed;
    }

    public override impuestos(): number {
        return this.pisos * 150000;
    }

    public numero_habitantes(): number {
        return this.habitantes_ed.length;
    }

    public agregar_habitante(persona: IPersona): void {
        this.habitantes_ed.push(persona);
    }

    public listar_habitantes(): void {

        this.habitantes_ed.forEach((persona) => {
            
            if(persona instanceof Hombre) {
                persona.hablar_futbol('Real Madrid', 3);
            } else if(persona instanceof Mujer) {
                persona.ir_cine('Jeepers Creepers', '3D');
            }
        });
    }
}
