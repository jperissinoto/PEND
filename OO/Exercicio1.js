//Objeto: iPhone 17 Pro Max 512GB - Prateado
//Atributos: Cor: Prateado, Armazenamento: 512GB, Modelo: iPhone 17 Pro Max.
// Métodos: Ligar, Desligar e Acessar Internet.

class iPhone {
    constructor(marca, cor, armazenamento, modelo) {
        this.marca = marca;
        this.cor = cor;
        this.armazenamento = armazenamento;
        this.modelo = modelo;
    }

    //Ligando o celular
    ligar() {
        console.log("O iPhone está ligado.");
    }

    //Desligando o celular
    desligar() {
        console.log("O iPhone está desligado.");
    }

    //Liberar o acesso à internet
    acessarInternet() {
        console.log("Acessando a internet...");
    }

}

const iphone = new iPhone("Apple", "Prateado", "512GB", "iPhone 17 Pro Max");
console.log("Iphone 17:", iphone);

console.log("----------------------------------");
console.log("Atributos do Iphone 17 Pro Max:");
console.log("- ", iphone.marca);
console.log("- ", iphone.cor);
console.log("- ", iphone.armazenamento);
console.log("- ", iphone.modelo);

iphone.ligar();
iphone.desligar();
iphone.acessarInternet();