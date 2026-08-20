//classe
class Carro {

    //Atributos - Características do objeto
    constructor(marca, modelo, ano) {

        //this - referencia ao objeto que está sendo criado
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;

    }
    ligar() {
        console.log("Carro ligado.");
    }
    //Acelerar é um método da classe Carro.
    acelerar() {
        console.log("Acelerando.");
    }
    //Frear é um método da classe Carro.
    frear() {
        console.log('${this.modelo} freiou.´');
    }

}

//Carro 1, Carro 2 são objetos da classe Carro
        //Objeto
        const carro1 = new Carro("Volkswagen", "Gol", 2022, "Branco");
        console.log("Carro 1: ", carro1);

        //Objeto
        const carro2 = new Carro("Toyota", "Corolla", 2025, "Preto");
        console.log("Carro 2: ", carro2);

        //Objeto
        const carro3 = new Carro("Honda", "Civic", 2023, "Cinza");
        console.log("Carro 3: ", carro3);


console.log("---------------------------------");
console.log("Atributos do carro 1: ");
console.log("-", carro1.marca); 
console.log("-", carro1.modelo); 
console.log("-", carro1.ano); 
console.log("-", carro1.cor); 
console.log("---------------------------------"); 

console.log("---------------------------------");
console.log("Atributos do carro 2: ");
console.log("-", carro2.marca); 
console.log("-", carro2.modelo); 
console.log("-", carro2.ano); 
console.log("-", carro2.cor); 
console.log("---------------------------------");

console.log("---------------------------------");
console.log("Atributos do carro 3: ");
console.log("-", carro3.marca); 
console.log("-", carro3.modelo); 
console.log("-", carro3.ano); 
console.log("-", carro3.cor); 
console.log("---------------------------------");

//--- Objeto - Metodos

// Chamando o método ligar ao carro 1
carro1.ligar();
//chamando o método acelerar ao carro 2
carro2.acelerar();
//chamando o método frear ao carro 3
carro3.frear();