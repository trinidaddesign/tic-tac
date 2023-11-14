

const cell = document.querySelectorAll('.cell')
const startBtn = document.querySelector('.start_btn')

startBtn.addEventListener('click', () =>{
  alert("hey")
})

function handleClick(e){
  e.target.textContent = "x"
}

cell.forEach((cell => {
  cell.addEventListener('click', handleClick, {once: true})
}))//will handle only letting cell be clicked once