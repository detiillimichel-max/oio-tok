// Lógica OIO Toc - Play/Pause Automático
const videos = document.querySelectorAll('video');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.play(); // Toca quando aparece
        } else {
            entry.target.pause(); // Para quando sai da tela
        }
    });
}, { threshold: 0.7 }); // Só toca se 70% do vídeo aparecer

videos.forEach(video => {
    observer.observe(video);
    // Clique para dar play/pause manual
    video.addEventListener('click', () => {
        if (video.paused) { video.play(); } 
        else { video.pause(); }
    });
});
