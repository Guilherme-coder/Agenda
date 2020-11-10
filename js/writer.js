function save(name, number, email){
    var table = document.querySelector(".table-main");

    var mainTr = document.createElement("tr");
    mainTr.classList.add('lines');
    var nameTd = document.createElement("td");
    var numberTd = document.createElement("td");
    var emailTd = document.createElement("td");

    nameTd.textContent = name;
    numberTd.textContent = number;
    emailTd.textContent = email;

    mainTr.appendChild(nameTd);
    mainTr.appendChild(numberTd);
    mainTr.appendChild(emailTd);
    

    table.appendChild(mainTr);
    
    var trs = select("tr.lines");
    console.log(trs);

};