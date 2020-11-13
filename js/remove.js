var table = document.querySelector(".table-main");

table.addEventListener("click", (event) => {
    if(event.target.className === "btn btn-danger remove"){
        alert("Esse item da agenda vai ser excluído.");
        
        
        const excluded = event.target.parentNode;
        console.log(excluded);
        
        
        
        let nome = excluded.childNodes;
        console.log(nome[2]);

        for(let i = 0 ; i < localStorage.length ; i++){
            let data = JSON.parse(localStorage.getItem(i));
            if(nome[2].textContent === data[0].email){
                localStorage.removeItem(i);
                let fakeData = new Array();
                fakeData.push({name: "0", number: "0", email: "0",});
                localStorage.setItem(i, JSON.stringify(fakeData));
                setTimeout(function() {
                    event.target.parentNode.remove();
                }, 200);
            };
        };
        
        
        
        
        
        
        
        
        
    }
});

