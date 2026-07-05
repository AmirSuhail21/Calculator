let operatorButtons = document.querySelectorAll(".operator");
let digitButtons = document.querySelectorAll(".digit");
let ac = document.querySelector(".ac");
let enter = document.querySelector("#enter");
let input = document.querySelector("#input");
let resultDiv = document.querySelector("#result");

let num = null;
let operator = null;

digitButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        input.value += btn.innerText;
    });
});

operatorButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (input.value !== "") {
            num = parseFloat(input.value);
            operator = btn.innerText;
            input.value = "";
        }
    });
});

enter.addEventListener("click", () => {
    if (num !== null && operator !== null && input.value !== "") {
        let num2 = parseFloat(input.value);
        let result;

        if (operator === "+") {
            result = num + num2;
        } else if (operator === "−") {
            result = num - num2;
        } else if (operator === "×") {
            result = num * num2;
        } else if (operator === "÷") {
            result = num2 !== 0 ? num / num2 : "Error";
        }

        resultDiv.innerText = "Result : " + result;
        input.value = "";
        num = null;
        operator = null;
    }
});

ac.addEventListener("click", () => {
    input.value = "";
    resultDiv.innerText = "Result :";
    num = null;
    operator = null;
});
