const money = document.querySelector(".money");

let fahdil = 0

function kejo(){
    if(fahdil == 0){
        money.style.display="block";
        fahdil = 1;
    }
    else if(fahdil == 1){
        money.style.display="none";
        fahdil = 0;
    }

}