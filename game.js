let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let msg=document.querySelector(".msg");
let player1Turn=true;

// we will create a 2D array to store the winning positions.
let arr=[[0,1,2] ,
         [3,4,5],
         [6,7,8],
         [0,3,6],
         [1,4,7],
         [2,5,8],
         [0,4,8],
         [2,4,6]]


// now we will check for the playerTurn and on the basic of that will place X or O in the boxes on clicking

boxes.forEach((box) =>{
    box.addEventListener("click" , ()=>{
        if(player1Turn){
            box.innerText="X";
            player1Turn=false;
            box.style.backgroundColor="lightblue"
        }
        else{
            box.innerText="O";
            player1Turn=true;
             box.style.backgroundColor="aqua"
        }
        box.disabled=true;
        hasPlayerWon();
    });
});

// Our all function will be here .

//1. First of all we will write a function to check whether a palyer after a move has won or not ?
const hasPlayerWon = ()=>{
    for(let move of arr)
    {
        let move1=boxes[move[0]].innerText;
        let move2=boxes[move[1]].innerText;
        let move3=boxes[move[2]].innerText;

        if(move1!="" && move2!="" && move3!="")
        {
            // if all three moves are marked than we will check for them whether they are same or not.
            if(move1===move2 && move1===move3)
            {
                showWinner(move1);
                disableButtons();
            }
        }
    }
};
const showWinner = (winner) =>{
    msg.innerHTML=`Congratulations! Player ${winner} has Won the Game.`
    disableButtons();
}
const resetButtons= () =>{
    boxes.forEach((box) =>{
        box.disabled=false;
        box.innerText="";
         box.style.backgroundColor=""
    })
    player1Turn=true;
    msg.innerHTML="";
}
const disableButtons=() =>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}

resetBtn.addEventListener("click", resetButtons);