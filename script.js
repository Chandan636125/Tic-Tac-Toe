let boxes = document.querySelectorAll(".box");
let win = document.querySelector(".hide");
let msg = document.querySelector("#msg");
let newbt = document.querySelector("#new-game");
let count = 0;

const array = [[0,1,2],
               [0,3,6],
               [0,4,8],
               [1,4,7],
               [2,5,8],
               [2,4,6],
               [3,4,5],
               [6,7,8]];
let turnX = true;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText === "") { // prevent overwriting
            if (turnX) {
                box.innerText = "X";
                turnX = false;
            } else {
                box.innerText = "O";
                turnX = true;
            }

            box.disabled = true;
            count++;
            console.log(count);

            let iswin = checkwinner();
            if(count === 9 && !iswin)
            {
                msg.innerText = "The Match is a Draw";
                win.classList.remove("hide");
            }
        }
    });
});

const show = (val1) => {
    console.log(val1);
    msg.innerText = `Hey the winner is ${val1}`;
    win.classList.remove("hide");
    disablebox();
}

const disablebox = () => {
    boxes.forEach(box =>
    {
        box.disabled = true;
    });
}

const checkwinner = () => {
    for(let bx of array)
    {
        let val1 = boxes[bx[0]].innerText;
        let val2 = boxes[bx[1]].innerText;
        let val3 = boxes[bx[2]].innerText;

        if(val1 !== "" && val2 !== "" && val3 !== ""){
            if(val1 === val2 && val2 === val3)
            {
                show(val1);
                return true;
            }
        }
    }
}

newbt.addEventListener("click", () => {
    enablebox();
    count = 0;
    win.classList.add("hide");
});

const enablebox = () => {
    boxes.forEach((box) =>
    {
        box.disabled = false;
        box.innerText = "";
    }
    )
}
