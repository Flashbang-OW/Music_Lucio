// Elementos do DOM
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const shuffleBtn = document.getElementById('shuffleBtn');
const repeatBtn = document.getElementById('repeatBtn');
const progressBar = document.getElementById('progressBar');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');
const volumeSlider = document.getElementById('volumeSlider');
const trackTitle = document.getElementById('trackTitle');
const trackArtist = document.getElementById('trackArtist');
const albumCover = document.getElementById('albumCover');

// Estado do player
let currentSongIndex = 0;
let isPlaying = false;
let isShuffled = false;
let isRepeated = false;

// Criar elemento de áudio
const audio = new Audio();

// Função para tocar uma música específica
function playSong(index) {
    currentSongIndex = index;
    const song = playlist[index];
    
    audio.src = song.src;
    trackTitle.textContent = song.title;
    trackArtist.textContent = song.artist;
    albumCover.src = song.cover;
    
    audio.play();
    isPlaying = true;
    updatePlayButton();
    albumCover.classList.add('playing');
    
    // Atualizar playlist visual
    updateActiveSong();
}

// Play/Pause
function togglePlay() {
    if (isPlaying) {
        audio.pause();
        albumCover.classList.remove('playing');
    } else {
        if (!audio.src) {
            playSong(0);
        } else {
            audio.play();
            albumCover.classList.add('playing');
        }
    }
    isPlaying = !isPlaying;
    updatePlayButton();
}

// Atualizar botão play/pause
function updatePlayButton() {
    playBtn.textContent = isPlaying ? '⏸️' : '▶️';
}

// Próxima música
function nextSong() {
    if (isShuffled) {
        const randomIndex = Math.floor(Math.random() * playlist.length);
        playSong(randomIndex);
    } else {
        currentSongIndex = (currentSongIndex + 1) % playlist.length;
        playSong(currentSongIndex);
    }
}

// Música anterior
function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    playSong(currentSongIndex);
}

// Atualizar barra de progresso
audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
        const progressPercent = (audio.currentTime / audio.duration) * 100;
        progress.style.width = `${progressPercent}%`;
        
        currentTimeEl.textContent = formatTime(audio.currentTime);
        durationEl.textContent = formatTime(audio.duration);
    }
});

// Clique na barra de progresso
progressBar.addEventListener('click', (e) => {
    const width = progressBar.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    
    if (duration) {
        audio.currentTime = (clickX / width) * duration;
    }
});

// Volume
volumeSlider.addEventListener('input', (e) => {
    audio.volume = e.target.value / 100;
});

// Quando a música terminar
audio.addEventListener('ended', () => {
    if (isRepeated) {
        playSong(currentSongIndex);
    } else {
        nextSong();
    }
});

// Botões de shuffle e repeat
shuffleBtn.addEventListener('click', () => {
    isShuffled = !isShuffled;
    shuffleBtn.style.color = isShuffled ? 'var(--lucio-green)' : '';
});

repeatBtn.addEventListener('click', () => {
    isRepeated = !isRepeated;
    repeatBtn.style.color = isRepeated ? 'var(--lucio-green)' : '';
});

// Event listeners dos botões
playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Atualizar música ativa na playlist
function updateActiveSong() {
    const playlistItems = document.querySelectorAll('.playlist li');
    playlistItems.forEach((item, index) => {
        if (index === currentSongIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Formatar tempo (segundos -> mm:ss)
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Inicializar
renderPlaylist();
playSong(0);
