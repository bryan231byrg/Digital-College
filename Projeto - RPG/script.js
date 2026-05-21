// Projeto - RPG

// Personagem e equipamento

const personagem = {
    vida: 100,
    ataque: 10,
    defesa: 5,
};

const equipamento = {
    espada: {
        ataque: 5,
    },
    armadura: {
        defesa: 3,
    },
};

// Cálculo de dano

function calcularDano(ataque, defesa) {
    const dano = ataque - defesa;
    return dano > 0 ? dano : 0;
}

// Criando as fases

const fases = [
    {
        fase: 1,
        nome: "Floresta Sombria",
        inimigo: {
            vida: 80,
            ataque: 8,
            defesa: 4,
        }
    },
    {
        fase: 2,
        nome: "Caverna do Dragão",
        inimigo: {
            vida: 120,
            ataque: 12,
            defesa: 6,
        }
    },
    {
        fase: 3,
        nome: "Castelo do Lorde das Trevas",
        inimigo: {
            vida: 150,
            ataque: 15,
            defesa: 10,
        }
    },
];

// Próxima fase

function proximaFase(fases, personagem) {
    for (const fase of fases) {

        alert(`Entrando na fase: ${fase.nome}`);

        batalha(personagem, fase.inimigo);

        if (personagem.vida <= 0) {
            alert("Game Over!");
            return;
        } else {
            alert(`Fase ${fase.fase} concluída!`);
        }
    }

    alert("Parabéns! Você zerou o jogo!");
}

// Simulação de batalha

function batalha(personagem, inimigo) {

    while (personagem.vida > 0 && inimigo.vida > 0) {

        // Personagem ataca
        const danoPersonagem = calcularDano(
            personagem.ataque + equipamento.espada.ataque,
            inimigo.defesa
        );

        inimigo.vida -= danoPersonagem;

        alert(
            `Você causou ${danoPersonagem} de dano!\nVida do inimigo: ${inimigo.vida}`
        );

        // Verifica se inimigo morreu
        if (inimigo.vida <= 0) {
            alert("Inimigo derrotado!");
            break;
        }

        // Inimigo ataca
        const danoInimigo = calcularDano(
            inimigo.ataque,
            personagem.defesa + equipamento.armadura.defesa
        );

        personagem.vida -= danoInimigo;

        alert(
            `O inimigo causou ${danoInimigo} de dano!\nSua vida: ${personagem.vida}`
        );
    }
}

// Início do jogo

const nomeJogador = prompt("Digite o nome do seu personagem:");

alert(`Bem-vindo ao RPG, ${nomeJogador}! Prepare-se para a aventura!`);

// Iniciar jogo
proximaFase(fases, personagem);