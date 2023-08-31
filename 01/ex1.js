const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "a"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
}

corrigeProva(prova);

function corrigeProva(teste) {
    let acertos = 0;
    for (let i = 0; i < teste.questoes.length; i++) {
        if (teste.questoes[i].resposta === teste.questoes[i].correta) {
            acertos = acertos + 1;
        }
    }

    console.log(`O aluno ${teste.aluno} acertou ${acertos} questões e obteve nota ${acertos * 2}`);
};