let dropdown = document.querySelectorAll('button')

let weapon = ""

dropdown.forEach(function(selection) {
    selection.addEventListener('click', function(choice) {
        if (choice.target.textContent !== "shoot") {weapon = choice.target.textContent
        } else {
            

            }
        }
    }
)})