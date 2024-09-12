let boxes = document.body.querySelectorAll(".box");
let resetBtn = document.querySelector("#btn2");
let newgameBtn = document.querySelector("#btn1");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame = () =>{
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener( "click" ,() =>{
        if (turn0) {
            box.innerText = "0"
            turn0 = false; 
        } else {
            box.innerText = "X"
            turn0 = true;
        }  
        box.disabled = true;
        checkWinner(); 
    })
});

const disabledBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    };
};
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    };
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide")
    disabledBoxes();
};

const checkWinner = () =>{
    for(pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
            showWinner(pos1val);    
            }
        }
    }
};

newgameBtn.addEventListener("click" ,resetGame);
resetBtn.addEventListener("click" ,resetGame);


