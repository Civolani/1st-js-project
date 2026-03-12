
let addbutton = document.getElementById('add-button')

let list = document.getElementById('list')

let listcheckbox = document.getElementById('listcheckbox')



addbutton.addEventListener('click', function() {
    if (document.getElementById('new-item').value.trim() !== ""){
    let newtask = document.createElement('li')
    let taskHTML = '<input type="checkbox" id="listcheckbox" style=margin-right:10px>';

    newtask.innerHTML = taskHTML + document.getElementById('new-item').value
    
    list.appendChild(newtask)

    document.getElementById('new-item').value = ""
    }
})

list.addEventListener('change', function(check) {
    if (check.target.type === 'checkbox') {
        {check.target.parentElement.classList.toggle('checked')}}
})