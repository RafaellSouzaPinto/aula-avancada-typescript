export class EstoqueVeiculos<T> {
    private estoque: { [modelo: string]: number } = {};

    adicionarEstoque(modelo: string, quantidade: number): void {
        if (this.estoque[modelo]) {
            this.estoque[modelo] += quantidade;
        } else {
            this.estoque[modelo] = quantidade;
        }
        console.log(`Adicionados ${quantidade} unidades do modelo ${modelo} ao estoque.`);
    }

    removerEstoque(modelo: string): void {
        if (this.estoque[modelo]) {
            this.estoque[modelo]--;
            console.log(`Uma unidade do modelo ${modelo} foi removida do estoque.`);
            if (this.estoque[modelo] <= 0) {
                delete this.estoque[modelo];
                console.log(`O modelo ${modelo} está esgotado.`);
            }
        } else {
            console.log(`O modelo ${modelo} não está disponível no estoque.`);
        }
    }

    consultarEstoque(modelo: string): void {
        if (this.estoque[modelo]) {
            console.log(`Estoque do modelo ${modelo}: ${this.estoque[modelo]} unidades.`);
        } else {
            console.log(`O modelo ${modelo} não está disponível no estoque.`);
        }
    }

    listarEstoque(): void {
        console.log("=== Estoque de Veículos ===");
        if (Object.keys(this.estoque).length === 0) {
            console.log("Nenhum veículo disponível no estoque.");
        } else {
            for (const modelo in this.estoque) {
                console.log(`${modelo}: ${this.estoque[modelo]} unidades`);
            }
        }
        console.log("===========================");
    }
}
