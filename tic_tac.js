const cell = document.querySelectorAll("[data-cell]")
const X_Class = 'x'
const Circle_class = 'circle'
const winning_Combinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
let circleTurn

cell.forEach((cell) => {
    cell.addEventListener('click', handleClick, {once:true})
})

function handleClick(e){
    const cell = e.target
    const currentClass = circleTurn ? Circle_class : X_Class
    //place mark
    placeMark(cell, currentClass)
    //check for win
    if(checkWin(currentClass)){
        console.log('winner')
    }
    //check for draw
    //switch turns
    switchTurns()
}

function placeMark(cell, currentClass){
    cell.classList.add(currentClass)
}

function switchTurns(){
    circleTurn = !circleTurn
}

function checkWin(currentClass){
    return winning_Combinations.some(combination => {
        return combination.every(index => {
            return cell[index].classList.contains(currentClass)
        })
    })
}