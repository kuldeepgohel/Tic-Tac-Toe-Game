var boxs = document.querySelectorAll(".box");
var resetBtn = document.querySelector("#reset");
var newBtn = document.querySelector("#new");
var msgContainer = document.querySelector(".msg-container");
var msg = document.querySelector("#msg");
var xscore = document.querySelector(".Xscore");
var oscore = document.querySelector(".Oscore");

var turnO = true; // player X,player O
var xs = 0;
var os = 0;

//
const winPatterns = [[0, 1, 2],
[0, 3, 6],
[0, 4, 8],
[1, 4, 7],
[2, 5, 8],
[2, 4, 6],
[3, 4, 5],
[6, 7, 8]
];

boxs.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO == true) {
            //playerO
            box.innerText = "O";
            turnO = false;
        }
        else {
            //playerX
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes = () => {
    for (let box of boxs) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (let box of boxs) {
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner} `;
    msgContainer.classList.remove("hide");
    scoreUpdate(winner);
    disableBoxes();
}

const checkWinner = () => {
    for (let pattern of winPatterns) {

        let pos1Val = boxs[pattern[0]].innerText;
        let pos2Val = boxs[pattern[1]].innerText;
        let pos3Val = boxs[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

const scoreUpdate = (winner) => {
    console.log('score update', winner)
    if (winner == 'X') {
        console.log(xs)
        xs++;
        xscore.innerText = xs;
    }
    else if (winner == 'O') {
        console.log('OS', os)
        os++;
        oscore.innerText = os;
    }
}