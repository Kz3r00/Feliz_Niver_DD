// Todas as mensagens românticas
const mensagens = [
    "Feliz aniversário! Que este novo ciclo traga tudo de melhor para você!",
    "Indepedente de qualquer coisa sempre vou te amar", // VÍRGULA ADICIONADA
    "Desejo que sua vida seja repleta de alegrias, conquistas e momentos especiais!",
    "Que cada dia do seu novo ano de vida seja abençoado com felicidade e paz!",
    "Você merece todo o amor e felicidade do mundo! Tenha um dia maravilhoso!",
    "Que seu coração transborde de alegria hoje e sempre! Feliz aniversário!",
    "Você é uma pessoa incrível e merece as melhores coisas da vida!",
    "Que este novo ano traga realizações magníficas e sonhos alcançados!",
    "Sua luz merece brilhar ainda mais! Celebre este dia especial!",
    "Que a vida te reserve as mais belas surpresas e momentos felizes!",
    "Você é magnífica em todos os aspectos que conheço! Brilhe sempre!",
    "Admiro muito a pessoa que você é! Que continue inspirando todos ao redor!",
    "Seu aniversário é merecedor de todas as celebrações! Aproveite cada momento!",
    "Que sua jornada seja iluminada e cheia de conquistas especiais!",
    "Você traz luz por onde passa! Que receba de volta toda essa energia positiva!",
    "Merece toda a felicidade que a vida pode oferecer! Feliz aniversário!",
    "Que este novo capítulo seja o mais incrível da sua história até agora!",
    "Sua essência única merece ser celebrada todos os dias!",
    "Que os ventos soprem a seu favor e realizem seus melhores desejos!",
    "A vida reserva coisas lindas para pessoas especiais como você!",
    "Que este dia seja memorável e marque o início de um ano extraordinário!",
    "Sua bondade e beleza interior merecem reconhecimento e celebração!",
    "Que cada momento do seu dia seja tão especial quanto você é!",
    "O universo conspira a favor da sua felicidade! Acredite!",
    "Você é uma estrela que merece brilhar com intensidade!",
    "Que este aniversário seja o ponto de partida para conquistas incríveis!",
    "Sua jornada é inspiradora! Continue sendo essa pessoa maravilhosa!",
    "Que a gratidão e alegria preencham seu coração hoje e sempre!",
    "Merece tudo de bom que a vida tem para oferecer! Celebre muito!",
    "Que seus sonhos mais queridos se realizem neste novo ano de vida!",
    "Você é uma bênção na vida de quem te conhece! Feliz aniversário!"
];

// Variáveis de controle
let mensagensLidas = [];
let cartaAberta = false;

// Função para pegar mensagem aleatória (sem repetir)
function pegarMensagem() {
    if (mensagensLidas.length === mensagens.length) {
        mensagensLidas = [];
    }
    
    const disponiveis = mensagens.filter(msg => !mensagensLidas.includes(msg));
    const escolhida = disponiveis[Math.floor(Math.random() * disponiveis.length)];
    mensagensLidas.push(escolhida);
    
    return escolhida;
}

// Função principal com efeito de abrir/fechar
function abrirEnvelope() {
    const envelope = document.querySelector('.envelope-container');
    const carta = document.getElementById('mensagem');
    
    if (!cartaAberta) {
        // Abre o envelope
        envelope.classList.add('aberto');
        carta.textContent = pegarMensagem();
        cartaAberta = true;
    } else {
        // Fecha o envelope se clicar novamente (opcional)
        if (envelope.classList.contains('aberto')) {
            envelope.classList.remove('aberto');
            cartaAberta = false;
            carta.textContent = ''; // Limpa a mensagem ao fechar
        }
    }
}

// Garante que a função está disponível globalmente
window.abrirEnvelope = abrirEnvelope;
