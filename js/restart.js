window.onload = initPage;
function initPage(){
    console.log("pagina recarregada");
    if (localStorage.hasOwnProperty("people")) {
        people = JSON.parse(localStorage.getItem("people"));
    }
    var peopleLocal = JSON.parse(localStorage["people"]);
    for (var i in peopleLocal){
        const recoveredName = peopleLocal[i].name;
        const recoveredNumber = peopleLocal[i].number;
        const recoveredEmail = peopleLocal[i].email;

        save(recoveredName, recoveredNumber, recoveredEmail);
  }
  console.log(select("tr.lines"));
}