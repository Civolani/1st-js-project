
let selectedweapon = ""

let weapon = document.querySelectorAll('.weapon')


document.addEventListener('click', function (clickedout) {
    if (clickedout.target.classList === "userchoices") {
    weapon.forEach(function(btn) {btn.classList.remove('selected')})
    }
})

weapon.forEach(function(choice) {
    choice.addEventListener('click', function(object) {
    weapon.forEach(function(btn) {btn.classList.remove('selected')});
    object.target.classList.add('selected')
    selectedweapon = object.target.textContent;
    console.log(selectedweapon)
})})

document.getElementById('shoot').addEventListener('click', function (deselect) {
    weapon.forEach(function(btn) {btn.classList.remove('selected')})
    console.log('Shoot!')
})


