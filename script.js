// --- ESTRELA (IA) - O CÉREBRO DO OIO TOC ---
const estrelaIA = {
    // Acervo OIO Toc: Curadoria de Domínio Público
    acervo: [
        { tipo: "Desenho 1930", url: "https://archive.org/download/popeye_it_popeye_the_sailor_meets_sindbad_the_sailor/popeye_the_sailor_meets_sindbad_the_sailor_512kb.mp4" },
        { tipo: "NACA Aeroespacial", url: "https://archive.org/download/NACA-A-Look-Back/430772main_naca_airfoils.mp4" },
        { tipo: "Documentário Animal", url: "https://www.w3schools.com/html/mov_bbb.mp4" }
    ],

    // Camada Sensorial (Som e Vibração registrados por Michel)
    confirmarAcao: function() {
        new Audio('https://www.soundjay.com/buttons/sounds/button-3.mp3').play();
        if (navigator.vibrate) navigator.vibrate(50);
    },

    // Módulo de Acoplamento: Injetar os vídeos no OIO Toc
    carregarFeed: function() {
        const feed = document.getElementById('feed');
        this.acervo.forEach(item => {
            const container = document.createElement('div');
            container.className = 'video-container';
            container.innerHTML = `
                <video src="${item.url}" loop playsinline onclick="this.play()"></video>
                <div class="camada-interacao">
                    <div class="perfil-usuario-vibe"></div>
                    <button class="btn-vibe ico-like" onclick="estrelaIA.confirmarAcao()"></button>
                    <button class="btn-vibe ico-share" onclick="estrelaIA.confirmarAcao()"></button>
                </div>
            `;
            feed.appendChild(container);
        });
        console.log("OIO Toc: Feed acoplado com sucesso!");
    }
};

// Inicialização da Identidade Dinâmica
window.onload = () => {
    estrelaIA.carregarFeed();
};
