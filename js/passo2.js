function escolhaPasso2(personagem) {
    var retorno = true;
    var passo2 = prompt("Qual tipo de presente seu pretendente iria gostar? " +
        "\n1-Saco de Moeda \n2-Cavalo \n3-Rádio \n4-Boina");
    if (personagem == 1 && passo2 == 1) {
        alert("Parabéns, vc foi para o próximo passo!");
    } else if (personagem == 2 && passo2 == 4) {
        alert("Parabéns, vc foi para o próximo passo!");
    } else if (personagem == 3 && passo2 == 2) {
        alert("Parabéns, vc foi para o próximo passo!");
    } else {
        retorno = false;
    }
    return retorno;
}