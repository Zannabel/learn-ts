class Animal {
    // el signo ! en este caso sirve para evitar la verificación de null o undefined
    color!: string;
    especie!: string;
    peso!: number;
    tamaño!: string;

    constructor() {
        console.log('Creando un animal');
    }

    alimentarse(): void {
        console.log('Alimentandose');
    }

}

class Acuatico extends Animal {
    nadar() {
        console.log('Nadando');
    }
}

//La herencia se da gracias a la palabra reservada extends
class Gato extends Animal {
    constructor() {
        super();
        console.log('Creando un gato a partir de animal');
    }

    private molestar() {
        console.log('Pasando por el teclado')
    }
}

class Perro extends Animal {
    constructor() {
        super();
        console.log('Creando un perro a partir de animal');
    }

    public jugando() {
        console.log('Estoy jugando')
    }
}

// Solo puedo heredar de una sola clase 
class Pato extends Acuatico {
}

const cualquierAnimal: Animal = new Animal();
