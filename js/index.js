function iniciar() {
    alert("Olá, este jogo tem o objetivo de ajudar nossos heróis a realizar um encontro!");
    var personagem = prompt("Escolha um personagem: \n1-Princesa Peach \n2-Donkey Kong \n3-Link");
    var resultado = false;
    var personagemValido = false;
    while (personagem < 4 && personagem > 0) {
        personagemValido = true;
        if (!escolhaPasso1(personagem)) {
            break;
        }
        if (!escolhaPasso2(personagem)) {
            break;
        }
        if (!escolhaPasso3(personagem)) {
            break;
        }
        if (!escolhaPasso4(personagem)) {
            break;
        }
        resultado = true;
        break;
    }
    if (!resultado) {
        if (personagemValido) {
            document.write(`
                <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Conquest Date</title>
                        <link rel="stylesheet" href="css/index.css">
                        <script src="js/index.js"></script>
                        <script src="js/passo1.js"></script>
                        <script src="js/passo2.js"></script>
                        <script src="js/passo3.js"></script>
                        <script src="js/passo4.js"></script>
                    </head>
                    <body>
                        <div class="titulo">
                            <h1>Conquest Date</h1>
                            <h2>Game Over! Não é hoje que seu personagem vai conseguir um encontro!.</h2>
                        </div>
                        <div class="personagens">
                        `
                        +
                        escolherPersonagemTriste(personagem)
                        +
                        `
                        </div>
                        <div class="botao">
                            <button class="btn" onClick="window.location.reload()">Voltar ao Início</button>
                        </div>
                        <div>
                            <footer>
                                Jogo criado por <a href="#">Débora Brito</a>
                            </footer>
                        </div>
                    </body>
                </html>
            `);
        } else {
            document.write(`
            <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Conquest Date</title>
                        <link rel="stylesheet" href="css/index.css">
                        <script src="js/index.js"></script>
                        <script src="js/passo1.js"></script>
                        <script src="js/passo2.js"></script>
                        <script src="js/passo3.js"></script>
                        <script src="js/passo4.js"></script>
                    </head>
                    <body>
                        <div class="titulo">
                            <h1>Conquest Date</h1>
                            <h2>Game Over! Esse personagem é inválido!</h2>
                        </div>
                        <div class="personagens">
                        `
                        +
                        erroPersonagem()
                        +
                        `
                        </div>
                        <div class="botao">
                            <button class="btn" onClick="window.location.reload()">Voltar ao Início</button>
                        </div>
                        <div>
                            <footer>
                                Jogo criado por <a href="#">Débora Brito</a>
                            </footer>
                        </div>
                    </body>
                </html>
            `);
        }
    } else {
        document.write(`
            <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Conquest Date</title>
                        <link rel="stylesheet" href="css/index.css">
                        <script src="js/index.js"></script>
                        <script src="js/passo1.js"></script>
                        <script src="js/passo2.js"></script>
                        <script src="js/passo3.js"></script>
                        <script src="js/passo4.js"></script>
                    </head>
                    <body>
                        <div class="titulo">
                            <h1>Conquest Date</h1>
                            <h2>P A R A B É N S !!! </h2>
                        </div>
                        <div class="personagens">
                        `
                        +
                        escolherPersonagemFinalFeliz(personagem)
                        +
                        `
                        </div>
                        <div class="botao">
                            <button class="btn" onClick="window.location.reload()">Voltar ao Início</button>
                        </div>
                        <div>
                            <footer>
                                Jogo criado por <a href="#">Débora Brito</a>
                            </footer>
                        </div>
                    </body>
                </html>
            `);
    }
}

function escolherPersonagemTriste(personagem){
    if(personagem == 1){
        return `<img class="img-personagens" src="imagens/princesa_triste.png"></img>`;
    }else if(personagem == 2){
        return `<img class="img-personagens" src="imagens/diddy_kong_triste.png">`;
    }else if(personagem == 3){
        return `<img class="img-personagens" src="imagens/link_triste.png">`;
    }
}

function erroPersonagem(){
    return `<img class="img-personagens" src="imagens/erro.png">`;
}

function escolherPersonagemFinalFeliz(personagem){
    if(personagem == 1){
        return `<img class="img-personagens" src="imagens/princesa_feliz.png"></img>`;
    }else if(personagem == 2){
        return `<img class="img-personagens" src="imagens/diddy_kong_feliz.png">`;
    }else if(personagem == 3){
        return `<img class="img-personagens" src="imagens/link_feliz.png">`;
    }
}

function escolherPersonagemFinal(personagem){
    if(personagem == 1){
        return `<img class="img-personagens" src="imagens/princesa-peach.png"></img>`;
    }else if(personagem == 2){
        return `<img class="img-personagens" src="imagens/diddy_kong.png">`;
    }else if(personagem == 3){
        return `<img class="img-personagens" src="imagens/link-zelda.png">`;
    }
}