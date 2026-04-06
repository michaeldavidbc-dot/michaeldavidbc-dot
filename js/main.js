// Función para ocultar el banner inicial con animación
function entrar() {
    const banner = document.getElementById('pantalla-inicio');
    if (banner) { // Una buena práctica: verificar que el elemento existe antes de actuar
        banner.classList.add('oculto');
        
        // Escuchamos el evento 'transitionend' para quitar el banner del DOM
        // solo después de que la animación de CSS haya terminado.
        // El { once: true } hace que el listener se elimine solo después de ejecutarse una vez.
        banner.addEventListener('transitionend', () => {
            banner.style.display = 'none';
        }, { once: true });
    }
}

// Fondo dinamico Tipo: Vanta
VANTA.NET({
  el: "body",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x3fb950,
  backgroundColor: 0x0d1117,
  points: 10.00,
  maxDistance: 25.00,
  spacing: 16.00
});