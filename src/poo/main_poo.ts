// CORRECCIÓN
import { Comercial } from "./comercial";
import { Construccion } from "./construccion";
import { Hombre } from "./hombre";
import { IPersona } from "./IPersona";
import { Mujer } from "./mujer";
import { Residencial } from "./residencial";

const hombre1: IPersona = new Hombre( 'Juan', 'Martinez' );
hombre1.edad = 29;
hombre1.nombre_completo();

const hombre2: IPersona = new Hombre();
hombre2.edad = 18;
hombre2.nombre_completo();

const hombre3: IPersona = new Hombre('Juan Felipe', 'Fernandez');
hombre3.edad = 18;
hombre3.nombre_completo();

const hombre4: IPersona = new Hombre(undefined, 'Juvenal Velazques');
hombre4.edad = 91;
hombre4.nombre_completo();

const mujer: IPersona = new Mujer('Ana', 'Zuluaga');
mujer.edad = 19;
mujer.nombre_completo();


const residencial = new Residencial( 6 );
console.log( 'Impuestos de residencial', residencial.impuestos() );
residencial.agregar_habitante( hombre1 );
residencial.agregar_habitante( hombre2 );
residencial.agregar_habitante( hombre3 );
residencial.agregar_habitante( hombre4 );
residencial.agregar_habitante( mujer );
residencial.listar_habitantes();


const comercial = new Comercial( 3, 25 );
console.log( 'Impuestos de comercial 1', comercial.impuestos() );

const comercial2 = new Comercial( 8, 150 );
console.log( 'Impuestos de comercial 2', comercial2.impuestos() );


console.log( `La constructora bienes y bienes hizo ${ Construccion.edificios_contador() } construcciones.` );

// import { IPersona } from "./IPersona";
// import { Hombre } from "./hombre";
// import { Mujer } from "./mujer";

// const hombre1: IPersona = new Hombre('Felipe', 'Fernandez');
// hombre1.edad = 18;
// hombre1.nombre_completo();

// const hombre2: IPersona = new Hombre('');
// hombre1.edad = 15;
// hombre1.nombre_completo();

// const hombre3: IPersona = new Hombre('', 'Fernandez');
// hombre1.edad = 19;
// hombre1.nombre_completo();

// const mujer: IPersona = new Mujer();


