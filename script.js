setInterval(setClock, 1000)

const sHand = document.querySelector('[data-s-hand]');
const mHand = document.querySelector('[data-m-hand]');
const hHand = document.querySelector('[data-h-hand]');

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    setRotation(sHand, secondsRatio);
    setRotation(mHand, minutesRatio);
    setRotation(hHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()