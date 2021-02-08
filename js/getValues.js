function getValues(){
    var name = $("#name").val();
    var number = $("#number").val();
    var email = $("#email").val();
    
    return [name, number, email];
};

function cleanForm(){
    var name = $("#name").val("");
    var number = $("#number").val("");
    var email = $("#email").val("");
}