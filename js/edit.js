table.addEventListener("click", (event) => {
    if(event.target.className === "btn btn-info edit"){
        alert("Você selecionou este item para edição.");
        
        const changes = getInput(input);

        const newName = changes[0];
        const newNumber = changes[1];
        const newEmail = changes[2];
        editTable(newName, newNumber, newEmail);
        event.target.parentNode.remove();
    }
});


function editTable(name, number, email){
    makeTr(name, number, email);

}