"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const meuCarro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    portas: 4,
    acelerar: () => "O carro está acelerando!"
};
const minhaMoto = {
    marca: "Honda",
    modelo: "CB 500",
    ano: 2021,
    cilindradas: 500,
    acelerar: () => "A moto está acelerando!"
};
function exibirDetalhesVeiculo(veiculo) {
    console.log("=== Detalhes do Veículo ===");
    console.log(`Marca: ${veiculo.marca}`);
    console.log(`Modelo: ${veiculo.modelo}`);
    console.log(`Ano: ${veiculo.ano}`);
    if ("portas" in veiculo) {
        console.log(`Portas: ${veiculo.portas}`);
    }
    else if ("cilindradas" in veiculo) {
        console.log(`Cilindradas: ${veiculo.cilindradas} cc`);
    }
    console.log(veiculo.acelerar());
    console.log("-------------------------");
}
exibirDetalhesVeiculo(meuCarro);
exibirDetalhesVeiculo(minhaMoto);
