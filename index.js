// Write your code here!
const body = document.querySelector('body');
const mainHeader = document.querySelector('#main');
body.removeChild(mainHeader);

let yourName = 'Harry';

let newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = `${yourName} is the champion`;
body.appendChild(newHeader);
