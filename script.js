// --- BANCO DE DADOS COMPLETO ---
const deck = [
    // Originais
    { word: "TAPETE VOADOR", forbidden: ["MAGIA", "GÊNIO", "ALADDIN", "FLUTUAR", "CARPETE"] },
    { word: "SACI-PERERÊ", forbidden: ["FOLCLORE", "CACHIMBO", "CARAPUÇA", "PERNA", "PULAR"] },
    { word: "INTERNET", forbidden: ["WIFI", "COMPUTADOR", "CONEXÃO", "REDE", "ONLINE"] },
    { word: "FUTEBOL", forbidden: ["BOLA", "GOL", "NEYMAR", "ESPORTE", "CAMPO"] },
    { word: "PIZZA", forbidden: ["QUEIJO", "ITALIA", "MASSA", "REDONDA", "CALABRESA"] },
    { word: "VAMPIRO", forbidden: ["SANGUE", "DENTES", "DRÁCULA", "MORCEGO", "SOL"] },
    { word: "LUTHOR CORP", forbidden: ["LENA", "EMPRESA", "TECNOLOGIA", "SUPERMAN", "METROPOLIS"] },
    
    // Animais
    { word: "CACHORRO", forbidden: ["OSSO", "LATIR", "AMIGO", "ANIMAL", "PET"] },
    { word: "GATO", forbidden: ["MIAU", "LEITE", "FELINO", "RATO", "BIGODE"] },
    { word: "LEÃO", forbidden: ["REI", "SELVA", "JUBA", "ANIMAL", "RUGIDO"] },
    { word: "ELEFANTE", forbidden: ["TROMBA", "GRANDE", "ORELHA", "PESADO", "CINZA"] },
    { word: "TUBARÃO", forbidden: ["MAR", "DENTE", "PEIXE", "ATAQUE", "BARBATANA"] },
    { word: "MACACO", forbidden: ["BANANA", "ÁRVORE", "SELVA", "ANIMAL", "PULAR"] },
    { word: "GIRAFA", forbidden: ["PESCOÇO", "ALTA", "ANIMAL", "ZOOLÓGICO", "AMARELA"] },

    // Comidas
    { word: "HAMBÚRGUER", forbidden: ["SANDUÍCHE", "CARNE", "QUEIJO", "FAST FOOD", "MCDONALDS"] },
    { word: "SORVETE", forbidden: ["GELADO", "CASQUINHA", "SABOR", "DOCE", "VERÃO"] },
    { word: "CAFÉ", forbidden: ["BEBIDA", "QUENTE", "MANHÃ", "PRETO", "ACORDAR"] },
    { word: "ARROZ", forbidden: ["FEIJÃO", "BRANCO", "COMIDA", "GRÃO", "ALMOÇO"] },
    { word: "BATATA FRITA", forbidden: ["ÓLEO", "SALGADO", "LANCHE", "BATATA", "CROCANTE"] },
    { word: "CHOCOLATE", forbidden: ["DOCE", "CACAU", "LEITE", "PÁSCOA", "BOMBOM"] },
    { word: "CHURRASCO", forbidden: ["CARNE", "BRASA", "CARVÃO", "ESPETO", "DOMINGO"] },
    { word: "PIPOCA", forbidden: ["CINEMA", "MILHO", "SAL", "MANTEIGA", "ESTOURAR"] },

    // Objetos / Tech
    { word: "CELULAR", forbidden: ["LIGAÇÃO", "MENSAGEM", "WHATSAPP", "TELA", "SMARTPHONE"] },
    { word: "ÓCULOS", forbidden: ["OLHOS", "ENXERGAR", "LENTE", "GRAU", "ROSTO"] },
    { word: "RELÓGIO", forbidden: ["TEMPO", "HORA", "PULSO", "PONTEIRO", "ATRASADO"] },
    { word: "CARRO", forbidden: ["MOTOR", "RODA", "DIRIGIR", "VEÍCULO", "TRÂNSITO"] },
    { word: "AVIÃO", forbidden: ["VOAR", "ASA", "AEROPORTO", "VIAGEM", "CÉU"] },
    { word: "CAMA", forbidden: ["DORMIR", "TRAVESSEIRO", "QUARTO", "COLCHÃO", "SONO"] },
    { word: "COMPUTADOR", forbidden: ["MOUSE", "TECLADO", "TELA", "TRABALHO", "JOGAR"] },

    // Lugares / Natureza
    { word: "ESCOLA", forbidden: ["ESTUDAR", "ALUNO", "PROFESSOR", "AULA", "PROVA"] },
    { word: "HOSPITAL", forbidden: ["DOENTE", "MÉDICO", "REMÉDIO", "EMERGÊNCIA", "ENFERMEIRA"] },
    { word: "FLORESTA", forbidden: ["ÁRVORE", "VERDE", "MATO", "NATUREZA", "ANIMAIS"] },
    { word: "CHUVA", forbidden: ["ÁGUA", "MOLHADO", "GUARDA-CHUVA", "NUVEM", "TEMPO"] },
    { word: "PRAIA", forbidden: ["MAR", "AREIA", "SOL", "VERÃO", "ONDA"] },
    { word: "CINEMA", forbidden: ["FILME", "PIPOCA", "TELA", "ASSISTIR", "INGRESSO"] },
    { word: "ZOOLÓGICO", forbidden: ["ANIMAIS", "JAULA", "VISITA", "PARQUE", "BICHOS"] },
    { word: "BRASIL", forbidden: ["PAÍS", "VERDE E AMARELO", "FUTEBOL", "SAMBA", "AMÉRICA"] },


    // AOT
    // PERSONAGENS PRINCIPAIS
    { word: "EREN YEAGER", forbidden: ["TITÃ", "MIKASA", "PORÃO", "PROTAGONISTA", "TATAKAE"] },
    { word: "MIKASA ACKERMAN", forbidden: ["EREN", "CACHECOL", "FORTE", "PROTEGER", "CASA"] },
    { word: "ARMIN ARLERT", forbidden: ["LOIRO", "COLOSSAL", "MAR", "INTELIGENTE", "ESTRATEGISTA"] },
    { word: "LEVI ACKERMAN", forbidden: ["CAPITÃO", "BAIXINHO", "LIMPEZA", "BEYBLADE", "FORTE"] },
    { word: "ERWIN SMITH", forbidden: ["COMANDANTE", "SASAGEYO", "BRAÇO", "DISCURSO", "MORRER"] },
    { word: "HANGE ZOE", forbidden: ["ÓCULOS", "CIENTISTA", "LOUCA", "TITÃS", "QUATRO-OLHOS"] },
    { word: "SASHA BRAUS", forbidden: ["BATATA", "COMER", "CARNE", "ARQUEIRA", "MENINA"] },
    { word: "JEAN KIRSTEIN", forbidden: ["CAVALO", "CARA DE CAVALO", "LÍDER", "TROPA", "AMIGO"] },
    { word: "HISTORIA REISS", forbidden: ["RAINHA", "CRISTA", "YMIR", "LOIRA", "REAL"] },
    
    // OS 9 TITÃS & INIMIGOS
    { word: "TITÃ COLOSSAL", forbidden: ["GRANDE", "VAPOR", "BERTOLT", "ARMIN", "MURO"] },
    { word: "TITÃ BLINDADO", forbidden: ["REINER", "ARMADURA", "QUEBRAR", "TRAIDOR", "GUERREIRO"] },
    { word: "TITÃ FÊMEA", forbidden: ["ANNIE", "CRISTAL", "LUTADORA", "LEONHART", "FLORESTA"] },
    { word: "TITÃ BESTIAL", forbidden: ["ZEKE", "MACACO", "PELUDO", "ARREMESSAR", "IRMÃO"] },
    { word: "TITÃ MANDÍBULA", forbidden: ["PORCO", "GALLIARD", "YMIR", "DENTES", "RÁPIDO"] },
    { word: "TITÃ QUADRÚPEDE", forbidden: ["PIECK", "CARROÇA", "MALA", "ANDAR", "QUATRO"] },
    { word: "TITÃ MARTELO DE GUERRA", forbidden: ["BRANCO", "MARTELO", "TYBUR", "EREN", "CHÃO"] },
    { word: "TITÃ FUNDADOR", forbidden: ["YMIR", "COORDENADA", "REI", "PODER", "GRITAR"] },
    
    // MARLEY & GUERREIROS
    { word: "REINER BRAUN", forbidden: ["BLINDADO", "DEPRIMIDO", "TRAIDOR", "GUERREIRO", "PAREDE"] },
    { word: "BERTOLT HOOVER", forbidden: ["COLOSSAL", "ALTO", "SUAR", "TIMIDO", "EXPLOSÃO"] },
    { word: "ANNIE LEONHART", forbidden: ["FÊMEA", "NARIZ", "CONGELADA", "PAI", "ANEL"] },
    { word: "ZEKE YEAGER", forbidden: ["BESTIAL", "IRMÃO", "PLANO", "EUTANÁSIA", "GRISHA"] },
    { word: "GABI BRAUN", forbidden: ["SASHA", "TIRO", "RIFLE", "PRIM A", "CRIANÇA"] },
    { word: "FALCO GRICE", forbidden: ["PÁSSARO", "GABI", "TITÃ", "VOAR", "MANDÍBULA"] },
    { word: "YMIR", forbidden: ["HISTORIA", "CRISTA", "MANDÍBULA", "TITÃ", "CARTA"] },
    { word: "PIECK FINGER", forbidden: ["CARROÇA", "QUADRÚPEDE", "OHAYO", "PORCO", "ANDAR DE QUATRO"] },
    { word: "PORCO GALLIARD", forbidden: ["MANDÍBULA", "REINER", "QUEBRA-NOZES", "MARCEL", "FALCO"] },
    { word: "MARCEL GALLIARD", forbidden: ["PORCO", "REINER", "YMIR", "MORREU", "IRMÃO"] },
    { word: "YELENA", forbidden: ["ZEKE", "ALTA", "BARBA", "FANÁTICA", "MARLEY"] },
    { word: "KENNY ACKERMAN", forbidden: ["LEVI", "TIO", "ESTRIPADOR", "CHAPÉU", "REI"] },


    // Profissões
    { word: "MÉDICO", forbidden: ["HOSPITAL", "DOENÇA", "SAÚDE", "DOUTOR", "CURAR"] },
    { word: "PROFESSOR", forbidden: ["ENSINAR", "ESCOLA", "QUADRO", "MATÉRIA", "APRENDER"] },
    { word: "PALHAÇO", forbidden: ["CIRCO", "ENGRAÇADO", "NARIZ", "RIR", "MAQUIAGEM"] },
    { word: "POLÍCIA", forbidden: ["LADRÃO", "PRESO", "LEI", "FARDA", "VIATURA"] },
    { word: "BOMBEIRO", forbidden: ["FOGO", "INCÊNDIO", "ÁGUA", "APAGAR", "RESGATE"] },
    { word: "ASTRONAUTA", forbidden: ["ESPAÇO", "LUA", "FOGUETE", "NASA", "GRAVIDADE"] },
    { word: "DENTISTA", forbidden: ["DENTE", "BOCA", "DOR", "CADEIRA", "SORRISO"] },

    // Cultura Pop / Personagens
    { word: "HARRY POTTER", forbidden: ["BRUXO", "MAGIA", "HOGWARTS", "VARINHA", "FILME"] },
    { word: "HOMEM-ARANHA", forbidden: ["TEIA", "PETER PARKER", "HERÓI", "MARVEL", "ARANHA"] },
    { word: "MICKEY", forbidden: ["MOUSE", "DISNEY", "ORELHAS", "RATO", "MINNIE"] },
    { word: "BATMAN", forbidden: ["MORCEGO", "GOTHAM", "HERÓI", "CORINGA", "ROBIN"] },
    { word: "SUPERMAN", forbidden: ["CLARK KENT", "KRYPTONITA", "CAPA", "VOAR", "FORTE"] },
    { word: "BARBIE", forbidden: ["BONECA", "ROSA", "KEN", "BRINQUEDO", "LOIRA"] },
    { word: "STAR WARS", forbidden: ["JEDI", "SABRE DE LUZ", "DARTH VADER", "ESPAÇO", "FILME"] },
    
    // 🎬 CINEMA & SÉRIES
    { word: "TITANIC", forbidden: ["NAVIO", "ROSE", "JACK", "AFUNDAR", "GELO"] },
    { word: "VINGADORES", forbidden: ["MARVEL", "HERÓIS", "THANOS", "ULTIMATO", "FILME"] },
    { word: "SHREK", forbidden: ["OGRO", "FIONA", "BURRO", "VERDE", "PÂNTANO"] },
    { word: "TOY STORY", forbidden: ["WOODY", "BUZZ", "BRINQUEDO", "ANDY", "COWBOY"] },
    { word: "O REI LEÃO", forbidden: ["SIMBA", "MUFASA", "TIMÃO", "PUMBA", "HAKUNA"] },
    { word: "MATRIX", forbidden: ["NEO", "PÍLULA", "COMPUTADOR", "KEANU", "ESCOLHA"] },
    { word: "LA CASA DE PAPEL", forbidden: ["ROUBO", "BANCO", "MÁSCARA", "PROFESSOR", "NETFLIX"] },
    { word: "FRIENDS", forbidden: ["SÉRIE", "RACHEL", "ROSS", "CAFÉ", "SOFÁ"] },
    { word: "STRANGER THINGS", forbidden: ["ELEVEN", "MONSTRO", "MUNDO INVERTIDO", "ANOS 80", "NETFLIX"] },
    { word: "JURASSIC PARK", forbidden: ["DINOSSAURO", "PARQUE", "T-REX", "ILHA", "FILME"] },

    // 🎵 MÚSICA & FESTA
    { word: "ANITTA", forbidden: ["FUNK", "CANTORA", "ENVOLVER", "BRASIL", "GIRL"] },
    { word: "VIOLÃO", forbidden: ["CORDAS", "TOCAR", "MÚSICA", "INSTRUMENTO", "MADEIRA"] },
    { word: "BEYONCÉ", forbidden: ["CANTORA", "DIVA", "JAY-Z", "SINGLE", "LADIES"] },
    { word: "ROCK", forbidden: ["GUITARRA", "BANDA", "PESADO", "METAL", "ROLL"] },
    { word: "PIANO", forbidden: ["TECLAS", "BRANCO", "PRETO", "MÚSICA", "CAUDA"] },
    { word: "FONE DE OUVIDO", forbidden: ["MÚSICA", "ORELHA", "ESCUTAR", "SEM FIO", "SOM"] },
    { word: "MICHAEL JACKSON", forbidden: ["REI", "POP", "MOONWALK", "THRILLER", "LUVA"] },
    { word: "SERTANEJO", forbidden: ["SOFRENCIA", "DUPLA", "VIOLÃO", "CHAPÉU", "INTERIOR"] },
    { word: "CARNAVAL", forbidden: ["FESTA", "SAMBA", "FERIADO", "FANTASIA", "BLOCO"] },
    { word: "KARAOKÊ", forbidden: ["CANTAR", "MICROFONE", "MÚSICA", "LETRA", "VERGONHA"] },

    // 🍔 COMIDA & BEBIDA
    { word: "SUSHI", forbidden: ["PEIXE", "ARROZ", "JAPONÊS", "CRU", "HASHI"] },
    { word: "LASANHA", forbidden: ["MASSA", "QUEIJO", "GARFIELD", "FORNO", "CAMADAS"] },
    { word: "COXINHA", forbidden: ["FRANGO", "MASSA", "FRITA", "SALGADO", "CATUPIRY"] },
    { word: "AÇAÍ", forbidden: ["ROXO", "GRANOLA", "FRUTA", "GELADO", "TIGELA"] },
    { word: "BRIGADEIRO", forbidden: ["CHOCOLATE", "DOCE", "FESTA", "GRANULADO", "LEITE CONDENSADO"] },
    { word: "PÃO DE QUEIJO", forbidden: ["MINAS", "POLVILHO", "CAFÉ", "FORNO", "REDONDO"] },
    { word: "MACARRÃO", forbidden: ["MASSA", "ITÁLIA", "MOLHO", "ESPAGUETE", "GARFO"] },
    { word: "BOLO", forbidden: ["ANIVERSÁRIO", "VELAS", "PARABÉNS", "DOCE", "CORTAR"] },
    { word: "OVO", forbidden: ["GALINHA", "FRITO", "COZIDO", "OMELETE", "CAFÉ"] },
    { word: "CERVEJA", forbidden: ["BEBIDA", "ÁLCOOL", "GELADA", "BAR", "COPO"] },

    // 🌍 LUGARES & NATUREZA
    { word: "TORRE EIFFEL", forbidden: ["PARIS", "FRANÇA", "FERRO", "ALTO", "TURISMO"] },
    { word: "LUA", forbidden: ["NOITE", "CÉU", "SATÉLITE", "CHEIA", "LOBO"] },
    { word: "SOL", forbidden: ["QUENTE", "DIA", "ESTRELA", "VERÃO", "LUZ"] },
    { word: "DESERTO", forbidden: ["AREIA", "SECO", "CAMELO", "SAARA", "SOL"] },
    { word: "ANTÁRTIDA", forbidden: ["GELO", "FRIO", "PINGUIM", "NEVE", "POLO SUL"] },
    { word: "CRISTO REDENTOR", forbidden: ["RIO", "ESTÁTUA", "BRAÇOS", "JESUS", "MORRO"] },
    { word: "SHOPPING", forbidden: ["LOJAS", "COMPRAS", "PRAÇA", "CINEMA", "PASSEAR"] },
    { word: "ACADEMIA", forbidden: ["TREINO", "PESO", "MÚSCULO", "ESTEIRA", "SUAR"] },
    { word: "COZINHA", forbidden: ["COMIDA", "FOGÃO", "GELADEIRA", "PRATO", "COZINHAR"] },
    { word: "BANHEIRO", forbidden: ["BANHO", "CHUVEIRO", "PRIVADA", "DENTE", "LIMPAR"] },

    // 🛋️ OBJETOS DO COTIDIANO
    { word: "ESPELHO", forbidden: ["REFLEXO", "VIDRO", "OLHAR", "ROSTO", "QUEBRAR"] },
    { word: "CHAVE", forbidden: ["PORTA", "ABRIR", "CADEADO", "CARRO", "TRANCAR"] },
    { word: "PISCINA", forbidden: ["ÁGUA", "NADAR", "VERÃO", "AZUL", "CLORO"] },
    { word: "CADEIRA", forbidden: ["SENTAR", "MESA", "ENCOSTO", "PERNAS", "MÓVEL"] },
    { word: "LIVRO", forbidden: ["LER", "PÁGINAS", "HISTÓRIA", "PAPEL", "BIBLIOTECA"] },
    { word: "CANETA", forbidden: ["ESCREVER", "TINTA", "PAPEL", "AZUL", "ESCOLA"] },
    { word: "SAPATO", forbidden: ["PÉ", "CADARÇO", "TÊNIS", "ANDAR", "CALÇAR"] },
    { word: "GUARDA-CHUVA", forbidden: ["CHUVA", "MOLHADO", "ABRIR", "CABO", "PROTEÇÃO"] },
    { word: "MOCHILA", forbidden: ["ESCOLA", "COSTAS", "GUARDAR", "ZÍPER", "BOLSA"] },
    { word: "TRAVESSEIRO", forbidden: ["DORMIR", "CAMA", "CABEÇA", "FOFO", "FRONHA"] },

    // 🧠 CONCEITOS & ALEATÓRIOS
    { word: "FANTASMA", forbidden: ["ASSOMBRAÇÃO", "ESPÍRITO", "MEDO", "LENÇOL", "MORTO"] },
    { word: "MENTIRA", forbidden: ["VERDADE", "NARIZ", "PINÓQUIO", "FALSO", "ENGANAR"] },
    { word: "SEGREDO", forbidden: ["CONTAR", "ESCONDER", "DISCRETO", "PSIU", "MISTÉRIO"] },
    { word: "FUTURO", forbidden: ["TEMPO", "AMANHÃ", "PREVISÃO", "DESTINO", "PASSADO"] },
    { word: "SORTE", forbidden: ["AZAR", "LOTERIA", "TREVO", "GANHAR", "ACASO"] },
    { word: "NATAL", forbidden: ["PAPAI NOEL", "DEZEMBRO", "PRESENTE", "ÁRVORE", "FESTA"] },
    { word: "ZUMBI", forbidden: ["MORTO", "VIVO", "CÉREBRO", "WALKING DEAD", "MORDIDA"] },
    { word: "ALIENÍGENA", forbidden: ["ESPAÇO", "OVNI", "VERDE", "MARTE", "ET"] },
    { word: "AMIZADE", forbidden: ["AMIGO", "GOSTAR", "JUNTOS", "PARCEIRO", "BEST"] },
    { word: "SAUDADE", forbidden: ["SENTIMENTO", "FALTA", "LONGE", "LEMBRANÇA", "TRISTE"] },

    // Apps / Moderno
    { word: "YOUTUBE", forbidden: ["VÍDEO", "CANAL", "LIKE", "ASSISTIR", "INFLUENCER"] },
    { word: "FACEBOOK", forbidden: ["REDE SOCIAL", "AMIGOS", "POSTAR", "CURTIR", "ZUCKERBERG"] },
    { word: "INSTAGRAM", forbidden: ["FOTO", "STORIES", "SEGUIR", "FILTRO", "APP"] },
    { word: "TIKTOK", forbidden: ["VÍDEO", "DANÇA", "MÚSICA", "APP", "VIRAL"] },
    { word: "NETFLIX", forbidden: ["SÉRIE", "FILME", "STREAMING", "MARATONAR", "ASSINATURA"] },
    { word: "WHATSAPP", forbidden: ["MENSAGEM", "ZAP", "GRUPO", "ÁUDIO", "CONVERSA"] },

    // Verbos / Conceitos
    { word: "AMOR", forbidden: ["CORAÇÃO", "PAIXÃO", "NAMORADO", "SENTIMENTO", "CASAMENTO"] },
    { word: "DORMIR", forbidden: ["CAMA", "SONHO", "NOITE", "DESCANSAR", "SONO"] },
    { word: "CORRER", forbidden: ["RÁPIDO", "ESPORTE", "PÉS", "MARATONA", "CANSADO"] },
    { word: "CHORAR", forbidden: ["LÁGRIMA", "TRISTE", "OLHOS", "BEBÊ", "SOLUÇAR"] },
    { word: "RIR", forbidden: ["PIADA", "FELIZ", "ENGRAÇADO", "SORRISO", "GARGALHADA"] },
    { word: "DINHEIRO", forbidden: ["PAGAR", "MOEDA", "NOTA", "COMPRAR", "BANCO"] },
    { word: "FESTA", forbidden: ["ANIVERSÁRIO", "BOLO", "MÚSICA", "DANÇAR", "AMIGOS"] },
    { word: "CASAMENTO", forbidden: ["NOIVA", "IGREJA", "ALIANÇA", "PADRE", "FESTA"] }
];

let currentScore = 0;
let timeLeft = 90;
let timerInterval;

// Elementos DOM
const els = {
    lobby: document.getElementById('lobby'),
    cardContainer: document.getElementById('gameCard'),
    controls: document.getElementById('controls'),
    timerArea: document.getElementById('timerArea'),
    targetWord: document.getElementById('targetWord'),
    forbiddenList: document.getElementById('forbiddenWords'),
    timer: document.getElementById('timer'),
    score: document.getElementById('score')
};

function startGame() {
    els.lobby.style.display = 'none';
    els.cardContainer.style.display = 'block';
    els.controls.style.display = 'flex';
    els.timerArea.style.display = 'block';
    
    currentScore = 0;
    els.score.innerText = currentScore;
    timeLeft = 90;
    
    loadRandomCard();
    startTimer();
}

function loadRandomCard() {
    // Carrega dados direto
    const randomIndex = Math.floor(Math.random() * deck.length);
    const card = deck[randomIndex];

    els.targetWord.innerText = card.word;
    els.forbiddenList.innerHTML = '';
    
    card.forbidden.forEach(word => {
        const div = document.createElement('div');
        div.className = 'forbidden-item';
        div.innerText = word;
        els.forbiddenList.appendChild(div);
    });
}

function startTimer() {
    els.timer.innerText = timeLeft;
    timerInterval = setInterval(() => {
        timeLeft--;
        els.timer.innerText = timeLeft;
        
        if (timeLeft <= 10) els.timer.style.color = '#e74c3c'; // Alerta vermelho
        
        if (timeLeft <= 0) {
            endRound();
        }
    }, 1000);
}

function correctCard() {
    currentScore++;
    updateScore();
    blinkScreen('#27ae60');
    loadRandomCard();
}

function skipCard() {
    updateScore();
    blinkScreen('#c0392b');
    loadRandomCard();
}

function updateScore() {
    els.score.innerText = currentScore;
    els.score.style.transform = "scale(1.5)";
    setTimeout(() => els.score.style.transform = "scale(1)", 200);
}

function endRound() {
    clearInterval(timerInterval);
    alert(`SESSÃO ENCERRADA.\nPONTUAÇÃO FINAL: ${currentScore}`);
    location.reload(); 
}

function blinkScreen(color) {
    document.body.style.backgroundColor = color;
    setTimeout(() => {
        document.body.style.backgroundColor = ''; 
    }, 150);
}


