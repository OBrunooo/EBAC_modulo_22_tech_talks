document.addEventListener("DOMContentLoaded", function(){
    AOS.init();


    const dataDoEvento = new Date("Dec 12, 2024 19:00:00");
    const timeStempDoEvento = dataDoEvento.getTime();


    const contaAsHoras= setInterval(function(){
        const agora = new Date();
        const timeStempAtual = agora.getTime();

        const distanciaAteOEvento = timeStempDoEvento - timeStempAtual;

        const diaEmMs = 1000 * 60 * 60 * 24;
        const horaEmMs = 1000 * 60 * 60;
        const minutoEmMs = 1000 * 60;

        const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
        const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
        const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
        const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

        document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}min ${segundosAteOEvento}s`

        if (distanciaAteOEvento<0) {
            clearInterval(contaAsHoras);
            document.getElementById('contador').innerHTML = `já começou`
        }
    },1000)
})