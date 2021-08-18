function escolhaPasso4(personagem) {
    var retorno = false;
    var passo4 = prompt("O que o seu pretendente curte fazer? " +
        "\n1-Jogar videogame \n2-Correr \n3-Pular pelas Árvores \n4-Cavalgar");
    if (personagem == 1 && passo4 == 2) {
        retorno = true;
    } else if (personagem == 2 && passo4 == 3) {
        retorno = true;
    } else if (personagem == 3 && passo4 == 4) {
        retorno = true;
    }
    return retorno;
}