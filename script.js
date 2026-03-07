const videos = document.querySelectorAll('#video-feed video');

// Para que só um vídeo toque por vez
videos.forEach(v => {
    v.addEventListener('play', () => {
        videos.forEach(other => {
            if(other !== v) other.pause(); // pausa os outros vídeos
        });
    });
});
