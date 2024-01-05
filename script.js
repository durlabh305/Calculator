let string = "";
let input = document.querySelector("input");
let buttons = document.querySelectorAll(".c7");
let special = ["+", "-", "*", "/"];
Array.from (buttons).forEach((button) => {
    button.addEventListener('click', (event) => {
        if(event.target.innerHTML == "="){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(event.target.innerHTML == "RESET"){
            string = "";
            document.querySelector("input").value = string;
        }
        else if(event.target.innerText === "Del"){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else if(string === "" && special.includes(event.target.innerHTML)){
            string = "";
        }
        else{
        console.log(event.target);
        string = string + event.target.innerHTML;
        document.querySelector('input').value = string;
        }
    })
})