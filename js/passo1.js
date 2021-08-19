function escolhaPasso1(personagem) {
    var passo1 = 0;
    var retorno = true;
    if (personagem == 1) {
        passo1 = prompt("Você escolheu a Princesa Peach! " +
            "\nEssa donzela veio direto do Reino dos Cogumelos conquistar um encontro, vamos ajudá-la? " +
            "\n1- Sim \n2- Não");
    } else if (personagem == 2) {
        passo1 = prompt("Você escolheu o Diddy Kong! " +
            "\nEsse famoso e simpático macaco está disposto a conquistar um encontro, vamos ajudá-lo? " +
            "\n1- Sim \n2- Não");
    } else if (personagem == 3) {
        passo1 = prompt("Você escolheu o Link! " +
            "\nEsse herói de The Legend of Zelda está animado para conquistar um encontro, vamos ajudá-lo? " +
            "\n1- Sim \n2- Não");
    } else {
        retorno = false;
    }

    if (passo1 == 1) {

    } else {
        retorno = false;
    }
    return retorno;
}