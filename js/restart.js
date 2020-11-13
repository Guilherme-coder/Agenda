window.onload = initPage;
function initPage(){
    for(let i = 0 ; i < localStorage.length ; i++){
        let data = JSON.parse(localStorage.getItem(i));
        if(data[0].name === "0"){
            continue;
        };
        makeTr(data[0].name, data[0].number, data[0].email);
    };
};