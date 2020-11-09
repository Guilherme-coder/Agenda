var cont = 0;
const buttonSave = document.querySelector(".write");
const inputName = document.querySelector("#name-form");
const inputNumber = document.querySelector("#number-form");
const inputEmail = document.querySelector("#email-form");

buttonSave.addEventListener("click", (event) => {
    event.preventDefault();
    let people = new Array();
    if (localStorage.hasOwnProperty("people")) {
        people = JSON.parse(localStorage.getItem("people"))
    }
    people.push({id: cont, name: inputName.value, number: inputNumber.value, email: inputEmail.value});

    cont += 1;

    localStorage.setItem("people", JSON.stringify(people))
    
    const name = inputName.value;
    const number = inputNumber.value;
    const email = inputEmail.value;
    
    write(name, number, email);    
});