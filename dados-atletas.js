class Atleta {
  constructor(nome, idade, peso, altura, notas) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
    this.categoria = this.definirCategoria(); // calculada automaticamente
  }

  // calcula IMC
  calcularIMC() {
    return this.peso / (this.altura * this.altura);
  }

  // calcula média válida (eliminando maior e menor nota)
  calcularMediaValida() {
    let notasOrdenadas = [...this.notas].sort((a, b) => a - b);
    let notasComputadas = notasOrdenadas.slice(1, notasOrdenadas.length - 1);

    let soma = 0;
    notasComputadas.forEach(nota => soma += nota);

    return soma / notasComputadas.length;
  }

  // IF / ELSE IF / ELSE para definir categoria
  definirCategoria() {
    if (this.idade >= 9 && this.idade <= 11) {
      return "Infantil";
    } else if (this.idade >= 12 && this.idade <= 13) {
      return "Juvenil";
    } else if (this.idade >= 14 && this.idade <= 15) {
      return "Intermediário";
    } else if (this.idade >= 16 && this.idade <= 30) {
      return "Adulto";
    } else {
      return "Sem categoria";
    }
  }

  // exibe informações completas
  exibirInfo() {
    console.log(`Nome: ${this.nome}`);
    console.log(`Idade: ${this.idade}`);
    console.log(`Peso: ${this.peso}`);
    console.log(`Altura: ${this.altura}`);
    console.log(`Notas: ${this.notas.join(",")}`);
    console.log(`Categoria: ${this.categoria}`);
    console.log(`IMC: ${this.calcularIMC()}`);
    console.log(`Média válida: ${this.calcularMediaValida()}`);
    console.log("");
  }
}

// Exemplo de uso com vários atletas
let atletas = [
  new Atleta("Junior Souza", 30, 80, 1.7, [10, 9.34, 8.42, 10, 7.88]),
  new Atleta("Olavo de Carvalho", 13, 60, 1.65, [8, 10, 10, 7, 9.33]),
  new Atleta("Enéas Carneiro", 11, 45, 1.55, [7, 10, 9.5, 9.5, 8]),
  new Atleta("Nicolas Ferreira", 15, 70, 1.75, [10, 10, 10, 9, 9.5]),
  new Atleta("Tarcisio de Freitas", 35, 68, 1.68, [9, 8.5, 9.2, 10, 7.9])
];

// percorre todos os atletas e exibe ficha
atletas.forEach(atleta => atleta.exibirInfo());