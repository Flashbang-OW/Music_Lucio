// ============ ECRÃ DE LOGIN ============

const loginScreen = document.getElementById('loginScreen');
const appContainer = document.getElementById('appContainer');
const loginForm = document.getElementById('loginForm');
const skipLoginBtn = document.getElementById('skipLoginBtn');
const errorMessage = document.getElementById('errorMessage');
const displayUsername = document.getElementById('displayUsername');
const loginVoiceline = document.getElementById('loginVoiceline');

// Voicelines para o ecrã de login
const loginVoicelines = [
    '"Isso é Lúcio-oh-oh!"',
    '"Vamos aumentar o som!"',
    '"Solta o som!"',
    '"Olha o flow!"',
    '"Curte essa batida!"',
    '"Não para, não para!"',
    '"Subindo o nível!"',
    '"Vocês pediram, o Lúcio atendeu!"'
];

// Trocar voiceline a cada 4 segundos
let voicelineIndex = 0;
setInterval(() => {
    voicelineIndex = (voicelineIndex + 1) % loginVoicelines.length;
    loginVoiceline.style.opacity = '0';
    setTimeout(() => {
        loginVoiceline.textContent = loginVoicelines[voicelineIndex];
        loginVoiceline.style.opacity = '1';
    }, 300);
}, 4000);

// Login fake (para demonstração)
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simular validação
    if (username.length < 3 || password.length < 3) {
        errorMessage.style.display = 'flex';
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 3000);
        return;
    }
    
    // Guardar nome de utilizador
    localStorage.setItem('lucioUser', username);
    
    // Mostrar app
    showApp(username);
});

// Saltar login
skipLoginBtn.addEventListener('click', () => {
    const guestName = 'Convidado_' + Math.floor(Math.random() * 1000);
    localStorage.setItem('lucioUser', guestName);
    showApp(guestName);
});

// Função para mostrar a app
function showApp(username) {
    displayUsername.textContent = username;
    
    // Animação de transição
    loginScreen.style.opacity = '0';
    loginScreen.style.transform = 'scale(1.1)';
    
    setTimeout(() => {
        loginScreen.style.display = 'none';
        appContainer.style.display = 'flex';
        
        // Pequeno delay para a animação de entrada
        setTimeout(() => {
            appContainer.style.opacity = '1';
            appContainer.style.transform = 'scale(1)';
        }, 50);
    }, 500);
}

// Criar partículas flutuantes
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const emojis = ['🎵', '🐸', '⚡', '💚', '🔊', '🎤', '🛹'];
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('span');
        particle.className = 'particle';
        particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.animationDuration = (Math.random() * 5 + 5) + 's';
        particle.style.fontSize = (Math.random() * 20 + 10) + 'px';
        particlesContainer.appendChild(particle);
    }
}

// Inicializar
createParticles();
