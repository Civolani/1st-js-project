
let addbutton = document.getElementById('add-button')

let list = document.getElementById('list')

let listcheckbox = document.getElementById('listcheckbox')

function addtask() {
    if (document.getElementById('new-item').value.trim() !== ""){
    let newtask = document.createElement('li')
    let taskHTML = '<input type="checkbox" id="listcheckbox" style=margin-right:10px>';
    let removebutton = '<button id="removebutton">━</button>'

    newtask.innerHTML = taskHTML + document.getElementById('new-item').value + removebutton
    
    list.appendChild(newtask)

    document.getElementById('new-item').value = ""
    }
}

function loadtasks() {
    let = tasks = []
    document.querySelectorAll('#list li'),forEach(function(addlistitem) {
        
    })
}

addbutton.addEventListener('click', addtask)

document.getElementById('new-item').addEventListener('keydown', function(ent) {
    if (ent.key === 'Enter') {addtask()}
})

list.addEventListener('click', function(clickedobject) {
    if (clickedobject.target.type === 'checkbox') {
        {clickedobject.target.parentElement.classList.toggle('checked')}}

    if (clickedobject.target.id === 'removebutton') {
        clickedobject.target.parentElement.remove()
    }
})

loadtasks()