
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

listcheckbox.forEach(function(check) {
    check.addEventListener('click', function(clickedbox) {
        if (clickedbox.target.) 
    })
})