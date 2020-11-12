const add = document.querySelector(".add-button");
var input = document.querySelector(".input-form");

setEmpty(input);

function initTr(){
    const values = getInput(input);
    
    const name = values[0];
    const number = values[1];
    const email = values[2];
    
    makeTr(name, number, email);
    saver(name, number, email);

    setEmpty(input);
};
    

    


function getInput(input){
    const name = input.name.value;
    const number = input.number.value;
    const email = input.email.value;
    return [name, number, email];
}


function makeTr(name, number, email){
    const tableBody = document.querySelector(".table-body");

    const trMain = document.createElement("tr");
    trMain.classList.add("lines");
    const tdName = document.createElement("td");
    const tdNumber = document.createElement("td");
    const tdEmail = document.createElement("td");

    const removeButton = document.createElement("button");
    removeButton.classList.add("btn");
    removeButton.classList.add("btn-danger");
    removeButton.classList.add("remove");
    removeButton.setAttribute("type", "button");
    removeButton.textContent = "Remover";

    const editButton = document.createElement("button");
    editButton.classList.add("btn");
    editButton.classList.add("btn-info");
    editButton.classList.add("edit");
    editButton.setAttribute("type", "button");
    editButton.textContent = "Editar";

    tdName.textContent = name;
    tdNumber.textContent = number;
    tdEmail.textContent = email;

    trMain.appendChild(tdName);
    trMain.appendChild(tdNumber);
    trMain.appendChild(tdEmail);
    trMain.appendChild(removeButton);
    trMain.appendChild(editButton);


    tableBody.appendChild(trMain);
};


function setEmpty(form){
    form.name.value = "";
    form.number.value = "";
    form.email.value = "";

    form.name.focus();

}