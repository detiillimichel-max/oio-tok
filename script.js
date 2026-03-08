let yInicial;
const gaveta = document.getElementById('gaveta-vidro');

// Captura de Gestos (Ergonomia Dinâmica)
document.addEventListener('touchstart', e => {
    yInicial = e.touches[0].clientY;
});

document.addEventListener('touchmove', e => {
    let yFinal = e.touches[0].clientY;
    let diffY = yInicial - yFinal;

    if (diffY > 70) {
        gaveta.style.transform = 'translateY(-85%)'; // Sobe a gaveta (30%)
    } else if (diffY < -70) {
        gaveta.style.transform = 'translateY(0)'; // Esconde a gaveta
    }
});

// Módulos de Acoplamento e Camada Sensorial
function acoplar(elemento) {
    elemento.classList.add('acoplado');
    setTimeout(() => elemento.classList.remove('acoplado'), 400);

    // Salto Quântico (Feedback no Console)
    console.log("Salto Quântico: Abrindo " + elemento.innerText);

    // Vibração (Camada Sensorial)
    if (navigator.vibrate) {
        navigator.vibrate(60);
    }
}
