const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const allHands = document.querySelectorAll('.hand');

function setDate() {
    // store the Date constructor in "now", so we can utilize its built in methods
    const now = new Date();

    // take the units of time, convert them to degrees of a circle, apply relevant degree value to hand
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90; // the 90 is there to offset our transform: rotate(90deg); in CSS
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
    console.log('seconds: ', seconds);
    console.log('secondsDegrees: ', secondsDegrees);

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360);
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360);
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    // prevents a glitch that happens when the second hand has done a full rotation
    if(secondsDegrees === 90) {
        allHands.forEach(hand => hand.style.transition = 'none')
    } else {
        allHands.forEach(hand => hand.style.transition = '')
    }
}

setInterval(setDate, 1000);