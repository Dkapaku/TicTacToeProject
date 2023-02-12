//Gameplan: Give elements to each part that needs to be pressed
//Player should alternate between X' and O'
// Button click RESET should reset the gamestate to base
//Win conditions 
let winCon=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];
let buttonElement=document.getElementById("reset")
let messageElement=document.getElementsByTagName("p")
let gameBoard= ['','','','','','','','','']
let tableElement=document.getElementsByClassName("square")
function clickOnSquare(event){
    if (player1==true){
        player1=false;
    event.target.innerHTML = "X"
    console.log(event.target)}
    else if (player1==false) {
        player1=true
        event.target.innerHTML = "O"}

}
for(let i=0; i<tableElement.length; i++){tableElement[i].addEventListener("click", clickOnSquare)}
let player1=true

function gameRestart(){
    gameBoard= ['','','','','','','','','']
    gameboard.ForEach(tableElement)
    }
buttonElement.addEventListener("click", gameRestart)
