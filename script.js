// --- ESTRELA (IA) - O CÉREBRO DO OIO TOC ---
const estrelaIA = {
    // Acervo: Desenhos 1930, NASA e Animais
    acervo: [
        { tipo: "Desenho 1930", url: "https://archive.org/download/popeye_it_popeye_the_sailor_meets_sindbad_the_sailor/popeye_the_sailor_meets_sindbad_the_sailor_512kb.mp4" },
        { tipo: "NASA Histórica", url: "https://archive.org/download/NACA-A-Look-Back/430772main_naca_airfoils.mp4" },
        { tipo: "Documentário Animal", url: "https://www.w3schools.com/html/mov_bbb.mp4" }
    ],

    // Camada Sensorial (Som e Vibração registrados por Michel)
    confirmarAcao: function() {
        new Audio('https://www.soundjay.com/buttons/sounds/button-3.mp3').play();
        if (navigator.vibrate) navigator.vibrate(50);
    },

    // Módulo de Acoplamento: Criar o Feed e as Miniaturas
    iniciarOioToc: function() {
        const feed = document.getElementById('feed');
        const barraSalto = document.createElement('div');
        barraSalto.className = 'barra-salto'; // A barra lateral do Salto Quântico
        document.body.appendChild(barraSalto);

        this.acervo.forEach((item, index) => {
            // 1. Criar o Vídeo no Feed (Camada de 70%)
            const container = document.createElement('div');
            container.className = 'video-container';
            container.id = `video-${index}`;
            container.innerHTML = `
                <video src="${item.url}" loop playsinline onclick="this.play()"></video>
                <div class="camada-interacao">
                    <div class="perfil-usuario-vibe"></div>
                    <button class="btn-vibe ico-like" onclick="estrelaIA.confirmarAcao()"></button>
                    <button class="btn-vibe ico-share" onclick="estrelaIA.confirmarAcao()"></button>
                </div>
            `;
            feed.appendChild(container);

            // 2. Criar a Miniatura (Salto Quântico)
            const miniatura = document.createElement('div');
            miniatura.className = 'miniatura-quantum';
            miniatura.innerHTML = `<video src="${item.url}" muted></video>`;
            miniatura.onclick = () => {
                this.confirmarAcao();
                document.getElementById(`video-${index}`).scrollIntoView({ behavior: 'smooth' });
                // A tela pisca ao saltar (Regra OIO ONE)
                document.body.style.filter = "brightness(1.5)";
                setTimeout(() => document.body.style.filter = "brightness(1)", 150);
            };
            barraSalto.appendChild(miniatura);
        });
    }
};

window.onload = () => { estrelaIA.iniciarOioToc(); };
