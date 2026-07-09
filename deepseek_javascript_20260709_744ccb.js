// Playlist de músicas de exemplo
// Depois podes substituir com dados do Supabase
const playlist = [
    {
        id: 1,
        title: "Synaesthesia Auditiva",
        artist: "Lúcio Correia dos Santos",
        duration: "3:45",
        // Usando uma música de exemplo (substitui pelo teu ficheiro ou URL)
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        cover: "https://via.placeholder.com/300x300/0F2343/A4D615?text=LUCIO"
    },
    {
        id: 2,
        title: "Rejuvenescência",
        artist: "Lúcio",
        duration: "4:02",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        cover: "https://via.placeholder.com/300x300/0F2343/F9ED32?text=REJUVENESCENCIA"
    },
    {
        id: 3,
        title: "We Move Together As One",
        artist: "Lúcio",
        duration: "3:56",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        cover: "https://via.placeholder.com/300x300/0F2343/A4D615?text=ONE"
    },
    {
        id: 4,
        title: "Sonic Amplifier",
        artist: "Lúcio",
        duration: "4:18",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
        cover: "https://via.placeholder.com/300x300/0F2343/F9ED32?text=SONIC"
    },
    {
        id: 5,
        title: "Cantando Hits",
        artist: "Lúcio & D.Va",
        duration: "3:30",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
        cover: "https://via.placeholder.com/300x300/0F2343/A4D615?text=HITS"
    }
];

// Função para renderizar a playlist no HTML
function renderPlaylist() {
    const playlistElement = document.getElementById('playlist');
    playlistElement.innerHTML = '';
    
    playlist.forEach((song, index) => {
        const li = document.createElement('li');
        li.setAttribute('data-index', index);
        li.innerHTML = `
            <div>
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