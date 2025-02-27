import { Veiculo } from "../interface/Veiculo";

export class FiltroVeiculos {
    static filtrarPorAno(veiculos: Veiculo[], ano: number): Veiculo[] {
        return veiculos.filter(veiculo => veiculo.ano === ano);
    }

    static filtrarPorMarca(veiculos: Veiculo[], marca: string): Veiculo[] {
        return veiculos.filter(veiculo => veiculo.marca.toLowerCase() === marca.toLowerCase());
    }

    static filtrarPorModelo(veiculos: Veiculo[], modelo: string): Veiculo[] {
        return veiculos.filter(veiculo => veiculo.modelo.toLowerCase() === modelo.toLowerCase());
    }
}
