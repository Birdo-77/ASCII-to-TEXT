const ascii = document.querySelector(".ascii");
const txt   = document.querySelector(".txt");
const nAsc  = /[a-z]/;
var   isInv = false;

function con(){
    txt.innerHTML = "";
    if (isInv){
        let a = ascii.value.split("");
        a.forEach((el) => {
            txt.innerHTML += el.charCodeAt(0) + " ";
        });
    }else{
        let a = ascii.value.split(" ");
        if (!(nAsc.test(a))){
            a.forEach((el)=>{
                txt.innerHTML += String.fromCharCode(el);
            })
        }else{
            txt.innerHTML = "ERROR";
        };
    };
}

function inv(){
    isInv = !isInv;
    let h1 = document.querySelectorAll("h1");
    if (isInv){
        h1[0].innerHTML = "Text";
        h1[1].innerHTML = "Ascii";
    }else{
        h1[1].innerHTML = "Text";
        h1[0].innerHTML = "Ascii";
    }
}