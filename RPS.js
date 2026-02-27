
let selectedweapon = ""

let weaponList = document.querySelectorAll('.weapon')

let cpu = document.getElementById('cpu-choice')

let options = ['Paper', 'Scissors', 'Rock']
let index = 0 

setInterval(function() {
    cpu.textContent = options[index];
    index = (index + 1) % 3
}, 500)

document.addEventListener('click', function (clickedout) {
    weaponList.forEach(function(btn) {btn.classList.remove('selected')});
    if (clickedout.target.classList.contains('weapon')) {
      clickedout.target.classList.add('selected')
      selectedweapon = clickedout.target.textContent;
      console.log(selectedweapon)
    }

})


document.getElementById('shoot').addEventListener('click', function (deselect) {
    weaponList.forEach(function(btn) {btn.classList.remove('selected')})
    console.log('Shoot!')
})


