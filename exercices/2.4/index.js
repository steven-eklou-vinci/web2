const startingButton = document.querySelector('#myBtn1');
const msgSpan = document.querySelector('#mySpan1');

startingButton.addEventListener("mouseover", delayedAlert);
startingButton.addEventListener("click",clearAlert);

let timeoutID;
const delayInSecond = 5;
const delayInMiliSeconds = delayInSecond *1000

function delayedAlert() {
    if(timeoutID){
        timeoutID = setTimeout(()=>{
            msgSpan.innerHTML = "Game over, you did not click 10 times within 5s !" 
            startingButton.style.display = 'none'
        }, delayInMiliSeconds)
    }
    
   
}

let numberOfClick=0;
function clearAlert() {
    numberOfClick++;
    if(numberOfClick===10){
        clearTimeout(timeoutID)
        msgSpan.innerHTML = `You win ! You clicked 10 times within ${delayInMiliSeconds} ms`
        startingButton.style.display = 'none'
    }
    console.log( "Number of clicks : "+numberOfClick)
}