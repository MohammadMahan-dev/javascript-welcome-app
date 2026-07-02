const Button = document.querySelector("#button");
const input = document.querySelector("#nameInput");
const text = document.querySelector("#text");
Button.addEventListener("click",sayWelcome);
function sayWelcome(){
    let NewInput = input.value.trim();
    if(NewInput.length>=20){
        text.textContent="long name !";
    }else if(NewInput.length<=3&&NewInput.length!=0){
        text.textContent="short name !";
    }else if(NewInput.length===0){
        text.textContent="please enter your name!";
    }else{
        if (NewInput==="mohammed"){
            text.textContent=`Welcome back ${NewInput} `;
        }else{
        text.textContent=`Welcome ${NewInput}`;
        }
    }
}