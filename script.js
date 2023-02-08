let squareElement=document.getElementById("square")
squareElement.setAttribute('square', squareElement.getAttribute('square'))
changesquare.addEventListener("click", changeXO)
function changeXO(clickedSquare){
    let target=clickedSquare.target
    if (target.className.length){
        target.className =''
    }
    else {
        target.className= x
    }
}
let x = 'x'
let o = 'o'

