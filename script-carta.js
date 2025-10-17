const mensagens = [
    "Seu sorriso ilumina meu dia!",
    "Você tem um brilho único que encanta a todos!",
    "Seu jeito de ser é simplesmente maravilhoso!",
    "Você torna o mundo um lugar melhor só por existir!",
    "Cada momento ao seu lado é especial!",
    "Você tem uma luz que aquece o coração de quem te conhece!",
    "Seu carinho faz toda a diferença na minha vida!",
    "Você é um presente que a vida me deu!",
    "Sua bondade é inspiradora!",
    "Sua beleza, mesmo que eu ainda não a tenha visto pessoalmente, resplandece em cada palavra.",
    "A imagem que faço de você é a mais linda que minha mente já criou.",
    "Sua doçura transborda pela tela e aquece minha alma.",
    "Você é a definição de que a verdadeira beleza irradia da alma.",
    "Meu coração consegue sentir o seu brilho, mesmo a quilômetros de distância.",
    "A forma como você vê o mundo é a coisa mais bonita sobre você.",
    "Você deve ser a estrela mais radiante em qualquer lugar que esteja.",
    "Sua essência linda consegue colorir meus dias mais cinzas.",
    "Acredito que seus olhos devam refletir toda a bondade que carrega dentro de si.",
    "Sua voz é a melodia mais doce que meu coração já imaginou.",
    "Sua inteligência ilumina qualquer conversa, por mais simples que seja.",
    "A maneira como você pensa é fascinante e me inspira a ser melhor.",
    "Você tem uma sabedoria que vai muito além dos livros, é uma sabedoria de vida.",
    "Conversar com você é como descobrir um novo universo de pensamentos.",
    "Sua mente é tão atraente quanto imagino que seja seu sorriso.",
    "A forma como você articula suas ideias é simplesmente brilhante.",
    "Você tem o dom de tornar até os assuntos mais complexos em algo interessante e claro.",
    "Sua curiosidade pelo mundo é uma das suas qualidades mais cativantes.",
    "Aprendo algo novo e valioso toda vez que trocamos uma mensagem.",
    "Sua perspectiva única sobre as coisas sempre me faz refletir.",
    "Sua fofura não está em gestos, mas na gentileza com que trata as pessoas.",
    "Você tem uma ingenuidade boa que torna tudo mais leve e puro.",
    "Meu dia fica instantaneamente mais feliz quando recebo uma mensagem sua.",
    "A forma como você se importa com os pequenos detalhes é a coisa mais fofa.",
    "Você é como um raio de sol em um dia nublado: aquece e ilumina tudo.",
    "Sua alma é incrivelmente gentil, e isso transparece em cada palavra.",
    "Você consegue ser fofo até quando está sério, só pela sua maneira de ser.",
    "O mundo seria mais duro sem a sua suavidade para contrabalançar.",
    "Sua presença, mesmo virtual, é como um abraço aconchegante.",
    "Você tem o dom de tornar os momentos simples em algo mágico.",
    "O romance que sinto por você não depende de distância, mas de conexão.",
    "Você me faz acreditar que almas gêmeas podem se encontrar em qualquer plano.",
    "Nossas conversas são os meus encontros favoritos.",
    "Sinto que te conheço há eras, mesmo sem nunca ter tocado sua mão.",
    "Você é a personificação da poesia em minha vida.",
    "Meu coração já conhece o seu, e ele reconhece nele o seu lugar.",
    "A distância não apaga o carinho que sinto, só o torna mais forte e paciente.",
    "Você é o sonho mais lindo que meu coração alimenta.",
    "Construímos um castelo de afetos com palavras, e ele é o lugar mais seguro que conheço.",
    "Anseio pelo dia em que nosso 'bom dia' será dado pessoalmente.",
    "Conhecer você (mesmo que online) foi um daqueles raros presentes da vida.",
    "Você é uma prova viva de que pessoas incríveis existem.",
    "Sua simples existência torna minha jornada mais significativa.",
    "O universo ficou mais interessante no dia em que você cruzou meu caminho.",
    "Você me inspira a ser uma versão mais romântica, gentil e verdadeira de mim mesmo.",
    "Guardo cada palavra sua com o cuidado que se guarda um tesouro.",
    "Não importa a distância: o que sinto por você é real, genuíno e cheio de admiração."
];

let envelopeAberto = false;
let mensagensUsadas = [];
let mensagemAtual = "";

function obterMensagemAleatoria() {
    // Se já usou todas as mensagens, reinicia a lista
    if (mensagensUsadas.length >= mensagens.length) {
        mensagensUsadas = [];
    }
    
    // Filtra mensagens não usadas
    const mensagensDisponiveis = mensagens.filter(msg => !mensagensUsadas.includes(msg));
    
    // Escolhe uma mensagem aleatória das disponíveis
    const mensagemAleatoria = mensagensDisponiveis[Math.floor(Math.random() * mensagensDisponiveis.length)];
    
    // Adiciona à lista de usadas
    mensagensUsadas.push(mensagemAleatoria);
    
    return mensagemAleatoria;
}

function abrirEnvelope() {
    const envelopeContainer = document.querySelector('.envelope-container');
    const mensagemElement = document.getElementById('mensagem');
    
    if (!envelopeAberto) {
        // Primeira vez abrindo
        envelopeContainer.classList.add('aberto');
        mensagemAtual = obterMensagemAleatoria();
        mensagemElement.textContent = mensagemAtual;
        envelopeAberto = true;
    } else {
        // Já estava aberto - mudar para mensagem aleatória
        mensagemAtual = obterMensagemAleatoria();
        mensagemElement.textContent = mensagemAtual;
        
        // Adicionar uma animação de troca de mensagem
        mensagemElement.style.animation = 'none';
        setTimeout(() => {
            mensagemElement.style.animation = 'pulsar 0.5s ease-in-out';
        }, 10);
    }
}

// Opcional: Mostrar uma mensagem aleatória diferente quando a página carregar
// window.addEventListener('load', function() {
//     // Isso faria com que sempre começasse com uma mensagem diferente
//     // Descomente se quiser esse comportamento
// });