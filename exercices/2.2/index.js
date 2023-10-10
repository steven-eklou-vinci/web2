const counter = document.querySelector('#counter');
const message = document.querySelector('#theMessage');
let numberOfClick=0;
window.addEventListener('click', () => {
    numberOfClick++;
    counter.innerHTML ++;
    
    if(numberOfClick>=5 && numberOfClick<=9){
        message.innerHTML = "Bravo, bel échauffement !"
    }else{
        if (numberOfClick >=10){
            message.innerHTML = "Vous êtes passé maître en l'art du clic !"
        }
    } 
    console.log(numberOfClick);
  });