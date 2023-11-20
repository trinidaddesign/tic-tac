const cell = document.querySelectorAll('.cell')
cell.forEach((cell => {
    cell.addEventListener('click', handleClick, {once: true})
}))//will handle only letting cell be clicked once




function handleClick(){
    
}