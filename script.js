const board = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
let currentPlayer = 'X';
function render(){
const allBox = document.querySelectorAll('.box');
allBox.forEach((boxElement,i)=>{
    if(board[i] === 'X' ){
        boxElement.innerHTML = '<img src= close.png alt="X" height = "60px" />';                                                                                      
    }
    else if(board[i] === '0' ){  
        boxElement.innerHTML = '<img src= circle-ring.png alt="0" height = "70px" />';
    }
    else{
        boxElement.innerHTML = '';
    }           
})
}
 function SelectBox(boxNumber){
    if(board[boxNumber] !== -1){
        alert("Wrong Move Mate. Think Again!");
    return;
    }
board[boxNumber] = currentPlayer;
if(currentPlayer === 'X'){
    currentPlayer = '0';
}
else{
    currentPlayer = 'X';
}
const currentplayerElement = document.getElementById('current');
currentplayerElement.innerText = currentPlayer ;
render(); 
checkWinner();
}
 render()
 function reset(){
     board.fill(-1);
     render();
 }
 function checkWinner(){
     if(board[0] === board[1] && board[1] === board[2] && board[0] !== -1){
         alert(`${board[0]} is the winner`);
     }
     else if(board[3] === board[4] && board[4] === board[5] && board[3] !== -1){
        alert(`${board[3]} is the winner`);
    }
    else if(board[6] === board[7] && board[7] === board[8] && board[6] !== -1){
        alert(`${board[6]} is the winner`);
    }
    else if(board[0] === board[3] && board[3] === board[6] && board[0] !== -1){
        alert(`${board[0]} is the winner`);
    }
    else if(board[1] === board[4] && board[4] === board[7] && board[1] !== -1){
        alert(`${board[1]} is the winner`);
    }
    else if(board[2] === board[5] && board[5] === board[8] && board[2] !== -1){
        alert(`${board[2]} is the winner`);
    }
    else if(board[0] === board[4] && board[4] === board[8] && board[0] !== -1){
        alert(`${board[0]} is the winner`);
    }
    else if(board[2] === board[4] && board[4] === board[6] && board[2] !== -1){
        alert(`${board[2]} is the winner`);
    }
 }                                                                          