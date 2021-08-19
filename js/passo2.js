function escolhaPasso2(personagem) {
    var retorno = false;
    var passo2 = prompt("Qual tipo de presente seu pretendente iria gostar? " +
        "\n1-Saco de Moeda \n2-Cavalo \n3-Rádio \n4-Boina");
    if (personagem == 1 && passo2 == 1) {
        retorno = true;
    } else if (personagem == 2 && passo2 == 4) {
        retorno = true;
    } else if (personagem == 3 && passo2 == 2) {
        retorno = true;
    } else {
        retorno = false;
    }
    return retorno;
}