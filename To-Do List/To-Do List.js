
let addbutton = document.getElementById('add-button')

let list = document.getElementById('list')

let newtask = document.createElement('li')

addbutton.addEventListener('click', function() {

    let newtask = document.createElement('li')
    newtask.textContent = document.getElementById('new-item').value
    list.appendChild(newtask)
    
})