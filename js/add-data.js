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
    if(!validateName(name)){
        alert("O dado que foi inserido na area do nome não pode ser aceito.");
        throw "O dado que foi inserido na area do nome não pode ser aceito.";
    };

    if(!!validateNumber(number)){
        alert("O dado que foi inserido na area do número de telefone não pode ser aceito.");
        throw "O dado que foi inserido na area do número de telefone não pode ser aceito.";
    };    

    if(!validateEmail(email)){
        alert("O dado que foi inserido na area do email não pode ser aceito.");
        throw "O dado que foi inserido na area do email não pode ser aceito.";
    };
    return [name, number, email];
};


function makeTr(name, number, email){
    const tableBody = document.querySelector(".table-body");

    const trMain = document.createElement("tr");
    trMain.classList.add("lines");
    const tdName = document.createElement("td");
    tdName.classList.add("names");
    const tdNumber = document.createElement("td");
    const tdEmail = document.createElement("td");
    tdEmail.classList.add("emails");
    const tdActions = document.createElement("td");
    tdActions.classList.add("actions");
    
    
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
    
    tdActions.appendChild(removeButton);
    tdActions.appendChild(editButton);
    
    trMain.appendChild(tdName);
    trMain.appendChild(tdNumber);
    trMain.appendChild(tdEmail);
    
    trMain.appendChild(tdActions);


    tableBody.appendChild(trMain);
};


function setEmpty(form){
    form.name.value = "";
    form.number.value = "";
    form.email.value = "";

    form.name.focus();

};