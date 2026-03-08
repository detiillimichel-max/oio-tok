let startY;
const drawer = document.getElementById('glass-drawer');

// Captura de Gestos (Ergonomia Dinâmica)
document.addEventListener('touchstart', e => startY = e.touches[0].clientY);
document.addEventListener('touchmove', e => {
    let diff = startY - e.touches[0].clientY;
    if (diff > 80) drawer.style.transform = 'translateY(-80%)'; // Abre
    if (diff < -80) drawer.style.transform = 'translateY(0)';   // Fecha
});

// Feedback Sensorial (Módulo Pisca e Vibra)
function acoplar(el) {
    el.classList.add('coupling');
    setTimeout(() => el.classList.remove('coupling'), 400);
    if(navigator.vibrate) navigator.vibrate(50); 
    console.log("Salto Quântico: Módulo conectado ao Firebase.");
}
