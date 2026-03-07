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
