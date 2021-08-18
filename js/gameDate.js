function iniciar() {
    alert("Olá, este jogo tem o objetivo de ajudar nossos heróis a realizar um encontro!");
    var personagem = prompt("Escolha um personagem: \n1-Princesa Peach \n2-Donkey Kong \n3-Link");
    var resultado = false;
    var personagemValido = false;
    while (personagem < 4 && personagem > 0) {
            personagemValido = true;
            if(!escolhaPasso1(personagem)){
                break;
            } 
            if(!escolhaPasso2(personagem)){
                break;
            }
            if(!escolhaPasso3(personagem)){
                break;
            }
            if(!escolhaPasso4(personagem)){
                break;
            }
            resultado = true;
            break;
    }
    if(!resultado){
        if(personagemValido){
            alert("Game Over - Não é hoje que nosso personagem vai conseguir um encontro!");
        }else{
            alert("Game Over - O personagem não é válido!");
        }
    }else{
        alert("Parabéns! Seu herói conseguiu um encontro! \n--FIM DE JOGO!--");
    }
}


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
        alert("Legal! Vamos para o próximo passo!");
    } else {
        retorno = false;
    }
    return retorno;
}
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

function escolhaPasso4(personagem) {
    var retorno = true;
    var passo4 = prompt("O que o seu pretendente curte fazer? " +
        "\n1-Jogar videogame \n2-Correr \n3-Pular pelas Árvores \n4-Cavalgar");
    if (personagem == 1 && passo4 == 2) {
        return;
    } else if (personagem == 2 && passo4 == 3) {
        return;
    } else if (personagem == 3 && passo4 == 4) {
        return;
    } else {
        retorno = false;
    }
    return retorno;
}