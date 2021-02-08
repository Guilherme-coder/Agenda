function editItem(data){
    toggleClasses();

    var nameTd = $("#name");
    var numberTd = $("#number");
    var emailTd = $("#email");

    var buttonEdit = $(".editor");
    
    nameTd.val(data[0]);
    numberTd.val(data[1]);
    emailTd.val(data[2]);

    
    $(".edit-button").on("click", () => {
        var name = nameTd.val();
        var number = numberTd.val();
        var email = emailTd.val();
        console.log(`
            Name: ${name}\n
            Number: ${number}\n
            Email: ${email}`);

        makeEdition(name, number, email, buttonEdit);        
        toggleClasses();
        cleanForm();
    });
}

function toggleClasses(){
    $(".add-button").toggleClass("disabled");
    $(".edit-button").toggleClass("disabled");
};

function makeEdition(name, number, email, button){
    var tr = button.closest("tr");
    tr.find(".names").text(name);
    tr.find(".numbers").text(number);
    tr.find(".emails").text(email);
}