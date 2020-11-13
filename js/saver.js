function saver(nameTd, numberTd, emailTd){
    var people = new Array();
    people.push({name: nameTd, number: numberTd, email: emailTd});
    
    
    localStorage.setItem(searchPosition(), JSON.stringify(people));
}

function searchPosition(){
    if(localStorage.length === 0){
        return 0;
    }
    
    for (var i = 0; i < localStorage.length; i++) {
        let data = JSON.parse(localStorage.getItem(i));
        if(data[0].name === "0"){
            return i;
        };
    };
    return i;
};
