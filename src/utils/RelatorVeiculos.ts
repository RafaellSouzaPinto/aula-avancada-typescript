import { Veiculo } from "../interface/Veiculo";
export class RelatorioVeiculos {
    static gerarRelatorio(veiculos: Veiculo[]): string {
        if (veiculos.length === 0) {
            return "Nenhum veículo cadastrado.";
        }

        let relatorio = "📋 RELATÓRIO DE VEÍCULOS 📋\n\n";
        
        veiculos.forEach((veiculo, index) => {
            relatorio += `🚗 Veículo ${index + 1}:\n`;
            relatorio += `   - Marca: ${veiculo.marca}\n`;
            relatorio += `   - Modelo: ${veiculo.modelo}\n`;
            relatorio += `   - Ano: ${veiculo.ano}\n`;

            if ("portas" in veiculo) {
                relatorio += `   - Portas: ${(veiculo as any).portas}\n`;
            }

            if ("cilindradas" in veiculo) {
                relatorio += `   - Cilindradas: ${(veiculo as any).cilindradas}cc\n`;
            }

            relatorio += "----------------------------------\n";
        });

        return relatorio;
    }
}
