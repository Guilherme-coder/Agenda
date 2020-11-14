table.addEventListener("click", (event) => {
    if(event.target.className === "btn btn-info edit"){
        alert("Você selecionou este item para edição.");
        
        const changes = getInput(input);

        const newName = changes[0];
        const newNumber = changes[1];
        const newEmail = changes[2];
        const newData = new Array({name: newName, number: newNumber, email: newEmail});
        editTable(newName, newNumber, newEmail);
        event.target.parentNode.remove();
        let excluded = event.target.parentNode;
        let nome = excluded.childNodes;
        for(let i = 0 ; i < localStorage.length ; i++){
            let data = JSON.parse(localStorage.getItem(i));
            console.log(nome[0].textContent);
            if(data[0].name === nome[0].textContent){    
                localStorage.removeItem(i);
                let fakeData = new Array();
                fakeData.push({name: "0", number: "0", email: "0",});
                localStorage.setItem(i, JSON.stringify(fakeData));
                localStorage.setItem(i, JSON.stringify(newData));
            }
            else{
                console.log("Algo deu errado.");
            };

        };
    };
    setEmpty(input);
});


function editTable(name, number, email){
    makeTr(name, number, email);
};