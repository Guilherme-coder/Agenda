var cont = 0;
function saveLocal(nameTd, numberTd, emailTd){
        let people = new Array();
        if (localStorage.hasOwnProperty("people")) {
            people = JSON.parse(localStorage.getItem("people"))
        };
        people.push({id: cont, name: nameTd, number: numberTd, email: emailTd});
    
        cont += 1;
    
        localStorage.setItem("people", JSON.stringify(people))
};