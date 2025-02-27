import { Carro } from "./interface/Carro";
import { Moto } from "./interface/Moto";
import { GerenciadorVeiculos } from "./classes/GerenciadorVeiculos";

const gerenciadorCarros = new GerenciadorVeiculos<Carro>();
const gerenciadorMotos = new GerenciadorVeiculos<Moto>();

// Criando veículos
const carro1: Carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    portas: 4,
    acelerar: () => "O carro está acelerando!"
};

const carro2: Carro = {
    marca: "Ford",
    modelo: "Focus",
    ano: 2020,
    portas: 4,
    acelerar: () => "O carro está acelerando rapidamente!"
};

const moto1: Moto = {
    marca: "Honda",
    modelo: "CB 500",
    ano: 2021,
    cilindradas: 500,
    acelerar: () => "A moto está acelerando!"
};

gerenciadorCarros.adicionar(carro1);
gerenciadorCarros.adicionar(carro2);
gerenciadorMotos.adicionar(moto1);

gerenciadorCarros.listarVeiculos();
gerenciadorMotos.listarVeiculos();

gerenciadorCarros.remover(carro1);

gerenciadorCarros.listarVeiculos();