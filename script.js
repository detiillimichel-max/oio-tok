// Lógica do Salto Quântico
const miniaturas = document.querySelectorAll('.miniatura');
const containerFeed = document.querySelector('.feed');

miniaturas.forEach((min, index) => {
    min.addEventListener('click', () => {
        const videoDestino = document.querySelectorAll('.video-container')[index];
        videoDestino.scrollIntoView({ behavior: 'smooth' });
        // Efeito visual: A tela pisca para mostrar o acoplamento
        document.body.style.filter = "brightness(1.5)";
        setTimeout(() => document.body.style.filter = "brightness(1)", 100);
    });
});

// Camada Sensorial: Som ao Curtir (Confirmar viagem ao Firebase)
const btnLike = document.querySelector('.like');
btnLike.addEventListener('click', () => {
    const audio = new Audio('https://www.soundjay.com/buttons/sounds/button-16.mp3');
    audio.play();
    console.log("Ação viajou com sucesso pelo Firebase"); // Base vibe-app-bbba2
});
// --- ESTRELA (IA) - CAMADA SENSORIAL ---
const estrelaIA = {
    // Som de confirmação (Ação viajou pelo Firebase)
    confirmarAcao: function() {
        const bip = new Audio('https://www.soundjay.com/buttons/sounds/button-3.mp3');
        bip.play();
        
        // Vibração (Ergonomia Dinâmica)
        if (navigator.vibrate) {
            navigator.vibrate(50); 
        }
        console.log("Estrela: Ação sincronizada com vibe-app-bbba2");
    },

    // Notificação visual (O usuário é o centro)
    notificar: function(mensagem) {
        const toast = document.createElement('div');
        toast.style.cssText = `
            position: fixed; top: 20px; left: 50%; 
            transform: translateX(-50%); background: rgba(255,255,255,0.9);
            color: #000; padding: 10px 20px; border-radius: 20px;
            z-index: 100; font-weight: bold; box-shadow: 0 0 15px rgba(255,255,255,0.5);
        `;
        toast.innerText = `✨ Estrela: ${mensagem}`;
        document.body.appendChild(toast);
        
        // A tela pisca (Módulo de Acoplamento)
        document.body.style.filter = "brightness(1.2)";
        setTimeout(() => {
            toast.remove();
            document.body.style.filter = "brightness(1)";
        }, 2000);
    }
};

// Exemplo: Notificar quando curtir
document.querySelector('.like').addEventListener('click', () => {
    estrelaIA.confirmarAcao();
    estrelaIA.notificar("Você curtiu este vídeo!");
});
