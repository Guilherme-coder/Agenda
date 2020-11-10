const add = document.querySelector("#add-button");
var input = document.querySelector(".input-form");

add.addEventListener("click", (event) => {
    event.preventDefault();
    
    const name = input.name.value;
    const number = input.number.value;
    const email = input.email.value;

    save(name, number, email);
    saveLocal(name, number, email);
});