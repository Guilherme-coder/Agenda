function makeTr(){
    var table = $("#table-body");
    var data = Array();
    data = getValues();
    var tr = $("<tr class='table-row'></tr>");

    var tdName = $(`<td class='names table-td'>${data[0]}</td>`);
    var tdNumber = $(`<td class='numbers table-td'>${data[1]}</td>`);
    var tdEmail = $(`<td class='emails table-td'>${data[2]}</td>`);
    
    var buttonEdit = $(`
        <a href="#name">
            <button id='table-edit' class='btn btn-primary editor' type='button'>Editar</button>
        </a>
    `);
    var buttonRemove = $("<button id='table-remove' class='btn btn-danger' type='button'>Remover</button>")

    var tdActions = $("<td class='actions table-td'></td>");
    tdActions.append(buttonEdit);
    tdActions.append(buttonRemove);

    buttonEdit.on("click", () => {
        console.log("Você entrou na seção de editar items.");
        editItem(data);
        
        
        
    });
    buttonRemove.on("click", () => {
        console.log("Você clicou para remover o contato.");
    });

    tr.append(tdName);
    tr.append(tdNumber);
    tr.append(tdEmail);
    tr.append(tdActions);
    table.append(tr);   
    
    
    cleanForm();
};