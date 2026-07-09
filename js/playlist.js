// Playlist temática do Lúcio
const playlist = [
    {
        id: 1,
        title: "Synaesthesia Auditiva",
        artist: "Lúcio Correia dos Santos",
        duration: "3:45",
        album: "Favela Classics",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        cover: "https://via.placeholder.com/300x300/0F2343/A4D615?text=SYNAESTHESIA"
    },
    {
        id: 2,
        title: "Rejuvenescência",
        artist: "Lúcio",
        duration: "4:02",
        album: "Healing Beats",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        cover: "https://via.placeholder.com/300x300/0F2343/F9ED32?text=REJUVENESCENCIA"
    },
    {
        id: 3,
        title: "We Move Together",
        artist: "Lúcio feat. D.Va",
        duration: "3:56",
        album: "Unity Anthem",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        cover: "https://via.placeholder.com/300x300/0F2343/A4D615?text=TOGETHER"
    },
    {
        id: 4,
        title: "Barrier Sound",
        artist: "Lúcio",
        duration: "4:18",
        album: "Ultimate Collection",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
        cover: "https://via.placeholder.com/300x300/0F2343/218FFE?text=BARRIER"
    },
    {
        id: 5,
        title: "Crossfade Dream",
        artist: "Lúcio & Symmetra",
        duration: "3:30",
        album: "Hard Light Remix",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
        cover: "https://via.placeholder.com/300x300/0F2343/A4D615?text=CROSSFADE"
    },
    {
        id: 6,
        title: "Favela Nights",
        artist: "Lúcio",
        duration: "5:12",
        album: "Rio Streets",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
        cover: "https://via.placeholder.com/300x300/0F2343/F9ED32?text=FAVELA"
    }
];

// Voicelines aleatórias do Lúcio
const voicelines = [
    "Isso é Lúcio-oh-oh!",
    "Vamos aumentar o som!",
    "Vocês pediram, o Lúcio atendeu!",
    "Solta o som!",
    "Olha o flow!",
    "Curte essa batida!",
    "Não para, não para!",
    "Subindo o nível!"
];

// Função para renderizar a playlist no HTML
function renderPlaylist() {
    const playlistElement = document.getElementById('playlist');
    const songCount = document.getElementById('songCount');
    
    playlistElement.innerHTML = '';
    songCount.textContent = `${playlist.length} MÚSICAS`;
    
    playlist.forEach((song, index) => {
        const li = document.createElement('li');
        li.setAttribute('data-index', index);
        li.innerHTML = `
            <span class="song-number">${(index + 1).toString().padStart(2, '0')}</span>
            <div class="song-info">
                <div class="song-title">${song.title}</div>
                <div class="song-artist">${song.artist}</div>
            </div>
            <span class="song-duration">${song.duration}</span>
        `;
        
        li.addEventListener('click', () => {
            playSong(index);
        });
        
        playlistElement.appendChild(li);
    });
}

// Função para trocar voicelines
function rotateVoiceline() {
    const voicelineElements = document.querySelectorAll('.voiceline');
    const randomIndex = Math.floor(Math.random() * voicelines.length);
    
    voicelineElements.forEach(el => el.classList.remove('active'));
    voicelineElements[0].textContent = `"${voicelines[randomIndex]}"`;
    voicelineElements[0].classList.add('active');
}
