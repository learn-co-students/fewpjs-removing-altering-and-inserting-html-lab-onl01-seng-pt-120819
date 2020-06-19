// Write your code here!
main.remove()


let newHeader = document.createElement('h1')
let victory = document.createTextNode("<h1>YOUR-NAME is the champion</h1>")
newHeader.setAttribute("id", "victory")

newHeader.appendChild(victory)
document.body.appendChild(newHeader)
