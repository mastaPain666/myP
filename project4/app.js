const board = document.querySelector('#board')
const colors = ['#b44c4c', '#c5807f', '#741414', '#a46d5c', '#acbcc4', '#2c4d55']
const SQUARES_NUMBERS = 500

for (let i = 0; i < SQUARES_NUMBERS; i++) {
    
    const square = document.createElement('div')
   
    square.classList.add('square')
    square.addEventListener('mouseover', setColor)
    board.append(square)

    square.addEventListener('mouseleave', removeColor)

    board.append(square)
}

function setColor(event) {
    const element = event.target
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(event) {
    const element = event.target
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px black`
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}