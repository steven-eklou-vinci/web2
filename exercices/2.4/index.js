const startingButton = document.querySelector('#myBtn1');
let msgSpan = document.querySelector('#mySpan1');

startingButton.addEventListener("mouseover", delayedAlert);
startingButton.addEventListener("click",clearAlert);

let timeoutID;
const delayInSecond = 5;
const delayInMiliSeconds = delayInSecond *1000
let startTimeGame;

function delayedAlert() {
    if(timeoutID===undefined){
        startTimeGame = Date.now();
        timeoutID = setTimeout(()=>{
            msgSpan.innerHTML = "Game over, you did not click 10 times within 5s !" 
            startingButton.style.display = 'none'
        }, delayInMiliSeconds)
    }
    return;
}

let numberOfClick=0;
function clearAlert() {
    numberOfClick++;
    if(numberOfClick===10){
        clearTimeout(timeoutID)
        const endTime = Date.now();
        elapsedTimeTotal = (endTime - startTimeGame)/1000
        msgSpan.innerHTML = `You win ! You clicked 10 times within ${elapsedTimeTotal.toFixed(2)} ms`
        startingButton.style.display = 'none'
    }
    console.log( "Number of clicks : "+ numberOfClick)
}