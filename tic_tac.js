const cell = document.querySelectorAll("[data-cell]")
const X_Class = 'x'
const Circle_class = 'circle'
const winningText = document.querySelector('[winning-message-text]')
const winningMessageElm = document.querySelector('.winning_Message')
const restartBtn = document.querySelector('#restart_Btn')
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

startGame()

restartBtn.addEventListener('click', startGame)

function startGame(){
    circleTurn = false
    cell.forEach((cell) => {
        cell.classList.remove(X_Class)
        cell.classList.remove(Circle_class)
        cell.addEventListener('click', handleClick, {once: true})
    })
    winningMessageElm.classList.remove('show')
}

function handleClick(e){
    const cell = e.target
    const currentClass = circleTurn ? Circle_class : X_Class
    //place mark
    placeMark(cell, currentClass)
    //check for win
    if(checkWin(currentClass)){
        endGame(false)
    }else if(isDraw()){
        endGame(true)
    }else{
        switchTurns()
    }
    //check for draw
    //switch turns
    
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

function endGame(draw){
    if(draw){
        winningText.innerText = 'Draw'
    }else{
        winningText.innerText = `${circleTurn? "O wins!" : "X wins!"}`
    }
    winningMessageElm.classList.add('show')
}

function isDraw(){
    return [...cell].every(cell => {
        return cell.classList.contains(X_Class) ||
        cell.classList.contains(Circle_class)
    })
}