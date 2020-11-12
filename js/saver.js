function saver(nameTd, numberTd, emailTd){
    let people = new Array();
    if (localStorage.hasOwnProperty("people")) {
        people = JSON.parse(localStorage.getItem("people"))
    };
    people.push({name: nameTd, number: numberTd, email: emailTd});
    localStorage.setItem("people", JSON.stringify(people));
};