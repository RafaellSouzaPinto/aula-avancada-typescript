export class GerenciadorVeiculos<T> {
    private veiculos: T[] = [];

    adicionar(veiculo: T): void {
        this.veiculos.push(veiculo);
        console.log("Veículo adicionado com sucesso!");
    }

    remover(veiculo: T): void {
        const index = this.veiculos.indexOf(veiculo);
        if (index !== -1) {
            this.veiculos.splice(index, 1);
            console.log("Veículo removido com sucesso!");
        } else {
            console.log("Veículo não encontrado.");
        }
    }

    listarVeiculos(): void {
        console.log("=== Lista de Veículos ===");
        this.veiculos.forEach((veiculo, index) => {
            console.log(`${index + 1}.`, veiculo);
        });
        console.log("=========================");
    }
}
