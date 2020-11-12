var table = document.querySelector(".table-main");

table.addEventListener("click", (event) => {
    if(event.target.className === "btn btn-danger remove"){
        alert("Esse item da agenda vai ser excluído.");
        event.target.parentNode.classList.add("canceled");
        setTimeout(function() {
            event.target.parentNode.remove();
        }, 200);
    }
});
