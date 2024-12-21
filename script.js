const board = ['0',-1,-1,-1,-1,-1,-1,-1,'X'];
function render(){
const allBox = document.querySelectorAll('.box');

allBox.forEach((boxElement,i)=>{
    if(board[i] === 'X' ){
        boxElement.innerHTML = 'X';
    }
    else if(board[i] === '0' ){  
        boxElement.innerHTML = '0';
    }
    else{
        boxElement.innerHTML = '';
    }           
})

}
render()
