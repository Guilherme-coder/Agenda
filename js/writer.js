function write(name, number, email){
    console.log("escrevendo dados");
    const line = document.createElement("tr");
    const content = 
        `<td class="column-table">${name}</td>
        <td class="column-table">${number}</td>
        <td class="column-table">${email}</td>
        <td><button class="remove">Remover</button><td>`;
    line.innerHTML = content;

    const table = document.querySelector("[data-schedule]");
    table.appendChild(line);


    return table;
}