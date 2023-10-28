let msgSpan = document.querySelector('#mySpan1');
let myForm = document.querySelectorAll("form");

const onSubmit = (e) => {
    console.log("Je suis ici")
    e.preventDefault();
    myForm.style.display = 'none';
    msgSpan.innerHTML = "Le souhait est soumis !";
};
myForm.addEventListener("submit", onSubmit);
