/**
 * Una clase abstracta en TypeScript es una clase de la que no se puede crear instancias
 * y que puede contener propiedades o métodos abstractos que deben ser implementados en la
 * subclase. También puede tener propiedades o métodos que tengan ya una implementación, los cuales
 * serán heredados por la sub clase (Herencia). También se puede sobreescrinor los métodos y se 
 * pueden marcar con la palabra reservada "override". Permite el uso de modificador de acceso.
 */

export abstract class Empleado {
    abstract tipoEmpleado: string;

    constructor (public nombre: string, public id: number) {
    }

    mostrarInformacion() {
        console.log(`Nombre: ${this.nombre}, ID: ${this.id}`)
    }

    //Firma de un método - Quien use la clase base debe implementar
    public abstract calcularSalario(): number;
}

