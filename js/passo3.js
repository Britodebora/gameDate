function escolhaPasso3(personagem) {
    var retorno = false;
    var passo3 = prompt("Qual seria a comida que seu pretendente iria gostar? " +
        "\n1-Banana \n2-Cogumelo \n3-Alface \n4-Fruta e Carne");
    if (personagem == 1 && passo3 == 2) {
        retorno = true;
    } else if (personagem == 2 && passo3 == 1) {
        retorno = true;
    } else if (personagem == 3 && passo3 == 4) {
        retorno = true;
    } else {
        retorno = false;
    }
    return retorno;
}