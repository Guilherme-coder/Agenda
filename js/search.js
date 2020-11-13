var inputSearch = document.querySelector("#search");

inputSearch.addEventListener("input", function(){
    var tableNames = document.querySelectorAll(".lines");
    
    if(this.value.length > 0){
        for(let i = 0 ; i < tableNames.length ; i++){
            let one = tableNames[i];
            let tdName = one.querySelector(".names");
            let name = tdName.textContent;
    
            if(name != this.value){
                one.classList.add("canceled");
            }
            else{
                one.classList.remove("canceled");
            }
        };
    }else{
        for(let i = 0 ; i < tableNames.length ; i++){
            let one = tableNames[i];
            one.classList.remove("canceled");        
        };
    };
    
});