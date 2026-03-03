
let selectedweapon = ""

let cpuselectedweapon = ''

let outcome = ''

// Rock = 3
// Scissors = 2
// Paper = 1

let weaponList = document.querySelectorAll('.weapon')

let cpu = document.getElementById('cpu-choice')

let display = document.getElementById('outcomedisplay')

let options = ['Paper', 'Scissors', 'Rock']
let index = 0 

setInterval(function() {
    if (display.textContent === '' || display.textContent === 'Select Your Weapon!') {
    cpu.textContent = options[index];
    index = (index + 1) % 3
    }
}, 500)

document.addEventListener('click', function (clickedout) {
    weaponList.forEach(function(btn) {btn.classList.remove('selected')});
    if (clickedout.target.classList.contains('weapon')) {
      clickedout.target.classList.add('selected')
      selectedweapon = clickedout.target.id;
      console.log(clickedout.target.textContent)
    }

})


document.getElementById('shoot').addEventListener('click', function (deselect) {

    if (selectedweapon !== '') {
    weaponList.forEach(function(btn) {btn.classList.remove('selected')})
    console.log('Shoot!')
    cpuselectedweapon = (Math.floor(Math.random() * 3) + 1)
    cpu.textContent = options[cpuselectedweapon - 1]
    console.log('CPU Weapon:', cpuselectedweapon)
    outcome = selectedweapon - cpuselectedweapon
    if (outcome === 1 || outcome === -2) {
        console.log('Victory')
        display.classList.add('victorycolor')
        display.textContent = 'Victory!'
    }
    if (outcome === 2 || outcome === -1) {
        console.log('Defeat')
        display.classList.add('defeatcolor')
        display.textContent = 'Defeat!'
    }
    if (outcome === 0) {
        console.log('Tie')
        display.classList.add('tiecolor')
        display.textContent = 'Tie!'
    }} else {display.textContent = 'Select Your Weapon!'; display.classList.add('weaponunselected')}
    
    selectedweapon = ''

    setTimeout(function() {
        display.classList.remove('victorycolor', 'defeatcolor', 'tiecolor', 'weaponunselected')
        display.textContent = '';
    }, 2500)
})



