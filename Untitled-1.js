// Configuración: 3 días desde que el usuario entra (72 horas)
// Si prefieres una fecha fija, cámbialo aquí.
let countDownDate = localStorage.getItem('lucky_timer');

if (!countDownDate) {
    countDownDate = new Date().getTime() + (3 * 24 * 60 * 60 * 1000);
    localStorage.setItem('lucky_timer', countDownDate);
}

const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "OFERTA EXPIRADA";
    }
}, 1000);