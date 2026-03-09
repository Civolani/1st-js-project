
let addbutton = document.getElementById('add-button')

let list = document.getElementById('list')





addbutton.addEventListener('click', function() {

    let newtask = document.createElement('li')
    let taskHTML = '<input type="checkbox" style=margin-right:10px>';

    newtask.innerHTML = taskHTML + document.getElementById('new-item').value
    
    list.appendChild(newtask)

    document.getElementById('new-task').textContent = ""

})