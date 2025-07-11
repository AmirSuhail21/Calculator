let operatorButtons = document.querySelectorAll(".operator");
let digitButtons = document.querySelectorAll(".digit");
let ac = document.querySelector(".ac");
let enter = document.querySelector("#enter");

digitButtons.forEach( (btn) =>{
    btn.addEventListener("click" , () =>{
        input.value += btn.innerText;
        console.log("print your digit!")
    }
    )
}
)
let num = null;
let operator = null;
operatorButtons.forEach((btn) =>{
    btn.addEventListener("click" ,() =>{
        num = parseFloat(input.value)
        operator = btn.innerText;
        input.value = "";
    } )
});


enter.addEventListener("click" , ()=>{
    let num2 = parseFloat(input.value);
    let result;

    if(operator === "+"){
        result = num + num2;
    }
    else if(operator === "−"){
        result = num - num2;
    }
    else if(operator === "×"){
        result = num * num2;
    }
    else if(operator === "÷"){
        result = num2 !== 0 ? num / num2 : Error;
    }   
        let res= document.querySelector("#result").innerText = "Result : " + result;
        input.value = "";

});

ac.addEventListener("click", ()=>{
    input.value = "";
    result.innerText = "Result :";
})

