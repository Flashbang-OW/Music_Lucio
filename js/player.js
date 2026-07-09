// Adiciona no início do player.js existente:

// Elementos adicionais
const speedBoost = document.getElementById('speedBoost');
const healBoost = document.getElementById('healBoost');
const crossfadeFill = document.getElementById('crossfadeFill');
const equalizerBars = document.querySelectorAll('.equalizer .bar');

// Controlo de velocidade (Speed Boost)
let currentSpeed = 1;
speedBoost.addEventListener('click', () => {
    if (currentSpeed === 1) {
        currentSpeed = 1.5;
        speedBoost.style.color = 'var(--speed-green)';
        speedBoost.style.filter = 'drop-shadow(0 0 10px var(--speed-green))';
    } else if (currentSpeed === 1.5) {
        currentSpeed = 2;
        speedBoost.style.color = 'var(--speed-green)';
    } else {
        currentSpeed = 1;
        speedBoost.style.color = '';
        speedBoost.style.filter = '';
    }
    audio.playbackRate = currentSpeed;
});

// Simulação de Healing Boost (efeito visual)
healBoost.addEventListener('click', () => {
    const playerContainer = document.querySelector('.player-container');
    playerContainer.style.boxShadow = '0 15px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(255, 215, 0, 0.6)';
    
    setTimeout(() => {
        playerContainer.style.boxShadow = '0 15px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(164, 214, 21, 0.2)';
    }, 2000);
});

// Animar equalizer quando está a tocar
function updateEqualizer(isPlaying) {
    equalizerBars.forEach(bar => {
        bar.style.animationPlayState = isPlaying ? 'running' : 'paused';
    });
}

// Modificar a função togglePlay existente para incluir:
const originalTogglePlay = togglePlay;
togglePlay = function() {
    originalTogglePlay();
    updateEqualizer(isPlaying);
};

// Atualizar crossfade com base no volume
volumeSlider.addEventListener('input', (e) => {
    audio.volume = e.target.value / 100;
    crossfadeFill.style.width = e.target.value + '%';
});

// Rotação de voicelines a cada 8 segundos
setInterval(rotateVoiceline, 8000);

// Inicializar equalizer
updateEqualizer(false);
