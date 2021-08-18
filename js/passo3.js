function escolhaPasso3(personagem) {
    var retorno = true;
    var passo3 = prompt("Qual seria a comida que seu pretendente iria gostar? " +
        "\n1-Banana \n2-Cogumelo \n3-Alface \n4-Fruta e Carne");
    if (personagem == 1 && passo3 == 2) {
        alert("Parabéns, vc foi para o próximo passo!");
    } else if (personagem == 2 && passo3 == 1) {
        alert("Parabéns, vc foi para o próximo passo!");
    } else if (personagem == 3 && passo3 == 4) {
        alert("Parabéns, vc foi para o próximo passo!");
    } else {
        retorno = false;
    }
    return retorno;
}