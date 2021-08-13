alert("Olá, este jogo tem o objetivo de ajudar nossos heróis a realizar um encontro!");
var personagem = prompt("Escolha um personagem: \n1-Princesa Peach \n2-Donkey Kong \n3-Link");
if (personagem > 3 || personagem < 1) {
    console.log(personagem);
    alert("Game Over - Personagem Inválido");
} else {

    if (personagem == 1) {
        var passo1 = prompt("Você escolheu a Princesa Peach! " +
            "\nEssa donzela veio direto do Reino dos Cogumelos conquistar um encontro, vamos ajudá-la? " +
            "\n1- Sim \n2- Não");
            escolhaPasso1(passo1);
            escolhaPasso2(personagem);
            escolhaPasso3(personagem);
            escolhaPasso4(personagem);

    } else if (personagem == 2) {
        var passo1 = prompt("Você escolheu o Donkey Kong! " +
            "\nEsse famoso e terrível macaco está disposto a conquistar um encontro, vamos ajudá-lo? " +
            "\n1- Sim \n2- Não");
            escolhaPasso1(passo1);
            escolhaPasso2(personagem);
            escolhaPasso3(personagem);
            escolhaPasso4(personagem);

    } else if (personagem == 3) {
        var passo1 = prompt("Você escolheu o Link! " +
            "\nEsse herói de The Legend of Zelda está animado para conquistar um encontro, vamos ajudá-lo? " +
            "\n1- Sim \n2- Não");
            escolhaPasso1(passo1);
            escolhaPasso2(personagem);
            escolhaPasso3(personagem);
            escolhaPasso4(personagem);

    } else {
        alert("Game Over - Personagem Inválido");
    }

}

function escolhaPasso1(passo1){
    if(passo1 == 1){
        alert("Legal! Vamos para o próximo passo!");
    }else{
        alert("Game Over - Não é hoje que nosso personagem vai conseguir um encontro!");
    }
}
function escolhaPasso2(personagem){
    var passo2 = prompt("Qual tipo de presente seu pretendente iria gostar? "+
    "\n1-Saco de Moeda \n2-Cavalo \n3-Rádio \n4-Boina");
    if(personagem == 1 && passo2 == 1){
        alert("Parabéns, vc foi para o próximo passo!");
    }else if(personagem == 2 && passo2 == 4){
        alert("Parabéns, vc foi para o próximo passo!");
    }else if(personagem == 3 && passo2 == 2){
        alert("Parabéns, vc foi para o próximo passo!");
    }else{
        alert("Game Over - Não é hoje que nosso personagem vai conseguir um encontro!");
    }

}

function escolhaPasso3(personagem){
    var passo3 = prompt("Qual seria a comida que seu pretendente iria gostar? "+
    "\n1-Banana \n2-Cogumelo \n3-Alface \n4-Fruta e Carne");
    if(personagem == 1 && passo3 == 2){
        alert("Parabéns, vc foi para o próximo passo!");
    }else if(personagem == 2 && passo3 == 1){
        alert("Parabéns, vc foi para o próximo passo!");
    }else if(personagem == 3 && passo3 == 4){
        alert("Parabéns, vc foi para o próximo passo!");
    }else{
        alert("Game Over - Não é hoje que nosso personagem vai conseguir um encontro!");
    }

}

function escolhaPasso4(personagem){
    var passo4 = prompt("O que o seu pretendente curte fazer? "+
    "\n1-Jogar videogame \n2-Correr \n3-Pular pelas Árvores \n4-Cavalgar");
    if(personagem == 1 && passo4 == 2){
        alert("Parabéns, vc conseguiu seu encontro!");
    }else if(personagem == 2 && passo4 ==3){
        alert("Parabéns, vc conseguiu seu encontro!");
    }else if(personagem == 3 && passo4 == 4){
        alert("Parabéns, vc conseguiu seu encontro!");
    }else{
        alert("Game Over - Não é hoje que nosso personagem vai conseguir um encontro!");
    }

}