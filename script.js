let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function updateClock() {
    let now = new Date(); //Date é a classe utilizada para manipulação de data
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`; // configuração do relógio digital

    // configurando a rotação dos ponteiros do relógio analógico
    let sDeg = ((360 / 60) * second) - 90;
    let mDeg = ((360 / 60) * minute) - 90;
    let hDeg = ((360 / 12) * hour) - 90;

    sElement.style.transform = `rotate(${sDeg}deg)`; //adiciona estilo CSS em cada ponteiro
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`; 
}

function fixZero(time) { //função que corrige a falta de zero no formato do horário
    return time < 10 ? `0${time}` : time;
}

setInterval(updateClock, 1000); //a função roda a cada 1 seg (1000ms)
updateClock(); //para o relógio ser carregado instantaneamente