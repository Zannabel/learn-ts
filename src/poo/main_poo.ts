import { IPersona } from "./IPersona";
import { Hombre } from "./hombre";
import { Mujer } from "./mujer";

const hombre1: IPersona = new Hombre('Felipe', 'Fernandez');
hombre1.edad = 18;
hombre1.nombre_completo();

const hombre2: IPersona = new Hombre('');
hombre1.edad = 15;
hombre1.nombre_completo();

const hombre3: IPersona = new Hombre('', 'Fernandez');
hombre1.edad = 19;
hombre1.nombre_completo();

const mujer: IPersona = new Mujer();


