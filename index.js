const readline = require('readline');

// Cria a interface para entrada e saída no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// --- FUNÇÃO PRINCIPAL (CORE DO NEGÓCIO) ---
function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo (Requisito: Operadores e Variáveis)
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    // Estrutura de Decisão para definir o nível
    // Optei por validar o SALDO, pois faz mais sentido lógico para um sistema de rank
    if (saldoVitorias < 10) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 10 && saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário";
    } else if (saldoVitorias >= 101) {
        nivel = "Imortal";
    }

    // Retorna um objeto para facilitar o uso dos dados
    return { saldoVitorias, nivel };
}

// --- FUNÇÃO DE INTERAÇÃO (LOOP) ---
function iniciarSimulacao() {
    console.clear();
    console.log("=== ⚔️  CALCULADORA DE RANKING DO HERÓI ⚔️  ===");

    rl.question("Digite o número de vitórias: ", (vit) => {
        rl.question("Digite o número de derrotas: ", (der) => {
            
            // Converte as entradas para números
            const vitorias = parseInt(vit);
            const derrotas = parseInt(der);

            // Validação simples
            if (isNaN(vitorias) || isNaN(derrotas)) {
                console.log("❌ Por favor, digite apenas números válidos.");
            } else {
                // Chamada da função (Requisito: Funções)
                const resultado = calcularNivel(vitorias, derrotas);
                
                // Saída formatada (Requisito: Saída esperada)
                console.log(`\n---------------------------------------------------`);
                console.log(`O Herói tem de saldo de **${resultado.saldoVitorias}** está no nível de **${resultado.nivel}**`);
                console.log(`---------------------------------------------------\n`);
            }

            // Laço de Repetição (Requisito: Laços)
            // Pergunta se quer continuar, criando um loop de interação
            rl.question("Deseja calcular novamente? (S/N): ", (resposta) => {
                if (resposta.toUpperCase() === 'S') {
                    iniciarSimulacao(); // Chama a função novamente (Recursividade atuando como loop)
                } else {
                    console.log("Encerrando sistema... Até a próxima batalha! 👋");
                    rl.close();
                }
            });
        });
    });
}

// Inicia o programa
iniciarSimulacao();
