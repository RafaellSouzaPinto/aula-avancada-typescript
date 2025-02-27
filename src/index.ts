import { Carro } from "./interface/Carro";
import { Moto } from "./interface/Moto";
import { GerenciadorVeiculos } from "./classes/GerenciadorVeiculos";
import { EstoqueVeiculos } from "./classes/EstoqueVeiculos";

const gerenciadorCarros = new GerenciadorVeiculos<Carro>();
const gerenciadorMotos = new GerenciadorVeiculos<Moto>();
const estoque = new EstoqueVeiculos<string>();

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

estoque.adicionarEstoque("Corolla", 5);
estoque.adicionarEstoque("Focus", 3);
estoque.adicionarEstoque("CB 500", 7);

estoque.listarEstoque();

estoque.removerEstoque("Corolla");

estoque.consultarEstoque("Corolla");
estoque.listarEstoque();