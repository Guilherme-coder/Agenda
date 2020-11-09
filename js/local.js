class Local{
    name =  document.querySelector("#name-form");
    number = document.querySelector("#number-form");
    email = document.querySelector("#email-form");
    
    save(name, number, email) {
        var data = [
            name,
            number,
            email
        ];
        localStorage.setItem(data, "true")
    };
};