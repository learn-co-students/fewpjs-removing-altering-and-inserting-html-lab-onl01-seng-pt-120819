// Write your code here!
let element = document.querySelector("main#main");
element.remove();

let newHeader = document.createElement('h1');
newHeader.id = "victory";
newHeader.innerHTML = "is the champion";

document.body.appendChild(newHeader);