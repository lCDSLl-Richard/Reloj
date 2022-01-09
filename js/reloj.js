const mostrarReloj = () => {
    let fecha = new Date();
    let hr = fecha;
    hr = moment().format("HH:mm:ss");

    let dia = fecha;
    dia = moment().format('L')

    document.getElementById('hora').innerHTML = hr;
    document.getElementById('fecha').innerHTML = dia

}

setInterval(mostrarReloj, 1000)