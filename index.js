// Write your code here!
// let element = document.createElement('div')
//
// document.body.appendChild(element)
//
// let ul = document.createElement('ul')
//
// for (let i = 0; i < 3; i++) {
//   let li = document.createElement('li')
//   li.innerHTML = (i + 1).toString()
//   ul.appendChild(li)
// }
//
// element.appendChild(ul)
//
// element.style.backgroundColor = '#27647B';
// element.style.textAlign = 'center';
// ul.style.textAlign = 'left';


let main = document.querySelector('main#main');
main.remove();

const name = "Milan Parmar";
let newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = `${name} is the champion!`;
