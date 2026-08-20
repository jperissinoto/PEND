// Objeto: Aluno
// Atributos: nome, idade, curso, email
// Métodos: estudar(), assistirAula(), fazerProva()

class Aluno {
    constructor(nome, idade, curso, email) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.email = email;
    }

    estudar() {
        console.log("${this.nome} está estudando!");
    }

    assistirAula() {
        console.log("${this.nome} está assistindo a aula!");
    }

    fazerProva() {
        console.log("${this.nome} está fazendo a prova!");
    }
}

const aluno1 = new Aluno("Beatriz", 18, "Psicologia", "biagoncalves@email.com");

const aluno2 = new Aluno("Bruna", 17, "Veterinária", "bruna@email.com");

const aluno3 = new Aluno("Nubia", 17, "Educação Física", "nubia@email.com");

aluno1.estudar();
aluno2.assistirAula();
aluno3.fazerProva();

console.log("---------------------------------");
console.log("Atributos do Aluno 1: ");
console.log("- ", aluno1.nome);
console.log("- ", aluno1.idade);
console.log("- ", aluno1.curso);
console.log("- ", aluno1.email);
console.log("---------------------------------");

console.log("Atributos do Aluno 2: ");      
console.log("- ", aluno2.nome);
console.log("- ", aluno2.idade);
console.log("- ", aluno2.curso);
console.log("- ", aluno2.email);
console.log("---------------------------------");

console.log("Atributos do Aluno 3: ");  
console.log("- ", aluno3.nome);
console.log("- ", aluno3.idade);
console.log("- ", aluno3.curso);
console.log("- ", aluno3.email);
console.log("---------------------------------");