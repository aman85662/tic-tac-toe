const board = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
let currentPlayer = 'X';
function render(){
const allBox = document.querySelectorAll('.box');
allBox.forEach((boxElement,i)=>{
    if(board[i] === 'X' ){
        boxElement.innerHTML = '<img src= close.png alt="X" height = "70px" />';                                                                                      
    }
    else if(board[i] === '0' ){  
        boxElement.innerHTML = '<img src= circle-ring.png alt="0" height = "80px" />';
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
}
 render()